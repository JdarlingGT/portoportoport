import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { X, ExternalLink } from 'lucide-react';
import PersonalGallery from '../components/ui/PersonalGallery';

interface DesignWork {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const designWorks: DesignWork[] = [
  {
    id: '1',
    title: 'Dirty 30 Event Branding',
    category: 'Event Design',
    description: 'Complete branding package for milestone birthday celebration including invitations and merchandise',
    image: '/assets/graphic-design/Dirty 30 Back.jpg',
    tags: ['Branding', 'Print Design', 'Event Marketing']
  },
  {
    id: '2',
    title: 'Koozie Product Design',
    category: 'Product Design',
    description: 'Custom koozie design featuring creative branding and eye-catching graphics',
    image: '/assets/graphic-design/Koozie design - final.png',
    tags: ['Product Design', 'Merchandise', 'Branding']
  },
  {
    id: '3',
    title: 'Creative Photography',
    category: 'Photography',
    description: 'Professional photography showcasing unique perspectives and creative vision',
    image: '/assets/graphic-design/IMG_20220529_195734_101.jpg',
    tags: ['Photography', 'Visual Content', 'Creative Direction']
  },
  {
    id: '4',
    title: 'Artistic Composition',
    category: 'Photography',
    description: 'Artistic photography demonstrating attention to detail and composition',
    image: '/assets/graphic-design/IMG_20220606_011741_906.jpg',
    tags: ['Photography', 'Art Direction', 'Visual Storytelling']
  },
  {
    id: '5',
    title: 'Stary Nap Illustration',
    category: 'Illustration',
    description: 'Creative illustration work showcasing artistic versatility',
    image: '/assets/graphic-design/Stary Nap.jpg',
    tags: ['Illustration', 'Digital Art', 'Creative Design']
  },
  {
    id: '6',
    title: 'Brand Expression Design',
    category: 'Digital Design',
    description: 'Modern digital design showcasing brand personality and creative execution',
    image: '/assets/graphic-design/Adobe_Express_20220529_1906220.5458089298150159.png',
    tags: ['Digital Design', 'Branding', 'Visual Identity']
  }
];

const Gallery = () => {
  const [selectedWork, setSelectedWork] = useState<DesignWork | null>(null);
  const [filter, setFilter] = useState('All');
  const galleryRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const categories = ['All', ...Array.from(new Set(designWorks.map(w => w.category)))];
  const filteredWorks = filter === 'All' ? designWorks : designWorks.filter(w => w.category === filter);

  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    }

    // Gallery items stagger animation
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll('.gallery-item');
      gsap.from(items, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }
  }, [filter]);

  const handleImageClick = (work: DesignWork) => {
    setSelectedWork(work);
    // Modal entrance animation
    setTimeout(() => {
      gsap.from('.modal-content', {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.out'
      });
    }, 10);
  };

  const closeModal = () => {
    gsap.to('.modal-content', {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.in',
      onComplete: () => setSelectedWork(null)
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-28 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 text-center">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Design Portfolio
          </span>
        </h1>
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-8">
          Marketing is strategy, messaging, and design. Here's where creativity meets execution.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Design Gallery */}
      <div ref={galleryRef} className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="gallery-item group cursor-pointer opacity-0"
              onClick={() => handleImageClick(work)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-xs font-medium text-cyan-300">
                          {work.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                      <p className="text-sm text-gray-300">{work.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{work.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Gallery Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Behind the <span className="text-cyan-400">Work</span>
          </h2>
          <p className="text-gray-400 text-lg">
            The person behind the portfolio
          </p>
        </div>
        <PersonalGallery />
      </div>

      {/* Modal */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={closeModal}>
          <div className="modal-content relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-[#0F0F0F] border border-white/20 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-[4/3] md:aspect-auto">
                  <img
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-sm font-medium text-cyan-300 mb-4">
                    {selectedWork.category}
                  </span>
                  <h2 className="text-3xl font-bold mb-4">{selectedWork.title}</h2>
                  <p className="text-gray-400 text-lg mb-6">{selectedWork.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">SKILLS APPLIED</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedWork.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
