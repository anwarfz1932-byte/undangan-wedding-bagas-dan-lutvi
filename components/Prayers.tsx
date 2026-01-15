
import React from 'react';
import { motion } from 'framer-motion';

const Prayers: React.FC = () => {
  return (
    <div className="py-28 px-6 bg-[#FDF5E6] text-[#5C4033] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#D4AF37]/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mb-20">
             <motion.div 
               initial={{ scale: 0, rotate: -180 }}
               whileInView={{ scale: 1, rotate: 45 }}
               transition={{ type: "spring", stiffness: 60, delay: 0.3 }}
               className="inline-block p-4 border-2 border-[#D4AF37]/30 rounded-full mb-10"
             >
                <div className="w-16 h-16 border-2 border-[#D4AF37] flex items-center justify-center">
                   <div className="w-10 h-10 bg-[#D4AF37]/20"></div>
                </div>
             </motion.div>
             
             <motion.h3 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="font-serif-jawa text-3xl md:text-4xl font-black mb-8 italic text-[#3D2B1F]"
             >
               "Tuhan memberkati, kasih menjadi satu"
             </motion.h3>
             
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.7, duration: 0.8 }}
               className="font-body text-2xl md:text-3xl leading-relaxed mb-10 italic opacity-90 max-w-2xl mx-auto"
             >
               "Semoga Tuhan Yang Maha Suci senantiasa memberikan anugerah kepada kita semua, 
               agar pernikahan ini dapat menjadi keluarga yang sakinah, mawaddah, warahmah."
             </motion.p>
             <div className="w-32 h-[1px] bg-[#D4AF37] mx-auto opacity-50"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 1 }}
            className="bg-[#3D2B1F] text-[#FDF5E6] p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/batik-fractal.png')] pointer-events-none"></div>
            <div className="relative z-10 space-y-8">
              <h4 className="font-title text-base tracking-[0.5em] text-[#D4AF37] font-black uppercase">Pitutur Luhur</h4>
              <p className="font-serif-jawa text-4xl md:text-5xl font-black leading-tight text-[#D4AF37] drop-shadow-md">
                "Urip Iku <br className="md:hidden" /> Memayu Hayuning Bawana"
              </p>
              <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto"></div>
              <p className="italic text-xl md:text-2xl font-body opacity-80 leading-relaxed max-w-xl mx-auto">
                "Hidup di dunia hendaknya untuk menjaga keselamatan dunia, serta memberikan manfaat bagi sesama makhluk."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#D4AF37]/10 to-transparent"></div>
    </div>
  );
};

export default Prayers;
