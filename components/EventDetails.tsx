
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <div className="bg-[#3D2B1F] text-[#FDF5E6] py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="font-title text-[#D4AF37] tracking-[0.4em] text-[10px] md:text-xs mb-6 font-bold uppercase opacity-80">Save The Date</p>
          <h2 className="font-serif-jawa text-4xl md:text-6xl font-black text-[#D4AF37] mb-6">Waktu & Tempat</h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto opacity-50"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Akad Nikah */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#FDF5E6]/5 border border-[#D4AF37]/20 p-10 rounded-[2.5rem] text-center flex flex-col justify-center"
          >
            <h3 className="font-serif-jawa text-3xl md:text-4xl text-[#D4AF37] font-black mb-12 tracking-wide italic">Akad Nikah</h3>
            <div className="space-y-10">
              <div className="flex flex-col items-center gap-3">
                <Calendar className="text-[#D4AF37] opacity-60" size={24} />
                <p className="font-title text-xl md:text-2xl font-bold tracking-widest uppercase">31 Januari 2026</p>
                <p className="font-body text-sm italic opacity-60">Sabtu Kliwon</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Clock className="text-[#D4AF37] opacity-60" size={24} />
                <p className="font-title text-lg md:text-xl font-medium tracking-wider">08.00 WIB - Selesai</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <MapPin className="text-[#D4AF37] opacity-60" size={24} />
                <div className="max-w-xs">
                   <p className="font-title text-sm md:text-base font-bold mb-1 tracking-wider uppercase text-[#D4AF37]">Blater Kidul RT 02/RW 07</p>
                   <p className="font-body text-base opacity-70 leading-relaxed italic">Jimbaran, Bandungan, Kab. Semarang</p>
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
            className="bg-[#D4AF37] text-[#3D2B1F] p-10 rounded-[2.5rem] text-center shadow-2xl flex flex-col justify-center"
          >
            <h3 className="font-serif-jawa text-3xl md:text-4xl font-black mb-12 tracking-wide italic">Resepsi</h3>
            <div className="space-y-10">
              <div className="flex flex-col items-center gap-3">
                <Calendar className="opacity-60" size={24} />
                <p className="font-title text-xl md:text-2xl font-bold tracking-widest uppercase">31 Januari 2026</p>
                <p className="font-body text-sm italic opacity-60">Sabtu Kliwon</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Clock className="opacity-60" size={24} />
                <p className="font-title text-lg md:text-xl font-bold tracking-wider">13.00 WIB - Selesai</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <MapPin className="opacity-60" size={24} />
                <div className="max-w-xs">
                   <p className="font-title text-sm md:text-base font-bold mb-1 tracking-wider uppercase">Blater Kidul RT 02/RW 07</p>
                   <p className="font-body text-base font-medium leading-relaxed italic opacity-80">Jimbaran, Bandungan, Kab. Semarang</p>
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
