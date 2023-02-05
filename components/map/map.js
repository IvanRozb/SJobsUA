import ReactMapGL, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

export default function Map() {
  // const { vacancies } = props;

  const [viewport, setViewport] = useState({
    latitude: 48.3794,
    longitude: 31.1656,
    width: "100%",
    height: "100%",
  });

  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/mapbox/dark-v11"}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      minZoom={5.5}
      maxZoom={14}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      <NavigationControl showCompass={false} />
    </ReactMapGL>
  );
}
