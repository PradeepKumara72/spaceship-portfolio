import Scene from "@/canvas/Scene";
import HUDOverlay from "@/components/hud/HUDOverlay";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">
      <Scene />
      <HUDOverlay />
    </main>
  );
}