import ReactMapGL, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import Supercluster from "supercluster";
import MapClusterList from "@/components/collections/map-cluster-list";
import MapBorder from "@/components/map/borderline/map-border";

export const Context = createContext({
  mapRef: undefined,
  points: [],
  supercluster: undefined,
  selectedLocation: undefined,
  setSelectedLocation: undefined,
});

export default function RenderMap(props) {
  const { vacancies, filterName } = props;
  const mapRef = useRef();
  const supercluster = new Supercluster({
    radius: 40,
    maxZoom: 20,
  });

  const center = { latitude: 48.3794, longitude: 31.1656 };
  const longitudeBoundaries = [40.35, 52.38];
  const latitudeBoundaries = [22.1, 44.14];
  const boundaries = [latitudeBoundaries, longitudeBoundaries];

  const [clusters, setClusters] = useState([]);
  const [cursor, setCursor] = useState("auto");
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 6,
    ...center,
  });
  const [selectedLocation, setSelectedLocation] = useState(undefined);
  const [countryBorder, setCountryBorder] = useState(undefined);

  const getZoom = () => {
    return mapRef.current ? mapRef.current.getMap().getZoom() : 0;
  };
  const getBounds = () => {
    if (!mapRef.current) return 0;

    const curBound = mapRef.current
      ? mapRef.current.getMap().getBounds().toArray()
      : 0;
    return [curBound[0][0], curBound[0][1], curBound[1][0], curBound[1][1]];
  };
  const calculateClusters = (points) => {
    if (!mapRef.current) return [];

    try {
      supercluster.load(points);
      const clusters = supercluster.getClusters(getBounds(), getZoom());
      return clusters.map((cluster) => {
        const properties = {
          ...cluster.properties,
          cluster: cluster.properties.cluster_id !== undefined,
        };
        const coordinates = cluster.geometry.coordinates;
        if (cluster.properties.cluster_id !== undefined) {
          const leaves = supercluster.getLeaves(
            cluster.properties.cluster_id,
            Infinity
          );
          const points = leaves.map((leaf) => leaf.properties);
          return {
            type: "Feature",
            geometry: { type: "Point", coordinates },
            properties,
            points,
          };
        }
        return {
          type: "Feature",
          geometry: { type: "Point", coordinates },
          properties,
          points: [{ ...cluster.properties, coordinates }],
        };
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const getPoints = (vacancies) => {
    if (!vacancies) return [];
    return vacancies.map((vacancy) => ({
      type: "Feature",
      properties: { cluster: false, vacancyId: vacancy.id, ...vacancy },
      geometry: {
        type: "Point",
        coordinates: [vacancy.longitude, vacancy.latitude],
      },
    }));
  };
  const [points, setPoints] = useState(getPoints(vacancies));

  useEffect(() => {
    // set points
    const points = getPoints(vacancies) ?? [];
    setPoints(points);
    supercluster.load(points);
    setClusters(calculateClusters(points));
  }, [vacancies]);

  useEffect(() => {
    // setCountryBorders
    fetch(
      "https://raw.githubusercontent.com/wmgeolab/geoBoundaries/729d59ed25f7bcc7664fc6ca58755b4e8567e80c/releaseData/gbOpen/UKR/ADM0/geoBoundaries-UKR-ADM0_simplified.geojson"
    )
      .then((res) => res.json())
      .then((data) => setCountryBorder(data));
  }, []);

  const onViewportChangeHandler = useCallback(
    (evt) => {
      setClusters(calculateClusters(points));

      setViewport({ ...evt.viewport });
      if (evt.originalEvent)
        setCursor(evt.originalEvent.type === "mouseup" ? "auto" : "grab");
    },
    [points]
  );

  return (
    <Context.Provider
      value={{
        mapRef,
        points,
        supercluster,
        selectedLocation,
        setSelectedLocation,
      }}
    >
      <ReactMapGL
        {...viewport}
        maxZoom={15}
        minZoom={6}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onMove={onViewportChangeHandler}
        mapStyle={"mapbox://styles/mapbox/dark-v11"}
        dragRotate={false}
        touchRotate={false}
        maxBounds={boundaries}
        cursor={cursor}
        onMouseMove={() => setCursor("auto")}
        ref={mapRef}
        onLoad={() => {
          supercluster.load(points);
          setClusters(calculateClusters(points));
        }}
      >
        <NavigationControl showCompass={false} />
        <MapClusterList clusters={clusters} icon={filterName} />
        {countryBorder && <MapBorder countryBorder={countryBorder} />}
      </ReactMapGL>
    </Context.Provider>
  );
}
