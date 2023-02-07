import ReactMapGL, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { createContext, useCallback, useState } from "react";

import MarkerList from "@/components/map/ui/marker/marker-list";

export const Context = createContext(undefined);

export default function RenderMap(props) {
  const { vacancies } = props;

  const center = { latitude: 48.3794, longitude: 31.1656 };
  const latitudeBoundaries = [22.1, 44.14];
  const longitudeBoundaries = [40.35, 52.38];
  const boundaries = [latitudeBoundaries, longitudeBoundaries];

  const [cursor, setCursor] = useState("auto");
  const [markers, setMarkers] = useState(vacancies);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    ...center,
  });

  const onViewportChangeHandler = useCallback((evt) => {
    setViewport(evt.viewport);
    if (evt.originalEvent)
      setCursor(evt.originalEvent.type === "mouseup" ? "auto" : "grab");
  }, []);

  return (
    <Context.Provider value={{ markers, setMarkers }}>
      <ReactMapGL
        mapStyle={"mapbox://styles/mapbox/dark-v11"}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        minZoom={6}
        maxZoom={14}
        dragRotate={false}
        touchRotate={false}
        maxBounds={boundaries}
        cursor={cursor}
        {...viewport}
        onMove={onViewportChangeHandler}
        onMouseMove={() => setCursor("auto")}
      >
        <NavigationControl showCompass={false} />
        <MarkerList markers={markers} />
      </ReactMapGL>
    </Context.Provider>
  );
}
