import ReactMapGL, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { createContext, useCallback, useRef, useState } from "react";
import Supercluster from "supercluster";
import MapCluster from "@/components/map/ui/map-cluster";
import MapSingleMarker from "@/components/map/ui/map-single-marker";

export const Context = createContext({
  mapRef: undefined,
  points: [],
  supercluster: undefined,
  selectedMarker: undefined,
  setSelectedMarker: undefined,
});

export default function RenderMap(props) {
  const mapRef = useRef();

  const supercluster = new Supercluster({
    radius: 32,
    maxZoom: 12,
  });
  const [clusters, setClusters] = useState([]);

  const { vacancies } = props;
  const center = { latitude: 48.3794, longitude: 31.1656 };
  const latitudeBoundaries = [22.1, 44.14];
  const longitudeBoundaries = [40.35, 52.38];
  const boundaries = [latitudeBoundaries, longitudeBoundaries];

  const [cursor, setCursor] = useState("auto");
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 6,
    ...center,
  });
  const [selectedMarker, setSelectedMarker] = useState(undefined);

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
  const getClusters = () => {
    if (!mapRef.current) return [];

    try {
      supercluster.load(points);
      return supercluster.getClusters(getBounds(), getZoom());
    } catch (error) {
      console.log(error);
    }
  };

  const points = vacancies.map((vacancy) => ({
    type: "Feature",
    properties: { cluster: false, vacancyId: vacancy.id, ...vacancy },
    geometry: {
      type: "Point",
      coordinates: [vacancy.longitude, vacancy.latitude],
    },
  }));

  const onViewportChangeHandler = useCallback((evt) => {
    setClusters(getClusters());

    setViewport({ ...evt.viewport });
    if (evt.originalEvent)
      setCursor(evt.originalEvent.type === "mouseup" ? "auto" : "grab");
  }, []);

  return (
    <Context.Provider
      value={{
        mapRef,
        points,
        supercluster,
        selectedMarker,
        setSelectedMarker,
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
          setClusters(getClusters());
        }}
      >
        <NavigationControl showCompass={false} />
        {clusters?.map((cluster) => {
          const { coordinates } = cluster.geometry;
          const [longitude, latitude] = coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount,
            vacancyId,
          } = cluster.properties;

          if (!isCluster) {
            return (
              <MapSingleMarker
                key={vacancyId}
                marker={{ longitude, latitude }}
              />
            );
          }

          return (
            <MapCluster
              key={cluster.id}
              id={cluster.id}
              latitude={latitude}
              longitude={longitude}
              pointCount={pointCount}
            />
          );
        })}
      </ReactMapGL>
    </Context.Provider>
  );
}
