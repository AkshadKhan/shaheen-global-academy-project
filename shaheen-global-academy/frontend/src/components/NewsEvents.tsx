import toppersImage from '../assets/image-1.png';

export function NewsEvents() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <div className="flex-1 space-y-10">
            {/* Why Shaheen Section */}
            <div>
              <h2 className="text-gray-900 mb-6 font-semibold">Why Shaheen?</h2>
              <p className="text-gray-700 leading-relaxed">
                SHAHEEN is a leading educational institution in India. At SHAHEEN we aim at grooming leaders who are not only skilled professionals but also good human beings with values and morale. This is why we are consistently growing and achieving excellence.
              </p>
            </div>

            {/* Academic accomplishments section */}
            <div>
              <h2 className="text-gray-900 mb-6">Academic Accomplishments</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                SHAHEEN is one of India&apos;s largest minority educational conglomerates, with:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-800"><span className="text-blue-700">18,000+</span> students</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-800"><span className="text-blue-700">450+</span> staff members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-800"><span className="text-blue-700">40</span> learning centres spread across <span className="text-blue-700">9 states</span></span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                Indeed, SHAHEEN is the pride and delight of India. We aim to attain a coveted position of academic excellence in India and the entire Indian subcontinent.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Our results have been <span className="text-blue-700">consistently excellent</span> for the past four years. Our academic toppers are the epitome of:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-800">Hard work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-800">Perseverance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-800">Dedication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-800">Consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-800">Persistence</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                This eventually culminates in great accomplishments.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The SHAHEEN family&apos;s relentless pursuit of perfection—alongside our benevolent support for the marginalized and underprivileged—has been acknowledged and honored by the Government of Karnataka, which conferred its highest state award, <span className="text-blue-700">&quot;Rajyotsava&quot;</span>, upon SHAHEEN in the Education category (2014).
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={toppersImage} 
                alt="NEET 2024 Toppers from Lucknow" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}