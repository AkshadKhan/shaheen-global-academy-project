export function About() {
 
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pt-8"> {/*bg-gradient-to-b from-blue-50 to-white py-20*/}
      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16">
        <h1 className="text-gray-800 mb-4">
          About Shaheen Global Academy
        </h1>
        <p className="text-gray-600">
          Empowering students through quality education and global perspectives.
        </p>
      </div>

      {/* MISSION */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            At Shaheen Global Academy, we are committed to providing exceptional
            educational experiences that prepare students for success in a
            rapidly changing world. Our dedicated faculty and modern teaching
            methods ensure excellence and holistic development.
          </p>
          <a href="https://shaheengroup.org/chairmans-message/" target="_blank" rel="noopener noreferrer"
          className="inline-block mt-6 text-blue-600 hover:text-blue-800 font-semibold">
          Read More →
          </a>
        </div>
      </div>
    </section>
  );
}
