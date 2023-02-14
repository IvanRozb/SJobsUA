import { Marker } from "react-map-gl";
import { useContext } from "react";
import { Context } from "@/components/map/render-map";
import Image from "next/image";

export default function MapPin(props) {
  const { icon } = props;
  const { location } = props.marker;
  const { longitude, latitude } = location;
  const { setSelectedLocation } = useContext(Context);

  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      onClick={() => {
        setSelectedLocation({ longitude, latitude });
      }}
    >
      {
        <Image
          src={`/images/filters/${icon}.svg`}
          width={30}
          height={30}
          alt={"icon"}
        />
      }
    </Marker>
  );
}
