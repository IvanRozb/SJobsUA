import MapCluster from "@/components/map/ui/map-cluster";

export default function MapClusterList(props) {
  const { clusters, icon } = props;

  return clusters?.map((cluster) => {
    const { points } = cluster;
    const { coordinates } = cluster.geometry;
    const [longitude, latitude] = coordinates;

    const id = cluster.properties.cluster_id ?? cluster.properties.vacancyId;

    return (
      <MapCluster
        key={id}
        id={id}
        latitude={latitude}
        longitude={longitude}
        points={points}
        pointCount={points.length}
        icon={icon}
      />
    );
  });
}
