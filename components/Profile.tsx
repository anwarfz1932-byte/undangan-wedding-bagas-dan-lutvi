
import React from 'react';
import { motion } from 'framer-motion';

const Profile: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-20"
      >
        <p className="font-title text-[#8B4513] tracking-[0.5em] text-sm md:text-base mb-6 font-bold uppercase">Assalamu'alaikum Wr. Wb.</p>
        <h2 className="font-serif-jawa text-5xl md:text-6xl font-black mb-8 text-[#3D2B1F] leading-tight">Mempelai Mulia</h2>
        <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
        <p className="font-body text-xl md:text-2xl text-[#5C4033] italic leading-relaxed max-w-3xl mx-auto">
          "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang-Mu dalam ikatan pernikahan:"
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-20 md:gap-12 items-start overflow-hidden py-10">
        {/* Groom Profile */}
        <motion.div 
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-10 group">
            <div className="absolute inset-0 border-[6px] border-[#D4AF37] rounded-full -m-4 opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-full -m-2 opacity-60"></div>
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-[8px] border-[#FDF5E6] bg-[#3D2B1F] flex items-center justify-center shadow-2xl overflow-hidden relative">
               <span className="font-serif-jawa text-8xl md:text-[10rem] font-black text-[#D4AF37] drop-shadow-md">B</span>
               <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <img src="https://www.transparenttextures.com/patterns/batik-fractal.png" alt="" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
          <h3 className="font-serif-jawa text-4xl md:text-5xl font-black text-[#3D2B1F] mb-4">Bagas Dwi Septyan</h3>
          <p className="text-[#8B4513] font-bold text-lg mb-2 uppercase tracking-widest">Putra Dari:</p>
          <p className="text-xl text-[#5C4033] font-semibold">Bapak Pardiman</p>
          <p className="text-xl text-[#5C4033] font-semibold">& Ibu Nur Santi</p>
        </motion.div>

        {/* Bride Profile */}
        <motion.div 
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-10 group">
            <div className="absolute inset-0 border-[6px] border-[#D4AF37] rounded-full -m-4 opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-full -m-2 opacity-60"></div>
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-[8px] border-[#FDF5E6] bg-[#3D2B1F] flex items-center justify-center shadow-2xl overflow-hidden relative">
               <span className="font-serif-jawa text-8xl md:text-[10rem] font-black text-[#D4AF37] drop-shadow-md">L</span>
               <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <img src="https://www.transparenttextures.com/patterns/batik-fractal.png" alt="" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
          <h3 className="font-serif-jawa text-4xl md:text-5xl font-black text-[#3D2B1F] mb-4">Lutvi Amalia</h3>
          <p className="text-[#8B4513] font-bold text-lg mb-2 uppercase tracking-widest">Putri Dari:</p>
          <p className="text-xl text-[#5C4033] font-semibold">Bapak H. Muhammad Jumeno</p>
          <p className="text-xl text-[#5C4033] font-semibold">& Ibu Hj. Turiyah</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
