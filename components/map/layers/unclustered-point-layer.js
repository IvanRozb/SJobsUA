import { Layer } from "react-map-gl";

export const UnclusteredPointLayer = (
  <Layer
    id={"unclustered-point"}
    type={"circle"}
    sourth={"vacancies"}
    filter={["!", ["has", "point_count"]]}
    paint={{
      "circle-color": "#11b4da",
      "circle-radius": 4,
      "circle-stroke-width": 1,
      "circle-stroke-color": "#fff",
    }}
  />
);
