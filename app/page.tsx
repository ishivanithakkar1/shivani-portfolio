import { Arrival } from "@/components/home/Arrival";
import { Belief } from "@/components/home/Belief";
import { Identity } from "@/components/home/Identity";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Arrival />
      <Belief />
      <Identity />
    </main>
  );
}
