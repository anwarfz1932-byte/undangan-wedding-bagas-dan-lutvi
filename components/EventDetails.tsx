
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <div className="bg-[#3D2B1F] text-[#FDF5E6] py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-title text-[#D4AF37] tracking-[0.5em] text-sm md:text-base mb-4 font-bold uppercase">Save The Date</p>
          <h2 className="font-serif-jawa text-5xl md:text-7xl font-black text-[#D4AF37] mb-6 drop-shadow-md">Waktu & Tempat</h2>
          <div className="w-32 h-[3px] bg-[#D4AF37] mx-auto shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Akad Nikah */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 12, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group bg-[#FDF5E6]/5 backdrop-blur-md border-2 border-[#D4AF37]/40 p-10 md:p-12 rounded-[3rem] text-center flex flex-col justify-center transition-all hover:border-[#D4AF37] hover:bg-[#FDF5E6]/10"
          >
            <h3 className="font-serif-jawa text-4xl md:text-6xl text-[#D4AF37] font-black mb-10 tracking-wide underline decoration-1 underline-offset-[12px]">Akad Nikah</h3>
            <div className="space-y-12">
              <div className="flex flex-col items-center gap-4">
                <Calendar className="text-[#D4AF37] opacity-80" size={40} />
                <p className="font-title text-2xl md:text-3xl font-black tracking-widest uppercase">Sabtu, 31 Januari 2026</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Clock className="text-[#D4AF37] opacity-80" size={40} />
                <p className="font-title text-xl md:text-2xl font-bold italic tracking-wider">Pukul 08.00 WIB - Selesai</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <MapPin className="text-[#D4AF37] opacity-80" size={40} />
                <div className="max-w-xs">
                   <p className="font-title text-lg md:text-xl font-black mb-1 tracking-wider uppercase text-[#D4AF37]">Blater Kidul RT 02/RW 07</p>
                   <p className="font-body text-lg md:text-xl opacity-80 leading-relaxed italic">Jimbaran, Bandungan, Kab. Semarang</p>
                   <p className="font-title text-sm text-[#D4AF37] mt-4 font-black tracking-[0.2em] uppercase border border-[#D4AF37]/30 px-4 py-2 rounded-full inline-block">(Kediaman Mempelai Wanita)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 12, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#D4AF37] text-[#3D2B1F] p-10 md:p-12 rounded-[3rem] text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <h3 className="font-serif-jawa text-4xl md:text-6xl font-black mb-10 text-[#3D2B1F] tracking-wide underline decoration-2 underline-offset-[12px]">Resepsi</h3>
            <div className="space-y-12 relative z-10">
              <div className="flex flex-col items-center gap-4">
                <Calendar size={40} className="opacity-70" />
                <p className="font-title text-2xl md:text-3xl font-black tracking-widest uppercase">Sabtu, 31 Januari 2026</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Clock size={40} className="opacity-70" />
                <p className="font-title text-xl md:text-2xl font-black italic tracking-wider">Pukul 13.00 WIB - Selesai</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <MapPin size={40} className="opacity-70" />
                <div className="max-w-xs">
                   <p className="font-title text-lg md:text-xl font-black mb-1 tracking-wider uppercase">Blater Kidul RT 02/RW 07</p>
                   <p className="font-body text-lg md:text-xl font-black leading-relaxed italic">Jimbaran, Bandungan, Kab. Semarang</p>
                   <p className="font-title text-sm mt-4 font-black tracking-[0.2em] uppercase border border-[#3D2B1F]/30 px-4 py-2 rounded-full inline-block">(Kediaman Mempelai Wanita)</p>
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
