import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import ComingSoonModal from "../components/ComingSoonModal";
import { Link } from "react-router-dom";

export default function Academics() {
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  // const navigate = useNavigate();

  const sections = [
    {
      title: "Prospectus",
      desc: "Comprehensive guide to our academic offerings, policies and campus life.",
      link: "/documents/shaheen-academy-prospectus.pdf",
      type: "pdf",
    },
    {
      title: "Admission Form",
      desc: "Apply now to join our academy and embark on a transformative educational journey.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeQSwPO2eLsrKp5X34Fa4JCHwiRDXOVSmq19fq4yOHN138kvg/viewform?usp=dialog",
      type: "external",
      highlight: true,
    },
    {
      title: "Academic Calendar",
      desc: "View schedules, examination timelines and important academic dates.",
      link: "/documents/academic-calendar-test.pdf",
    },
    {
      title: "Scholarships",
      desc: "Merit-based, need-based and talent scholarships for deserving students.",
      link: "/academics/scholarships",
      comingSoon: true,
    },
    {
      title: "Syllabus",
      desc: "Structured syllabus for NEET, JEE, Foundation & other academic streams.",
      link: "/academics/syllabus",
      comingSoon: true,
    },
    {
      title: "E-Library",
      desc: "Access digital books, notes, question banks and study material.",
      link: "/academics/e-library",
      comingSoon: true,
    },
    {
      title: "Programs Offered",
      desc: "Explore the diverse academic programs we offer.",
      link: "/courses",
      type: "internal",
    },
  ];

  const handleSectionClick = (sec: any) => {
    if (sec.comingSoon) {
      setSelectedSection(sec.title);
      setShowModal(true);
      return;
    }

    window.open(sec.link, "_blank");
  };

  return (
    <div className="py-24 px-6 container mx-auto cursor-pointer">
      {/* Title */}
      <div className="text-center mt-16 mb-16">
        <h1 className="text-gray-800 mb-4">Academics</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore academic resources, programs, forms, and digital learning
          tools.
        </p>

        <div className="mt-4 flex justify-center">
          <span className="w-20 h-[3px] bg-[#9AE600] rounded-full"></span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16 mb-16">
        {sections.map((sec, i) => {
          const isInternal = sec.type === "internal";
          const isHighlighted = sec.highlight;

          const baseClass = `
            group block p-8 rounded-2xl transition-all duration-300 cursor-pointer
            ${
              isHighlighted
                ? "bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-300 shadow-md hover:shadow-xl hover:border-yellow-400"
                : "bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#9AE600]"
            }
          `;

          if (sec.comingSoon) {
            return (
              <div
                key={i}
                onClick={() => handleSectionClick(sec)}
                className={baseClass}
              >
                <h3 className="text-gray-800 text-xl mb-2 group-hover:text-[#9AE600]">
                  {sec.title}
                </h3>
                <p className="text-gray-600 text-sm">{sec.desc}</p>
                <div className="mt-4 h-[3px] w-0 group-hover:w-20 bg-[#9AE600] transition-all duration-300"></div>
              </div>
            );
          }

          if (isInternal) {
            return (
              <Link key={i} to={sec.link} className={baseClass}>
                <h3
                  className={`text-xl mb-2 transition ${
                    isHighlighted
                      ? "text-yellow-700 group-hover:text-yellow-800"
                      : "text-gray-800 group-hover:text-[#9AE600]"
                  }`}
                >
                  {sec.title}
                </h3>
                <p className="text-gray-600 text-sm">{sec.desc}</p>
                <div
                  className={`mt-4 h-[3px] w-0 group-hover:w-20 transition-all duration-300 ${
                    isHighlighted ? "bg-yellow-500" : "bg-[#9AE600]"
                  }`}
                />
              </Link>
            );
          }

          return (
            <a
              key={i}
              href={sec.link}
              target="_blank"
              rel="noopener noreferrer"
              className={baseClass}
            >
              <h3 className="text-gray-800 text-xl mb-2 group-hover:text-[#9AE600]">
                {sec.title}
              </h3>
              <p className="text-gray-600 text-sm">{sec.desc}</p>
              <div className="mt-4 h-[3px] w-0 group-hover:w-20 bg-[#9AE600] transition-all duration-300"></div>
            </a>
          );
        })}
      </div>

      {/* comming soon modal */}
      <ComingSoonModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message={`The "${selectedSection}" section is currently under development. We'll notify you once it's ready!`}
      />
    </div>
  );
}
