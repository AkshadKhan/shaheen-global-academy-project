import { ProgramHighlights } from "../data/programHighlights";

export function CoursesSection() {
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
          {ProgramHighlights.map((feature, index) => {
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
