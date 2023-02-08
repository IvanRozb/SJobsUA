import { ClusterLayer } from "@/components/map/layers/cluster-layer";
import { ClusterCountLayer } from "@/components/map/layers/cluster-count-layer";
import { UnclusteredPointLayer } from "@/components/map/layers/unclustered-point-layer";
import { Source } from "react-map-gl";

export default function MapSource(props) {
  const { vacancies } = props;

  return (
    <Source
      id={"vacancies"}
      type={"geojson"}
      data={{
        type: "FeatureCollection",
        features: vacancies.map((vacancy) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [vacancy.longitude, vacancy.latitude],
          },
          properties: { ...vacancy },
        })),
      }}
      cluster={true}
      clusterRadius={50}
      clusterMaxZoom={13}
    >
      {ClusterLayer}
      {ClusterCountLayer}
      {UnclusteredPointLayer}
    </Source>
  );
}
