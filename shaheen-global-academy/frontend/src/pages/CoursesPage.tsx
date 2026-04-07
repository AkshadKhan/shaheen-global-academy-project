import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { Level, Course } from "../types/course";
import { COURSES, LEVELS } from "../data/courses";
import { EnquirySection } from "../components/EnquirySection";

// ─── Components ────────────────────────────────────

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: Level;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-medium transition border
        ${
          active
            ? "bg-[#9AE600] text-black border-[#9AE600]"
            : "bg-white text-slate-600 border-slate-200 hover:border-[#9AE600] hover:text-[#9AE600]"
        }`}
    >
      {label}
    </button>
  );
}

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition flex flex-col ${
        course.highlight ? "border-yellow-400" : "border-slate-200"
      }`}
    >
      {/* Tag */}
      <span className="text-md font-semibold bg-[#c1c1c1]/10 px-3 py-1 rounded">
        {course.tag}
      </span>

      {/* Title */}
      <h3 className="text-xl font-semibold mt-3 text-[#9AE600] hover:text-[#9AE600]/80 transition pointer-events-none">
        {course.title}
      </h3>

      <p className="text-sm text-slate-500 mt-2">{course.subtitle}</p>

      {/* Subjects */}
      <div className="flex flex-wrap gap-2 mt-4">
        {course.subjects.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded hover:bg-[#9AE600]/10 hover:text-[#9AE600] transition"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-auto pt-4 border-t">
        <span className="text-xs text-slate-400">⏱ {course.duration}</span>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────

export default function CoursesPage() {
  const [activeLevel, setActiveLevel] = useState<Level>("All");

  const filtered =
    activeLevel === "All"
      ? COURSES
      : COURSES.filter((c) => c.level.includes(activeLevel));

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto mt-20 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-2xl font-semibold text-[#9AE600] uppercase tracking-wider">
            Academic Programs
          </p>

          <h1 className="text-4xl font-bold text-slate-800 mt-2">
            Courses for Every Stage of Learning
          </h1>

          <p className="text-slate-500 mt-4 max-w-xl">
            Shaheen Global Academy offers structured, future-ready education from
            foundational through advanced levels.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {LEVELS.map((l) => (
            <FilterPill
              key={l}
              label={l}
              active={activeLevel === l}
              onClick={() => setActiveLevel(l)}
            />
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Brochure */}
        <div className="mt-20 mb-10 bg-[#111] text-white rounded-xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-semibold">
              Download Our Course Brochure
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Get detailed information about our academic programs.
            </p>
          </div>

          <a
            href="/documents/shaheen-academy-prospectus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9AE600] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Download Brochure
          </a>
        </div>

        {/* CTA */}
        <div className="mt-10 mb-10 bg-[#111] text-white rounded-xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-semibold">
              Not sure which course fits?
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Our counsellors will guide you to the right path.
            </p>
          </div>

          <span className="bg-[#9AE600] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Feel Free to Ask Us
          </span>
        </div>
      </div>

      <EnquirySection className="mb-[-100px]" />
    </section>
  );
}
