import { Building2, MonitorPlay, UtensilsCrossed, Smartphone, Award, Users } from 'lucide-react';

export function FacilitiesSection() {
  const facilities = [
    {
      icon: Building2,
      title: "World-Class Infrastructure",
      description: (
        <>
          Amazing, spacious campus with <span className="bg-yellow-200 px-1 rounded">separate campus & facilities for boys and girls.</span> Modern architecture designed to create an optimal learning environment.
        </>
      )
    },
    {
      icon: MonitorPlay,
      title: "Digital Classrooms",
      description: "State-of-the-art smart classrooms equipped with interactive displays, high-speed internet, and multimedia learning tools for enhanced understanding."
    },
    {
      icon: Smartphone,
      title: "Secure, Mobile-Free Residential Campus",
      description: (
        <>
          Shaheen provides a distraction-free, fully residential setup with separate hostels for boys and girls, 24x7 security, AC accommodation, and <span className="bg-green-200 px-1 rounded">strict no-mobile policy to enhance focus.</span>
        </>
      )
    },
    {
      icon: Award,
      title: "Proven Track Record in NEET & JEE Success",
      description: (
        <>
        600+ Selections in Govt. MBBS in 2024 alone! Consistently outstanding results with 3400+ doctors produced. <span className="bg-blue-200 px-1 rounded">Backed by expert faculty,</span> advanced test systems, and structured mentorship programs.
        </>
      )
    },
    {
      icon: Users,
      title: "Three-Tiered Mentorship & Smart Learning",
      description: (
        <>
          <span className="bg-purple-200 px-1 rounded">Director + Faculty + Class Teacher mentorship</span> ensures every student gets academic and emotional guidance. Powered by Smart Classrooms, Weekly Tests, and AIIMS/IIT-Grade Training.
        </>
      )
    },
    {
      icon: UtensilsCrossed,
      title: "Hostel & Nutritious Food",
      description: (
        <>
          Healthy, balanced <span className="bg-green-200 px-1 rounded">menu designed with scientific research.</span> Comfortable residential facilities with quality food to fuel academic excellence.
        </>
      )
    }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-2xl font-semibold mb-2">Why to Join Shaheen Global Academy</p>
          <h2 className="text-gray-900 text-xl mb-4">
            Facilities
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
