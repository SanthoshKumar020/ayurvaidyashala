'use client';

import { ParallaxProvider } from "react-scroll-parallax";
import AyurvedaCardSection from "../../components/AyurvedaCardSection";
import AyurvedaIntro from "../../components/AyurvedaIntro";
import AyurvedaSlider from "../../components/AyurvedaSlider";
import WaveDivider from "../../components/backdivider";
import Divider from "../../components/Divider";
import HeroSection from "../../components/HeroSection";
import PanchakarmaSection from "../../components/PanchakarmaSection";
import AyurvedaTreatments from "../../components/AyurvedaTreatments";
import PanchakarmaTreatment from "../../components/PanchakarmaTreatment";
import RetreatSlider from "../../components/RetreatSlider";
import { TherapySection } from "../../components/Therapy/TherapySection";
import { CourseSection } from "../../components/Courses/CourseSection";
import { WhyRishikul } from "../../components/whyrishikul";
import LocationsInKerala from "../../components/LocationsInKerala";
import BlogCarousel from "../../components/BlogCarousel";
import AyurvedicPackages from "../../components/AyurvedicPackages";
import Footer from "../../components/Footer";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AyurvedaCardSection />
      <Divider />
      <AyurvedaIntro />
      <WaveDivider/>
      <AyurvedaSlider/>
      <ParallaxProvider>
          <PanchakarmaSection/>
        </ParallaxProvider>
        <Divider />
        <AyurvedaTreatments/>
        <WaveDivider/>
        <PanchakarmaTreatment/>
        <Divider />
        <RetreatSlider/>
        <WaveDivider/>
            <div className="bg-white text-black">
      <TherapySection />
    </div>
    <Divider />
    <CourseSection/>
    <WhyRishikul />
    <LocationsInKerala />
    <BlogCarousel/>
    <AyurvedicPackages />
    <Footer />
      {/* You can add more sections below like: */}
      {/* <AboutSection /> */}
      {/* <TreatmentsOverview /> */}
      {/* <Testimonials /> */}
    </>
  );
}
