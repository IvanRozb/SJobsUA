import { Layer } from "react-map-gl";

export const ClusterCountLayer = (
  <Layer
    id={"cluster-count"}
    type={"symbol"}
    sourth={"vacancies"}
    filter={["has", "point_count"]}
    layout={{
      "text-field": "{point_count_abbreviated}",
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 12,
    }}
  />
);
