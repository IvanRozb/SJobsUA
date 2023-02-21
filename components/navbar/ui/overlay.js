import overlay from "@/components/navbar/ui/utilites.module.css";

export default function Overlay({ setExpanded }) {
  return (
    <div
      className={overlay.overlay}
      onClick={() => {
        setExpanded(false);
      }}
    ></div>
  );
}
