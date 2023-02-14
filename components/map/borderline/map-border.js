import { Layer, Source } from "react-map-gl";

export default function MapBorder(props) {
  const { countryBorder } = props;

  return (
    <Source id={"country-border"} type={"geojson"} data={countryBorder}>
      <Layer
        id={"country-border-layer"}
        type={"line"}
        source={"country-border"}
        layout={{
          "line-join": "round",
          "line-cap": "round",
        }}
        paint={{
          "line-color": "#8d8d8d",
          "line-width": 2,
        }}
      />
    </Source>
  );
}
