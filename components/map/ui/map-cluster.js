import { Marker } from "react-map-gl";
import classes from "@/components/map/ui/map-cluster.module.css";
import Image from "next/image";
import { Fragment, useState } from "react";
import MapPopup from "@/components/map/ui/map-popup";

export default function MapCluster(props) {
  const { longitude, latitude, points, pointCount, icon } = props;
  const [showVacancies, setShowVacancies] = useState(false);

  return (
    <Fragment>
      <Marker latitude={latitude} longitude={longitude}>
        <div
          className={classes.cluster_marker}
          onClick={() => {
            setShowVacancies((show) => !show);
          }}
        >
          <div className={"point"}>
            <Image
              src={`/images/filters/${icon}.svg`}
              alt={icon}
              width={50}
              height={50}
            />
          </div>
          {pointCount > 1 ? (
            <div className={classes.cluster_count}>
              <p>{pointCount}</p>
            </div>
          ) : null}
        </div>
      </Marker>
      {showVacancies && (
        <MapPopup
          markers={{ vacancies: points, location: { latitude, longitude } }}
          setShowVacancies={setShowVacancies}
        />
      )}
    </Fragment>
  );
}
