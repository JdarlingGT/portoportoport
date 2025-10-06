import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

const photos: Photo[] = [
  {
    src: '/assets/personal/professional-headshot.jpg',
    alt: 'Jacob Darling Professional Headshot',
    caption: 'Professional headshot'
  },
  {
    src: '/assets/personal/profile1.png',
    alt: 'Jacob Darling Profile 1',
    caption: 'Strategic planning session'
  },
  {
    src: '/assets/personal/profile2.png',
    alt: 'Jacob Darling Profile 2',
    caption: 'Team collaboration'
  },
  {
    src: '/assets/personal/profile3.png',
    alt: 'Jacob Darling Profile 3',
    caption: 'Technical implementation'
  },
  {
    src: '/assets/personal/profile4.png',
    alt: 'Jacob Darling Profile 4',
    caption: 'Client presentation'
  },
  {
    src: '/assets/personal/profile5.png',
    alt: 'Jacob Darling Profile 5',
    caption: 'Innovation workshop'
  },
  {
    src: '/assets/personal/IMG_20220529_193948_726-2.jpg',
    alt: 'Jacob Darling Casual',
    caption: 'Behind the scenes'
  },
  {
    src: '/assets/personal/241311036_10117555583372059_173429180650836298_n.webp',
    alt: 'Jacob Darling Personal',
    caption: 'Personal moment'
  }
];

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Behind the Work</h2>
          <p className="text-gray-400 text-lg">A glimpse into the journey and moments that shape my approach</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              {photo.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              {selectedPhoto.caption && (
                <div className="p-4 bg-white">
                  <p className="text-gray-800 font-medium">{selectedPhoto.caption}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
