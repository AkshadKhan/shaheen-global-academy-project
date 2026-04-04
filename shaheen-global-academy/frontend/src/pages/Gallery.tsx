import { useEffect, useState } from "react";
import { galleryData } from "../data/gallery";
import { X } from "lucide-react";

const categories = [
  "All",
  "Campus",
  "Classrooms",
  "Events",
  "Activities",
  "Achievements",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  useEffect(() => {
    document.title = "Gallery - Shaheen Global Academy";
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-semibold text-[#9AE600]">Gallery</h1>
        <p className="text-gray-500 mt-2">Explore moments from our academy</p>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-[#9AE600] text-black shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-[#9AE600]/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid animate-fade-in rounded-2xl shadow-sm hover:shadow-xl transition gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => setSelectedImage(item.id)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
              <div className="p-4 text-white">
                <p className="text-sm">{item.category}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]"
          onClick={() => setSelectedImage(null)} // 👈 click outside closes
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white z-50"
          >
            <X size={28} />
          </button>

          {/* Image */}
          <img
            src={galleryData.find((img) => img.id === selectedImage)?.src}
            className="max-h-[90%] max-w-[90%] rounded-xl"
            onClick={(e) => e.stopPropagation()} // 👈 prevents closing when clicking image
          />
        </div>
      )}
    </div>
  );
}
