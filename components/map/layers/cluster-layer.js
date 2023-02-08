import { Layer } from "react-map-gl";

export const ClusterLayer = (
  <Layer
    id={"cluster"}
    type={"circle"}
    sourth={"vacancies"}
    filter={["has", "point_count"]}
    paint={{
      "circle-color": [
        "step",
        ["get", "point_count"],
        "#51bbd6",
        20,
        "#f1f075",
        100,
        "#f28cb1",
        300,
        "#9a1747",
      ],
      "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
    }}
  />
);
