import { toppers } from "../data/toppers";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ToppersSection() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [currentSlide, setCurrentSlide] = useState(0);

  //hook
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const images = import.meta.glob("../assets/toppers/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  });

  const years = Object.keys(toppers).sort((a, b) => parseInt(b) - parseInt(a)); // Sort years in descending order
  const currentToppers = toppers[selectedYear as keyof typeof toppers] || [];

  // Auto-slide effect
  useEffect(() => {
    if (currentToppers.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentToppers.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentToppers.length]);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#9AE600]"></div>
            <span className="text-[#9AE600] text-sm tracking-widest uppercase">
              Shaheeninans
            </span>
            <div className="h-px w-8 bg-[#9AE600]"></div>
          </div>
          <h2 className="text-gray-900 mb-3">Our Toppers</h2>
        </div>

        {/* Year Tabs */}
        <div className="relative max-w-sm mx-auto mb-14 flex items-center">
          {/* LEFT FADE + BUTTON */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 flex items-center justify-start pl-1">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-md border border-gray-200 hover:bg-white transition"
            >
              ←
            </button>
          </div>

          {/* SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto overflow-y-hidden hide-scrollbar px-14 scroll-smooth"
          >
            {years.map((year) => (
              <button
                key={year}
                id={`year-${year}`}
                onClick={() => {
                  setSelectedYear(year);
                  setCurrentSlide(0);

                  document.getElementById(`year-${year}`)?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                  });
                }}
                className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-all duration-300 relative whitespace-nowrap ${
                  selectedYear === year
                    ? "text-[#9AE600] scale-[200%]"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {year}

                {selectedYear === year && (
                  <motion.div
                    layoutId="activeYear"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#9AE600] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* RIGHT FADE + BUTTON */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 flex items-center justify-end pr-1">
            <button
              onClick={scrollRight}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-md border border-gray-200 hover:bg-white transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Slider */}
        {currentToppers.length > 0 ? (
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedYear}-${currentSlide}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {currentToppers
                    .slice(currentSlide, currentSlide + 3)
                    .map((topper, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="relative overflow-hidden rounded-2xl bg-white">
                          {/* Image */}
                          <div className="relative h-80 overflow-hidden">
                            <img
                              src={
                                images[
                                  `../assets/toppers/${topper.image}`
                                ] as string
                              }
                              alt={topper.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            {/* Rank Badge */}
                            <div className="absolute top-4 right-4">
                              <div className="bg-[#9AE600] text-gray-900 px-4 py-1.5 rounded-full text-sm">
                                <span>AIR {topper.rank}</span>
                              </div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h3 className="text-white text-xl mb-1">
                                {topper.name}
                              </h3>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-white/80">
                                  {topper.exam}
                                </span>
                                <span className="text-white">
                                  {topper.score}
                                </span>
                              </div>
                              <div className="mt-2 pt-2 border-t border-white/20">
                                <p className="text-white/70 text-xs">
                                  {topper.college}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {currentToppers.length > 0 &&
                Array.from({
                  length: Math.ceil(currentToppers.length / 3),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index * 3)}
                    className={`transition-all duration-300 ${
                      Math.floor(currentSlide / 3) === index
                        ? "w-8 h-1 bg-[#9AE600]"
                        : "w-1 h-1 bg-gray-300 hover:bg-gray-400"
                    } rounded-full`}
                  />
                ))}
            </div>
          </div>
        ) : (
          <div className="relative max-w-5xl mx-auto mb-12 text-center text-gray-400">
            No toppers data available for {selectedYear}.
          </div>
        )}

        {/* Statistics - Minimal */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <p className="text-4xl text-gray-900 mb-2">600+</p>
              <p className="text-gray-500 text-sm">NEET Qualifiers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-4xl text-gray-900 mb-2">3400+</p>
              <p className="text-gray-500 text-sm">Alumini Doctors</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <p className="text-4xl text-gray-900 mb-2">150+</p>
              <p className="text-gray-500 text-sm">Top 100</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <p className="text-4xl text-gray-900 mb-2">98%</p>
              <p className="text-gray-500 text-sm">Success</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
