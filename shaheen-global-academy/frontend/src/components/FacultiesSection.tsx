import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useState } from 'react';

export function FacultiesSection() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const faculties = [
    {
      name: "Dr. Rajesh Kumar",
      qualification: "Ph.D. in Physics",
      specialization: "Quantum Mechanics & Astrophysics",
      department: "mathematics",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Prof. Ayesha Khan",
      qualification: "M.Sc., B.Ed.",
      specialization: "Organic Chemistry & Research",
      department: "chemistry",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Sanjay Verma",
      qualification: "Ph.D. in Mathematics",
      specialization: "Calculus & Applied Mathematics",
      department: "mathematics",
      experience: "18+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Ms. Priya Sharma",
      qualification: "M.A. English Literature",
      specialization: "Creative Writing & Grammar",
      department: "chemistry",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Prof. Mohammed Hussain",
      qualification: "M.Sc. Biology, Ph.D.",
      specialization: "Genetics & Cell Biology",
      department: "biology",
      experience: "14+ Years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Neha Gupta",
      qualification: "Ph.D. in Computer Science",
      specialization: "AI & Machine Learning",
      department: "physics",
      experience: "9+ Years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
    }
  ];

  const departments = [
    { id: 'all', label: 'All Departments' },
    { id: 'mathematics', label: 'Mathematics' },
    { id: 'biology', label: 'Biology' },  
    { id: 'chemistry', label: 'Chemistry' },
    { id: 'physics', label: 'Physics' }
  ];

  const filteredFaculties = selectedDepartment === 'all' 
    ? faculties 
    : faculties.filter(faculty => faculty.department === selectedDepartment);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#9AE600] mb-2">Meet Our Educators</p>
          <h2 className="text-gray-900 mb-4">
            Our Faculties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from experienced educators who are passionate about shaping the future. Our faculty members bring expertise, dedication, and innovation to every classroom.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                selectedDepartment === dept.id
                  ? 'bg-[#9AE600] text-gray-900 shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredFaculties.map((faculty, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              {/* Profile Image */}
              <div className="relative mb-5">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#9AE600] shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#9AE600] px-4 py-1 rounded-full shadow-md">
                  <p className="text-gray-900 text-sm whitespace-nowrap">
                    {faculty.experience}
                  </p>
                </div>
              </div>

              {/* Faculty Info */}
              <div className="text-center space-y-3">
                <h3 className="text-gray-900">
                  {faculty.name}
                </h3>
                
                <div className="flex items-center justify-center gap-2 text-[#9AE600]">
                  <GraduationCap className="w-4 h-4" />
                  <p className="text-sm">
                    {faculty.qualification}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <BookOpen className="w-4 h-4" />
                  <p className="text-sm">
                    {faculty.specialization}
                  </p>
                </div>
              </div>

              {/* Hover Action */}
              <div className="mt-5 pt-5 border-t border-gray-200">
                <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-[#9AE600] hover:text-gray-900 transition-all duration-300 group-hover:scale-105">
                  View Profile {/*what to do with this? soch rahe console.log daal ke chordh den abhi, baad mein dekhenge, time chahiye, ek profile modal banayenge sabka data display kardenge as per click?? */}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#9AE600]/10 to-[#9AE600]/5 p-6 rounded-2xl text-center border border-[#9AE600]/20">
            <div className="w-12 h-12 bg-[#9AE600] rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-gray-900 mb-1">50+</h3>
            <p className="text-gray-600">Expert Educators</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-2xl text-center border border-blue-200">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-900 mb-1">15+</h3>
            <p className="text-gray-600">Average Years Experience</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-6 rounded-2xl text-center border border-gray-200">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-900 mb-1">100%</h3>
            <p className="text-gray-600">Qualified & Certified</p>
          </div>
        </div>
      </div>
    </section>
  );
}
