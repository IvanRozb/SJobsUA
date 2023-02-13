import MapSingleMarker from "@/components/map/ui/map-single-marker";
import MapCluster from "@/components/map/ui/map-cluster";

export default function MapClusterList(props) {
  const { clusters, icon } = props;

  return clusters?.map((cluster) => {
    const { coordinates } = cluster.geometry;
    const [longitude, latitude] = coordinates;
    const {
      cluster: isCluster,
      point_count: pointCount,
      vacancyId,
      name,
      logo,
      salary,
      salaryFrom,
      salaryTo,
      companyName,
    } = cluster.properties;

    const markerData = {
      name,
      logo,
      salary,
      salaryFrom,
      salaryTo,
      companyName,
    };

    if (!isCluster) {
      return (
        <MapSingleMarker
          key={vacancyId}
          marker={{ location: { longitude, latitude }, markerData }}
          icon={icon}
        />
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
