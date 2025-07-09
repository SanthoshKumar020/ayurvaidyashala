import DailySchedule from "./DailySchedule";
import Facilities from "./Facilities";
import HeroSection from "./HeroSection";
import HowToReach from "./HowToReach";
import ProgramDetails from "./ProgramDetails";
import RetreatAccordion from "./RetreatAccordion";
import RevitalizeYourYouth from "./RevitalizeYourYouth";
import StayAndFood from "./StayAndFood";
import TreatmentGallery from "./TreatmentGallery";
import TreatmentJourney from "./TreatmentJourney";
import TreatmentTabs from "./TreatmentTabs";
import WhyAyurvedaIsBest from "./WhyAyurvedaIsBest";

export default function AntiAgeingPage() {
  return (
    <main>
      <HeroSection />
      <ProgramDetails />
      <AntiAgeingPage/>
      <TreatmentTabs />
      <TreatmentJourney />
      <DailySchedule />
      <StayAndFood />
      <Facilities />
      <RetreatAccordion />
      <HowToReach/>
      <RevitalizeYourYouth/>
      <WhyAyurvedaIsBest/>
      <TreatmentGallery/>
    </main>
  );
}
