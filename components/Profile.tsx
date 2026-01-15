
import React from 'react';
import { motion } from 'framer-motion';
import { FLORAL_CORNER } from '../constants';

const Profile: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 text-center relative overflow-hidden">
      {/* Decorative Floral */}
      <div className="absolute top-0 right-0 w-64 text-[#D4AF37]/10 -rotate-90 pointer-events-none">
        {FLORAL_CORNER}
      </div>
      <div className="absolute bottom-0 left-0 w-64 text-[#D4AF37]/10 rotate-90 pointer-events-none">
        {FLORAL_CORNER}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-24"
      >
        <p className="font-title text-[#8B4513] tracking-[0.4em] text-[10px] md:text-xs mb-8 font-bold uppercase opacity-80">Assalamu'alaikum Wr. Wb.</p>
        <h2 className="font-serif-jawa text-4xl md:text-6xl font-black mb-8 text-[#3D2B1F] leading-tight">Mempelai Mulia</h2>
        
        {/* Floral Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-[#D4AF37] opacity-50"></div>
          <div className="text-[#D4AF37] w-6 h-6 rotate-45">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z"/></svg>
          </div>
          <div className="w-12 h-[1px] bg-[#D4AF37] opacity-50"></div>
        </div>

        <p className="font-body text-lg md:text-xl text-[#5C4033] italic leading-relaxed max-w-2xl mx-auto opacity-90">
          "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang-Mu dalam ikatan pernikahan:"
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-24 md:gap-16 items-start overflow-hidden relative z-10">
        {/* Groom Profile */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-12 group">
            <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-full -m-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000"></div>
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-[#FDF5E6] bg-[#3D2B1F] flex items-center justify-center shadow-2xl relative overflow-hidden">
               <span className="font-serif-jawa text-7xl md:text-9xl font-black text-[#D4AF37] drop-shadow-md">B</span>
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/batik-fractal.png')]"></div>
            </div>
            {/* Flower on Frame */}
            <div className="absolute -top-4 -right-4 text-[#D4AF37] w-12 h-12">
               <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,22C12,22 17,18 17,13C17,8 12,2 12,2C12,2 7,8 7,13C7,18 12,22 12,22Z"/></svg>
            </div>
          </div>
          <h3 className="font-serif-jawa text-3xl md:text-4xl font-black text-[#3D2B1F] mb-4">Bagas Dwi Septyan</h3>
          <div className="space-y-1">
            <p className="text-[#8B4513] font-title text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">Putra Dari:</p>
            <p className="text-lg text-[#5C4033] font-semibold">Bapak Pardiman</p>
            <p className="text-lg text-[#5C4033] font-semibold">& Ibu Nur Santi</p>
          </div>
        </motion.div>

        {/* Bride Profile */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-12 group">
            <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-full -m-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000"></div>
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-[#FDF5E6] bg-[#3D2B1F] flex items-center justify-center shadow-2xl relative overflow-hidden">
               <span className="font-serif-jawa text-7xl md:text-9xl font-black text-[#D4AF37] drop-shadow-md">L</span>
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/batik-fractal.png')]"></div>
            </div>
            {/* Flower on Frame */}
            <div className="absolute -top-4 -left-4 text-[#D4AF37] w-12 h-12 -scale-x-100">
               <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,22C12,22 17,18 17,13C17,8 12,2 12,2C12,2 7,8 7,13C7,18 12,22 12,22Z"/></svg>
            </div>
          </div>
          <h3 className="font-serif-jawa text-3xl md:text-4xl font-black text-[#3D2B1F] mb-4">Lutvi Amalia</h3>
          <div className="space-y-1">
            <p className="text-[#8B4513] font-title text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">Putri Dari:</p>
            <p className="text-lg text-[#5C4033] font-semibold">Bapak H. Muhammad Jumeno</p>
            <p className="text-lg text-[#5C4033] font-semibold">& Ibu Hj. Turiyah</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
