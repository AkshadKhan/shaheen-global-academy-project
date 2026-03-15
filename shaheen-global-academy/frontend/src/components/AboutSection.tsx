export function About() {
 
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pt-8"> {/*bg-gradient-to-b from-blue-50 to-white py-20*/}
      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          About Shaheen Global Academy
        </h1>
        <p className="text-gray-600 mb-2">
          Empowering students through quality education and global perspectives.
        </p>
        <p className="text-gray-600 mb-2">
          Founded with a vision to nurture future leaders, Shaheen Global Academy stands as a beacon of academic excellence and innovation. Our vibrant community brings together passionate educators, curious learners, and supportive families to create an environment where every student can thrive.
        </p>
        <p className="text-gray-600">
          We celebrate diversity, encourage critical thinking, and inspire students to reach their highest potential—both in and out of the classroom. Join us on a journey of discovery, growth, and achievement at Shaheen Global Academy.
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
