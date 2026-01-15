
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { JAVANESE_MOTIF } from '../constants';
import { MailOpen, User } from 'lucide-react';

interface CoverProps {
  onOpen: () => void;
}

const Cover: React.FC<CoverProps> = ({ onOpen }) => {
  const [guestName, setGuestName] = useState<string>('');

  useEffect(() => {
    // Mengambil nama tamu dari URL parameter (?to=Nama+Tamu)
    const params = new URLSearchParams(window.location.search);
    const name = params.get('to');
    if (name) {
      setGuestName(decodeURIComponent(name));
    } else {
      setGuestName('Tamu Undangan');
    }
  }, []);

  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#3D2B1F] text-[#FDF5E6] overflow-hidden"
    >
      {/* Background Batik Motif Overlay */}
      <div className="absolute inset-0 opacity-10">
        {JAVANESE_MOTIF}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center p-8 max-w-lg w-full"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-title text-[#D4AF37] tracking-[0.4em] text-xs md:text-sm mb-6 uppercase font-bold"
        >
          The Wedding of
        </motion.p>
        
        <div className="flex flex-col items-center mb-4">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-serif-jawa text-6xl md:text-8xl font-black text-[#D4AF37] leading-tight drop-shadow-2xl"
          >
            Bagas
          </motion.h1>
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="font-script text-4xl md:text-6xl text-[#FDF5E6] my-2"
          >
            &
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-serif-jawa text-6xl md:text-8xl font-black text-[#D4AF37] leading-tight drop-shadow-2xl"
          >
            Lutvi
          </motion.h1>
        </div>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "12rem" }}
          transition={{ delay: 1.5, duration: 1 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-10"
        ></motion.div>

        {/* Guest Name Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mb-12 w-full max-w-sm"
        >
          <p className="font-title text-[#D4AF37] text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 opacity-80">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
          <div className="relative inline-block px-8 py-4 border border-[#D4AF37]/30 rounded-2xl bg-[#FDF5E6]/5 backdrop-blur-sm group">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]"></div>
            <h2 className="font-serif-jawa text-2xl md:text-3xl font-bold text-[#FDF5E6] tracking-wide">
              {guestName}
            </h2>
          </div>
          <p className="mt-4 text-xs italic opacity-60 font-body">Di Tempat</p>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          onClick={onOpen}
          className="group relative flex items-center gap-4 px-10 py-4 bg-[#D4AF37] text-[#3D2B1F] font-black rounded-full transition-all hover:bg-[#FDF5E6] hover:scale-105 shadow-[0_10px_30px_rgba(212,175,55,0.3)] active:scale-95 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <MailOpen className="w-6 h-6 group-hover:rotate-12 transition-transform relative z-10" />
          <span className="text-sm md:text-base uppercase tracking-[0.2em] relative z-10">Buka Undangan</span>
        </motion.button>
      </motion.div>

      {/* Ornaments - Decorative Corners */}
      <div className="absolute top-10 left-10 w-24 md:w-40 h-24 md:h-40 border-t-[3px] border-l-[3px] border-[#D4AF37]/40 rounded-tl-[3rem] md:rounded-tl-[4rem] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-24 md:w-40 h-24 md:h-40 border-b-[3px] border-r-[3px] border-[#D4AF37]/40 rounded-br-[3rem] md:rounded-br-[4rem] pointer-events-none"></div>
      
      {/* Subtle Batik Elements in corners */}
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
         <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0C100 55.2285 55.2285 100 0 100" stroke="#D4AF37" strokeWidth="1"/>
            <circle cx="80" cy="20" r="5" fill="#D4AF37" />
         </svg>
      </div>
    </motion.div>
  );
};

export default Cover;
