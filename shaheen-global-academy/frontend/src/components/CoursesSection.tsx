import { GraduationCapIcon, LibraryBig, AlignHorizontalSpaceBetween, BookOpenCheck } from 'lucide-react';

export function CoursesSection() {
  const features = [
    {
      icon: LibraryBig,
      title: "Hifzul-Quran Plus Program",
      description: (
        <>
          The Hifzul Quran Plus (or Hifz Plus) is a flagship program of the Shaheen Group of Institutions <span className="bg-[#FFD700]/50 px-1 rounded">designed to integrate students who have completed memorizing the Quran (Huffaz) into mainstream modern education.</span>
        </>
      )
    },
    {
      icon: GraduationCapIcon,
      title: "11th & 12th Integrated with NEET/JEE",
      description: (
        <>
          The Shaheen Academy 11th and 12th integrated program is a <span className="bg-blue-200 px-1 rounded">two-year residential course</span> designed to combine standard board education with intensive competitive exam preparation.
        </>
      )
    },
    {
      icon: GraduationCapIcon,
      title: "Three Year NEET Integrated Program",
      description: (
        <>
          A comprehensive three-year residential program that <span className='bg-violet-300 px-1 rounded'>integrates NEET/JEE preparation with a strong foundation course,</span> designed for students starting after Class 9 or 10 to build concepts early and excel in medical entrance exams.
        </>
      )
    },
    {
      icon: GraduationCapIcon,
      title: "Four Year NEET/JEE Integrated Program",
      description: (
        <>
          A rigorous four-year residential program <span className="bg-pink-200 px-1 rounded">designed for students who have passed Class VIII</span>, integrating NEET/JEE preparation with foundational academic excellence from an early stage.
        </>
      )
    },
    {
      icon: AlignHorizontalSpaceBetween,
      title: "NEET Repeater Program",
      description: (
        <>
          <span className="bg-green-200 px-1 rounded">A one-year intensive training program</span> for students who have completed Class 12 and are dedicated to clearing the medical entrance exam.
        </>
      )
    },
    {
      icon: BookOpenCheck,
      title: "Special Class Sessions",
      description: (
        <>
          Dedicated <span className="bg-red-200 px-1 rounded">doubt-clearing, revision, and topic-based sessions</span> to ensure no student is left behind. Personalized attention for every learner.
        </>
      )
    }
  ];

  return (
    <section id='courses' className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-600 mb-2 font-semibold text-2xl">Courses</p>
          <h2 className="text-gray-800 mb-4 text-xl">
            Offered by Shaheen Global Academy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a learning experience designed to help you achieve your goals. We combines cutting-edge technology with proven teaching methods. {' '}
            <a
              href="/academics#prospectus"
              className="text-blue-700 hover:text-blue-900 font-medium ml-1"
            >
              View Prospectus
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
