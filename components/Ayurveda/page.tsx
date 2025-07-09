import AyurvedaHeroSection from "./AyurvedaHeroSection";
import AyurvedaSpectrumSection from "./AyurvedaSpectrumSection";
import DietMistakesSection from "./DietMistakesSection";
import KeralaAyurvedaSection from "./KeralaAyurvedaSection";
import TherapySection from "./TherapySection";


export default function AyurvedaPage() {
  return (
    <>
      {/* Other content */}
      <TherapySection />
      <AyurvedaHeroSection/>
      <KeralaAyurvedaSection/>
      <AyurvedaSpectrumSection/>
      <DietMistakesSection/>
    </>
  );
}
