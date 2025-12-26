import { Building2, MonitorPlay, Trophy, BookOpenCheck, Zap, UtensilsCrossed } from 'lucide-react';

export function FacilitiesSection() {
  const facilities = [
    {
      icon: Building2,
      title: "World-Class Infrastructure",
      description: "Amazing, spacious campus with separate facilities for boys and girls. Modern architecture designed to create an optimal learning environment."
    },
    {
      icon: MonitorPlay,
      title: "Digital Classrooms",
      description: "State-of-the-art smart classrooms equipped with interactive displays, high-speed internet, and multimedia learning tools for enhanced understanding."
    },
    {
      icon: Trophy,
      title: "Competitive Examination Training",
      description: "Special tests specifically designed for NEET students, including mock exams, pattern-based assessments, and regular performance tracking."
    },
    {
      icon: BookOpenCheck,
      title: "Special Class Sessions",
      description: "Dedicated doubt-clearing, revision, and topic-based sessions to ensure no student is left behind. Personalized attention for every learner."
    },
    {
      icon: Zap,
      title: "24/7 Power Backup",
      description: "Uninterrupted power supply ensures continuous learning without any disruptions, supported by advanced backup systems."
    },
    {
      icon: UtensilsCrossed,
      title: "Hostel & Nutritious Food",
      description: "Healthy, balanced menu designed with scientific research. Comfortable residential facilities with quality food to fuel academic excellence."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 mb-2">World-Class Amenities</p>
          <h2 className="text-gray-900 mb-4">
            Our Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience excellence through our comprehensive infrastructure and support systems, designed to provide the best learning environment for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#9AE600] rounded-2xl flex items-center justify-center mb-5 shadow-md">
                  <Icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
            <button onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-[#101828] text-white rounded-full hover:bg-[#1f2937] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Schedule a Campus Tour
            </button>
        </div>
      </div>
    </section>
  );
}