import MarkerItem from "@/components/map/ui/marker/marker-item";

export default function MarkerList(props) {
  const { markers } = props;

  return markers.map((marker) => (
    <MarkerItem
      key={marker.id}
      latitude={marker.latitude}
      longitude={marker.longitude}
      isActive={marker.isActive}
      id={marker.id}
      index={marker.index}
    />
  ));
}
