import Scene from "@/canvas/Scene";
import DesktopHUD from "@/components/hud/DesktopHUD";
import MobileHUD from "@/components/hud/MobileHUD";
import ProjectModal from "@/components/modals/ProjectModal";
import CredentialsDrawer from "@/components/modals/CredentialsDrawer";
import BridgeViewModal from "@/components/modals/BridgeViewModal";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-slate-950 select-none">
      {/* 3D WebGL Canvas Layer (Independent Background) */}
      <Scene />

      {/* Layer 2: Decoupled UI (Desktop & Mobile Isolated) */}
      <DesktopHUD />
      <MobileHUD />

      {/* Layer 2: Global State Modals */}
      <ProjectModal />
      <CredentialsDrawer />
      <BridgeViewModal />
    </main>
  );
}