import { Trophy, Award, TrendingUp, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ToppersSection() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [currentSlide, setCurrentSlide] = useState(0);

  const toppers = {
    '2024': [
      {
        name: "Aarav Sharma",
        exam: "NEET",
        score: "720/720",
        rank: "AIR 345612",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        college: "AIIMS Delhi"
      },
      {
        name: "Priya Singh",
        exam: "NEET",
        score: "715/720",
        rank: "AIR 45",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        college: "JIPMER Puducherry"
      },
      {
        name: "Arjun Patel",
        exam: "JEE Advanced",
        score: "334/360",
        rank: "AIR 89",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        college: "IIT Bombay"
      },
      {
        name: "Ananya Gupta",
        exam: "NEET",
        score: "710/720",
        rank: "AIR 78",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        college: "AIIMS Jodhpur"
      },
      {
        name: "Rohan Kumar",
        exam: "JEE Advanced",
        score: "328/360",
        rank: "AIR 124",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        college: "IIT Delhi"
      },
      {
        name: "Sneha Reddy",
        exam: "NEET",
        score: "708/720",
        rank: "AIR 95",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        college: "AIIMS Rishikesh"
      }
    ],
    '2023': [
      {
        name: "Vikram Mehta",
        exam: "NEET",
        score: "718/720",
        rank: "AIR 23",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        college: "AIIMS Delhi"
      },
      {
        name: "Diya Kapoor",
        exam: "NEET",
        score: "712/720",
        rank: "AIR 56",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        college: "MAMC Delhi"
      },
      {
        name: "Aditya Verma",
        exam: "JEE Advanced",
        score: "331/360",
        rank: "AIR 102",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
        college: "IIT Kanpur"
      }
    ]
  };

  const years = ['2024', '2023'];
  const currentToppers = toppers[selectedYear as keyof typeof toppers];

  // Auto-slide effect
  useEffect(() => {
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
              className={`px-6 py-2 transition-all duration-300 relative ${
                selectedYear === year
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
                          src={topper.image} 
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
                className={`transition-all duration-300 ${
                  Math.floor(currentSlide / 3) === index
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