import ReactMapGL, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useCallback, useState } from "react";

import MapMarker from "@/components/map/map-marker";

export default function Map() {
  // const { vacancies } = props;

  const [cursor, setCursor] = useState("auto");

  const [viewport, setViewport] = useState({
    latitude: 48.3794,
    longitude: 31.1656,
    width: "100%",
    height: "100%",
  });

  const onMouseEnter = useCallback(() => setCursor("pointer"), []);
  const onMouseLeave = useCallback(() => setCursor("auto"), []);

  return (
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
      onMove={(evt) => setViewport(evt.viewport)}
    >
      <NavigationControl showCompass={false} />
      <MapMarker
        latitude={48.3794}
        longitude={31.1656}
        offsetLeft={0}
        offsetTop={0}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        cursor={cursor}
      />
    </ReactMapGL>
  );
}
