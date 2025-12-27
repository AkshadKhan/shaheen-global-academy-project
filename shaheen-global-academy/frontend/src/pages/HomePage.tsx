import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { NewsEvents } from '../components/NewsEvents';
import { CoursesSection } from '../components/CoursesSection';
import { ToppersSection } from '../components/ToppersSection';
import { InfrastructureSection } from '../components/InfrastructureSection';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { FacultiesSection } from '../components/FacultiesSection';
import { EnquirySection } from '../components/EnquirySection';
import { About } from '../components/AboutSection';

// import { Footer } from '../components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <main className="pt-[40px] pr-[0px] pb-[0px] pl-[0px]">
        <div id="hero">
          <Hero />
        </div>
        <div id="events">
          <NewsEvents />
        </div>
        <div id="academics">
          <CoursesSection />
        </div>
        <div id="toppers">
          <ToppersSection />
        </div>
        <div id="toppers">
          <InfrastructureSection />
        </div>
        <div id="facilities">
          <FacilitiesSection />
        </div>
        <div id="faculties">
          <FacultiesSection />
        </div>
        <div id="enquiry">
          <EnquirySection />
        </div>
        <div id="about">
          <About/>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}