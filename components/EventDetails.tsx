
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { FLORAL_CORNER } from '../constants';

const EventDetails: React.FC = () => {
  return (
    <div className="bg-[#3D2B1F] text-[#FDF5E6] py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
      
      {/* Decorative Floral */}
      <div className="absolute top-0 left-0 w-64 text-[#D4AF37]/20 pointer-events-none">
        {FLORAL_CORNER}
      </div>
      <div className="absolute bottom-0 right-0 w-64 text-[#D4AF37]/20 rotate-180 pointer-events-none">
        {FLORAL_CORNER}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="font-title text-[#D4AF37] tracking-[0.5em] text-xs md:text-sm mb-8 font-black uppercase opacity-90">Save The Date</p>
          <h2 className="font-serif-jawa text-5xl md:text-7xl font-black text-[#D4AF37] mb-8">Waktu & Tempat</h2>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto opacity-60"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Akad Nikah */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#FDF5E6]/5 border border-[#D4AF37]/30 p-12 rounded-[3rem] text-center flex flex-col justify-center relative overflow-hidden shadow-xl"
          >
            <h3 className="font-serif-jawa text-4xl md:text-5xl text-[#D4AF37] font-black mb-14 tracking-wide italic">Akad Nikah</h3>
            <div className="space-y-12">
              <div className="flex flex-col items-center gap-4">
                <Calendar className="text-[#D4AF37] opacity-80" size={28} />
                <p className="font-title text-2xl md:text-3xl font-black tracking-[0.1em] uppercase">31 Januari 2026</p>
                <p className="font-body text-lg italic opacity-70 font-medium">Sabtu Kliwon</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Clock className="text-[#D4AF37] opacity-80" size={28} />
                <p className="font-title text-xl md:text-2xl font-bold tracking-widest uppercase">08.00 WIB - Selesai</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <MapPin className="text-[#D4AF37] opacity-80" size={28} />
                <div className="max-w-sm">
                   <p className="font-title text-lg md:text-xl font-black mb-3 tracking-[0.15em] uppercase text-[#D4AF37]">Blater Kidul RT 02/RW 07</p>
                   <p className="font-body text-lg md:text-xl opacity-80 leading-relaxed italic font-medium">Jimbaran, Bandungan, Kab. Semarang</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#D4AF37] text-[#3D2B1F] p-12 rounded-[3rem] text-center shadow-2xl flex flex-col justify-center relative overflow-hidden border border-white/20"
          >
            <h3 className="font-serif-jawa text-4xl md:text-5xl font-black mb-14 tracking-wide italic">Resepsi</h3>
            <div className="space-y-12">
              <div className="flex flex-col items-center gap-4">
                <Calendar className="opacity-80" size={28} />
                <p className="font-title text-2xl md:text-3xl font-black tracking-[0.1em] uppercase">31 Januari 2026</p>
                <p className="font-body text-lg italic opacity-80 font-bold">Sabtu Kliwon</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Clock className="opacity-80" size={28} />
                <p className="font-title text-xl md:text-2xl font-black tracking-widest uppercase">13.00 WIB - Selesai</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <MapPin className="opacity-80" size={28} />
                <div className="max-w-sm">
                   <p className="font-title text-lg md:text-xl font-black mb-3 tracking-[0.15em] uppercase">Blater Kidul RT 02/RW 07</p>
                   <p className="font-body text-lg md:text-xl font-bold leading-relaxed italic opacity-90">Jimbaran, Bandungan, Kab. Semarang</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
