import { AtmosphereCanvas } from "@/components/ui/AtmosphereCanvas";
import { SoundToggle } from "@/components/ui/SoundToggle";
import { Arrival } from "@/components/home/Arrival";
import { Belief } from "@/components/home/Belief";
import { Identity } from "@/components/home/Identity";
import { StudioShowcase } from "@/components/home/StudioShowcase";
import { Craft } from "@/components/home/Craft";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Background Canvas Atmosphere */}
      <AtmosphereCanvas />

      {/* Acoustic Soundscape Interactive Control */}
      <SoundToggle />

      {/* Page Sections */}
      <div className="relative z-10">
        <Arrival />
        <Belief />
        <Identity />
        <StudioShowcase />
        <Craft />
      </div>
    </main>
  );
}
