import AyurvedaPackages from './AyurvedaPackages';
import KeralaAyurvedaSection from './KeralaAyurvedaSection';
import KeralaBanner from "./KeralaBanner";
import ReachVarkala from './ReachVarkala';
export default function Home() {
  return (
    <main>
        <KeralaBanner />
      <KeralaAyurvedaSection />
      <AyurvedaPackages />
      <ReachVarkala />
    </main>
  );
}
