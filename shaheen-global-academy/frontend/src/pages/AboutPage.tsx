import { About } from "../components/AboutSection";
import { FacilitiesSection } from "../components/FacilitiesSection";
import { FacultiesSection } from "../components/FacultiesSection";
import { EnquirySection } from "../components/EnquirySection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-[40px] pr-[0px] pb-[0px] pl-[0px]">
        <div id="about">
          <About />
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
      </main>
    </div>
  );
}
