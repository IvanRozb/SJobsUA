import ReactMapGL, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { createContext, useCallback, useState } from "react";

import MarkerList from "@/components/map/ui/marker/marker-list";

export const Context = createContext();

export default function RenderMap() {
  // const { vacancies } = props;

  const [cursor, setCursor] = useState("auto");
  const [markers, setMarkers] = useState([
    { id: 0, latitude: 48, longitude: 30, isActive: false, index: 0 },
    { id: 1, latitude: 47, longitude: 30, isActive: false, index: 1 },
  ]);

  const [viewport, setViewport] = useState({
    latitude: 48.3794,
    longitude: 31.1656,
    width: "100%",
    height: "100%",
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
        maxBounds={[
          [22.1, 44.14],
          [40.35, 52.38],
        ]}
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
