import MapSingleMarker from "@/components/map/ui/map-single-marker";
import MapCluster from "@/components/map/ui/map-cluster";

export default function MapClusterList(props) {
  const { clusters } = props;

  return clusters?.map((cluster) => {
    const { coordinates } = cluster.geometry;
    const [longitude, latitude] = coordinates;
    const {
      cluster: isCluster,
      point_count: pointCount,
      vacancyId,
    } = cluster.properties;

    if (!isCluster) {
      return (
        <MapSingleMarker key={vacancyId} marker={{ longitude, latitude }} />
      );
    }

    return (
      <MapCluster
        key={cluster.id}
        id={cluster.id}
        latitude={latitude}
        longitude={longitude}
        pointCount={pointCount}
      />
    );
  });
}
