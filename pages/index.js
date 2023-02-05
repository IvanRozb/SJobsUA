import Sidebar from "@/components/sidebar/sidebar";
import MapWrapper from "@/components/map/map-wrapper";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <MapWrapper />
      <Sidebar />
    </div>
  );
}
