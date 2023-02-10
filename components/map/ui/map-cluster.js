import { Marker } from "react-map-gl";
import classes from "@/components/map/ui/map-cluster.module.css";
import { useCallback, useContext } from "react";
import { Context } from "@/components/map/render-map";

export default function MapCluster(props) {
  const { id, longitude, latitude, pointCount } = props;

  const { mapRef, points, supercluster } = useContext(Context);

  const onSelectVacancy = useCallback(({ longitude, latitude, zoom }) => {
    mapRef.current?.easeTo({
      center: [longitude, latitude],
      duration: 2000,
      zoom: zoom,
    });
  }, []);

  return (
    <Marker latitude={latitude} longitude={longitude}>
      <div
        className={classes.cluster_marker}
        style={{
          width: `${10 + (pointCount / points.length) * 20}px`,
          height: `${10 + (pointCount / points.length) * 20}px`,
        }}
        onClick={() => {
          supercluster.load(points);
          const expansionZoom = Math.min(
            supercluster.getClusterExpansionZoom(id),
            20
          );

          onSelectVacancy({
            longitude,
            latitude,
            zoom: expansionZoom + 2.2,
          });
        }}
      >
        {pointCount}
      </div>
    </Marker>
  );
}
