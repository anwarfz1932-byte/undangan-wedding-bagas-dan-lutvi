
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1522673607200-16488352435b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1465495910483-0d674115f97f?auto=format&fit=crop&q=80&w=800',
];

const Gallery: React.FC = () => {
  return (
    <div className="py-24 px-6 bg-[#FDF5E6]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif-jawa text-5xl md:text-7xl font-black text-[#3D2B1F] mb-6">Galeri Foto</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto shadow-[0_0_10px_rgba(212,175,55,0.3)]"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2rem] border-[10px] border-white shadow-xl group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Prewedding ${idx + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#3D2B1F]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <div className="w-12 h-12 border-2 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37]">
                    <span className="text-2xl font-bold">+</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
