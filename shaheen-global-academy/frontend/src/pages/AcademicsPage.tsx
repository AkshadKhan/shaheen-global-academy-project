export default function Academics() {
  const sections = [
    {
      title: "Scholarships",
      desc: "Merit-based, need-based and talent scholarships for deserving students.",
      link: "/academics/scholarships",
    },
    {
      title: "Admission Forms",
      desc: "Download and submit admission forms for various programs.",
      link: "/academics/admission-forms",
    },
    {
      title: "Syllabus",
      desc: "Structured syllabus for NEET, JEE, Foundation & other academic streams.",
      link: "/academics/syllabus",
    },
    {
      title: "E-Library",
      desc: "Access digital books, notes, question banks and study material.",
      link: "/academics/e-library",
    },
    {
      title: "Programs Offered",
      desc: "Explore the diverse academic programs we offer.",
      link: "/academics/programs",
    },
    {
      title: "Academic Calendar",
      desc: "View schedules, examination timelines and important academic dates.",
      link: "/academics/calendar",
    },
  ];

  return (
    <div className="py-24 px-6 container mx-auto">
      {/* Title */}
      <div className="text-center mt-16 mb-16">
        <h1 className="text-gray-800 mb-4">Academics</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore academic resources, programs, forms, and digital learning tools.
        </p>

        <div className="mt-4 flex justify-center">
          <span className="w-20 h-[3px] bg-[#9AE600] rounded-full"></span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16 mb-16">
        {sections.map((sec, i) => (
          <a
            key={i}
            href={sec.link}
            className="group block p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#9AE600] transition-all duration-300"
          >
            <h3 className="text-gray-800 text-xl mb-2 group-hover:text-[#9AE600]">
              {sec.title}
            </h3>
            <p className="text-gray-600 text-sm">{sec.desc}</p>

            <div className="mt-4 h-[3px] w-0 group-hover:w-20 bg-[#9AE600] transition-all duration-300"></div>
          </a>
        ))}
      </div>
    </div>
  );
}
