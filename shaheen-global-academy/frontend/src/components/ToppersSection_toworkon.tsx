import { Trophy, Award, TrendingUp, Star } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { data } from 'react-router-dom';

const API_BASE = "http://localhost:3000";

interface Topper {
  name: string;
  exam: string;
  score: string;
  rank: number;
  year: number;
  profilePicture?: string;
  college?: string;
}

export function ToppersSection() {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [toppersByYear, setToppersByYear] = useState<Record<string, Topper[]>>({});

  const [toppers, setToppers] = useState<Topper[]>([]);

  // Fetch toppers data

  useEffect(() => {
    fetch(`${API_BASE}/api/v1/toppers`).then(res => res.json()).then(data => { // Organize toppers by year
      const grouped: Record<string, Topper[]> = {};

      data.forEach(t => {
        const year = String(t.year);
        if (!grouped[year]) grouped[year] = [];
        grouped[year].push(t);
      });

      setToppersByYear(grouped);

      const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));
      if (years.length) setSelectedYear(years[0]);
    })
      .catch(err => console.error("Error fetching toppers:", err));
  }, []);

  // year wise keys, and dynamic data display
  const years = useMemo(
    () => Object.keys(toppersByYear).sort((a, b) => Number(b) - Number(a)),
    [toppersByYear]
  );

  const currentToppers = useMemo(
    () => toppersByYear[selectedYear] || [],
    [toppersByYear, selectedYear]
  );


  // Auto-slide effect
  useEffect(() => {
    if (currentToppers.length <= 3) return;

    const slides = Math.ceil(currentToppers.length / 3);

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentToppers]);

  // Render

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#9AE600]"></div>
            <span className="text-[#9AE600] text-sm tracking-widest uppercase">Hall of Fame</span>
            <div className="h-px w-8 bg-[#9AE600]"></div>
          </div>
          <h2 className="text-gray-900 mb-3">
            Our Toppers
          </h2>
        </div>

        {/* Year Tabs - Minimal */}
        <div className="flex justify-center gap-1 mb-12">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                setSelectedYear(year);
                setCurrentSlide(0);
              }}
              className={`px-6 py-2 transition-all duration-300 relative ${selectedYear === year
                ? 'text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              {year}
              {selectedYear === year && (
                <motion.div
                  layoutId="activeYear"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9AE600]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Slider */}
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
                {currentToppers.slice(currentSlide, currentSlide + 3).map((topper, index) => (
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
                          src={`${API_BASE}${topper.profilePicture}`} /*src={topper.image}*/
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
                          <h3 className="text-white text-xl mb-1">{topper.name}</h3>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/80">{topper.exam}</span>
                            <span className="text-white">{topper.score}</span>
                          </div>
                          <div className="mt-2 pt-2 border-t border-white/20">
                            <p className="text-white/70 text-xs">{topper.college}</p>
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
            {Array.from({ length: Math.ceil(currentToppers.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * 3)}
                className={`transition-all duration-300 ${Math.floor(currentSlide / 3) === index
                  ? 'w-8 h-1 bg-[#9AE600]'
                  : 'w-1 h-1 bg-gray-300 hover:bg-gray-400'
                  } rounded-full`}
              />
            ))}
          </div>
        </div>

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
              <p className="text-gray-500 text-sm">NEET 2024</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-4xl text-gray-900 mb-2">3400+</p>
              <p className="text-gray-500 text-sm">Doctors</p>
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