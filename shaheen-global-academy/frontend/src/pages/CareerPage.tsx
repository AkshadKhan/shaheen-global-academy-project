import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { JOBS } from "../data/jobs";
import { CAREER_POSTERS } from "../data/careerPosters";
import { Link } from "react-router-dom";
import { HIRING_CONTACTS } from "../data/contacts";

export default function CareersPage() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const openJobs = JOBS.filter((job) => job.open);

  // Separate hero + grid
  const heroPoster =
    CAREER_POSTERS.find((p) => p.isHero) ?? CAREER_POSTERS[0] ?? null;

  const gridPosters = CAREER_POSTERS.filter((p) => !p.isHero);

  const hasHeroPoster = !!heroPoster;
  const hasGridPosters = gridPosters.length > 0;

  //useEffect
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        {hasHeroPoster && (
          <div className="mb-20 grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <p className="text-[#9AE600] font-semibold uppercase tracking-widest">
                Careers
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                Build the Future with Us
              </h1>

              <p className="text-gray-500 mt-4">
                Join Shaheen Global Academy and contribute to shaping the next
                generation of achievers.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("openPositions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-6 bg-[#9AE600] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                View Openings
              </button>
            </div>

            {/* Right Poster */}
            {heroPoster && (
              <div className="relative group rounded-2xl overflow-hidden">
                <img
                  src={heroPoster.image}
                  alt={heroPoster.title}
                  className="rounded-2xl shadow-lg object-cover h-full w-full transition duration-500 group-hover:scale-105"
                />

                {/* Bottom gradient only */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-semibold">
                    {heroPoster.title}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* POSTER GRID */}
        {hasGridPosters && (
          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible hide-scrollbar mb-20">
            {gridPosters.map((poster, i) => (
              <motion.div
                key={poster.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group rounded-xl overflow-hidden 
                 min-w-[180px] h-32 
                 md:min-w-0 md:h-56 md:rounded-2xl flex-shrink-0"
              >
                {/* Image */}
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Hover gradient */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* Hover text */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-white text-lg font-semibold">
                    {poster.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* JOB LIST */}
        <div id="openPositions" className="mb-24">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Open Positions
            </h2>

            <span className="text-sm text-gray-400">
              {openJobs.length} role{openJobs.length !== 1 && "s"} available
            </span>
          </div>

          {openJobs.length > 0 ? (
            <div className="space-y-4">
              {openJobs.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-lg transition group"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#9AE600] transition">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 font-semibold mt-2">
                      {job.description}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      {job.type} • {job.location}
                    </p>
                  </div>

                  <div
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() =>
                        setActiveDropdown((prev) =>
                          prev === job.id ? null : job.id,
                        )
                      }
                      className="bg-[#9AE600] text-black px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-md transition"
                    >
                      Contact Us
                    </button>

                    {activeDropdown === job.id && (
                      <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                        {HIRING_CONTACTS.map((contact, idx) => (
                          <a
                            key={idx}
                            href={`tel:${contact.value}`}
                            className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-[#9AE600]/10 hover:text-black transition"
                          >
                            <span>{contact.label}</span>
                            <span className="text-xs text-gray-400">
                              {contact.value}
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-16">
              No open positions currently.
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-[#111] text-white rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Don’t see your role?</h2>
            <p className="text-sm text-gray-400 mt-2">
              Send your resume and we’ll reach out.
            </p>
          </div>

          <Link
            to={"/contact"}
            className="bg-[#9AE600] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
