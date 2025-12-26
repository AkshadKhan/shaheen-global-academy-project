import { useState } from 'react';
import { X } from 'lucide-react';

const infrastructureItems = [
  {
    id: 1,
    title: 'Modern Library',
    description: 'State-of-the-art library with over 50,000 books and digital resources',
    image: 'https://images.unsplash.com/photo-1531429745839-827a6a45e040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1Mjc1ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    title: 'Science Laboratory',
    description: 'Fully equipped labs for Physics, Chemistry, and Biology',
    image: 'https://images.unsplash.com/photo-1707944746620-fc0371b91906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjUyMTczNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    title: 'Sports Complex',
    description: 'Multi-purpose sports facilities including cricket, football, and athletics',
    image: 'https://images.unsplash.com/photo-1734652246537-104c43a68942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwZmllbGR8ZW58MXx8fHwxNzY1MTgzNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    title: 'Computer Labs',
    description: 'Advanced computer labs with latest technology and high-speed internet',
    image: 'https://images.unsplash.com/photo-1692133211836-52846376d66f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjUyNTQ0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    title: 'Auditorium',
    description: 'Modern auditorium for cultural events and academic gatherings',
    image: 'https://images.unsplash.com/photo-1761502479994-3a5e07ec243e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhdWRpdG9yaXVtJTIwdGhlYXRlcnxlbnwxfHx8fDE3NjUyNzU4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 6,
    title: 'Cafeteria',
    description: 'Spacious dining area serving nutritious and hygienic meals',
    image: 'https://images.unsplash.com/photo-1559759043-8e2e08d9c932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYWZldGVyaWElMjBkaW5pbmd8ZW58MXx8fHwxNzY1Mjc1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function InfrastructureSection() {
  const [selectedImage, setSelectedImage] = useState<typeof infrastructureItems[0] | null>(null);

  return (
    <section id='infrastructure' className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#9AE600]/10 rounded-full mb-4">
            <span className="text-[#9AE600]">World-Class Facilities</span>
          </div>
          <h2 className="text-4xl mb-4 text-[#101828]">Our Infrastructure</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience excellence through our state-of-the-art facilities designed to nurture holistic development
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infrastructureItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 h-80"
              onClick={() => setSelectedImage(item)}
              style={{ height: '320px' }}
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101828] via-[#101828]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#9AE600] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          style={{ zIndex: 9999 }}
        >
          <button
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-[10000]"
            onClick={() => setSelectedImage(null)}
            style={{ zIndex: 10000 }}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-2xl shadow-2xl max-h-[80vh] object-contain"
              style={{ maxHeight: '80vh', objectFit: 'contain' }}
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}