
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
        <p className="font-title text-[#8B4513] tracking-[0.5em] text-xs md:text-sm mb-10 font-bold uppercase opacity-80 italic">Assalamu'alaikum Wr. Wb.</p>
        <h2 className="font-serif-jawa text-5xl md:text-7xl font-black mb-10 text-[#3D2B1F] leading-tight drop-shadow-sm">Mempelai Mulia</h2>
        
        {/* Floral Divider */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="w-16 h-[1px] bg-[#D4AF37] opacity-60"></div>
          <div className="text-[#D4AF37] w-8 h-8 rotate-45">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z"/></svg>
          </div>
          <div className="w-16 h-[1px] bg-[#D4AF37] opacity-60"></div>
        </div>

        <p className="font-body text-xl md:text-2xl text-[#5C4033] italic leading-relaxed max-w-3xl mx-auto opacity-90 px-4">
          "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang-Mu dalam ikatan pernikahan:"
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-24 md:gap-20 items-start overflow-hidden relative z-10">
        {/* Groom Profile */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-14 group">
            <div className="absolute inset-0 border-2 border-[#D4AF37]/30 rounded-full -m-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000"></div>
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-[#FDF5E6] bg-[#3D2B1F] flex items-center justify-center shadow-2xl relative overflow-hidden">
               <span className="font-serif-jawa text-8xl md:text-[10rem] font-black text-[#D4AF37] drop-shadow-md">B</span>
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/batik-fractal.png')]"></div>
            </div>
            {/* Flower on Frame */}
            <div className="absolute -top-6 -right-6 text-[#D4AF37] w-14 h-14">
               <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,22C12,22 17,18 17,13C17,8 12,2 12,2C12,2 7,8 7,13C7,18 12,22 12,22Z"/></svg>
            </div>
          </div>
          <h3 className="font-serif-jawa text-4xl md:text-5xl font-black text-[#3D2B1F] mb-6">Bagas Dwi Septyan</h3>
          <div className="space-y-2">
            <p className="text-[#8B4513] font-title text-xs uppercase tracking-[0.4em] font-black opacity-70">Putra Dari:</p>
            <p className="text-xl md:text-2xl text-[#5C4033] font-bold font-body">Bapak Pardiman</p>
            <p className="text-xl md:text-2xl text-[#5C4033] font-bold font-body">& Ibu Nur Santi</p>
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
          <div className="relative mb-14 group">
            <div className="absolute inset-0 border-2 border-[#D4AF37]/30 rounded-full -m-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000"></div>
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-[#FDF5E6] bg-[#3D2B1F] flex items-center justify-center shadow-2xl relative overflow-hidden">
               <span className="font-serif-jawa text-8xl md:text-[10rem] font-black text-[#D4AF37] drop-shadow-md">L</span>
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/batik-fractal.png')]"></div>
            </div>
            {/* Flower on Frame */}
            <div className="absolute -top-6 -left-6 text-[#D4AF37] w-14 h-14 -scale-x-100">
               <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,22C12,22 17,18 17,13C17,8 12,2 12,2C12,2 7,8 7,13C7,18 12,22 12,22Z"/></svg>
            </div>
          </div>
          <h3 className="font-serif-jawa text-4xl md:text-5xl font-black text-[#3D2B1F] mb-6">Lutvi Amalia</h3>
          <div className="space-y-2">
            <p className="text-[#8B4513] font-title text-xs uppercase tracking-[0.4em] font-black opacity-70">Putri Dari:</p>
            <p className="text-xl md:text-2xl text-[#5C4033] font-bold font-body">Bapak H. Muhammad Jumeno</p>
            <p className="text-xl md:text-2xl text-[#5C4033] font-bold font-body">& Ibu Hj. Turiyah</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
