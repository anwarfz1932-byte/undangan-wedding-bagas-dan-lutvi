
import React from 'react';
import { motion } from 'framer-motion';
import { FLORAL_CORNER } from '../constants';

const Prayers: React.FC = () => {
  return (
    <div className="py-32 px-6 bg-[#FDF5E6] text-[#5C4033] relative overflow-hidden">
      {/* Decorative Floral */}
      <div className="absolute top-0 right-0 w-72 text-[#D4AF37]/15 -rotate-90 pointer-events-none">
        {FLORAL_CORNER}
      </div>
      <div className="absolute bottom-0 left-0 w-72 text-[#D4AF37]/15 rotate-90 pointer-events-none">
        {FLORAL_CORNER}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-24">
             <motion.h3 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="font-serif-jawa text-2xl md:text-3xl font-bold mb-10 italic text-[#3D2B1F]"
             >
               "Tuhan memberkati, kasih menjadi satu"
             </motion.h3>
             
             <motion.p 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="font-body text-xl md:text-2xl leading-[1.8] mb-12 italic opacity-80 max-w-2xl mx-auto px-4"
             >
               "Semoga Tuhan Yang Maha Suci senantiasa memberikan anugerah kepada kita semua, 
               agar pernikahan ini dapat menjadi keluarga yang sakinah, mawaddah, warahmah."
             </motion.p>
             <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto opacity-30"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#3D2B1F] text-[#FDF5E6] p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/batik-fractal.png')]"></div>
            <div className="relative z-10 space-y-10">
              <h4 className="font-title text-[10px] tracking-[0.4em] text-[#D4AF37] font-bold uppercase opacity-70">Pitutur Luhur</h4>
              <p className="font-serif-jawa text-3xl md:text-5xl font-black leading-tight text-[#D4AF37]">
                "Urip Iku <br className="md:hidden" /> Memayu Hayuning Bawana"
              </p>
              <div className="w-10 h-[1px] bg-[#D4AF37] mx-auto opacity-40"></div>
              <p className="italic text-lg md:text-xl font-body opacity-80 leading-[1.8] max-w-xl mx-auto font-medium">
                "Hidup di dunia hendaknya untuk menjaga keselamatan dunia, serta memberikan manfaat bagi sesama makhluk."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Prayers;
