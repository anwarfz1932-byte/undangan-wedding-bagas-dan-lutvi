
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { JAVANESE_MOTIF, FLORAL_CORNER } from '../constants';
import { MailOpen } from 'lucide-react';

interface CoverProps {
  onOpen: () => void;
}

const Cover: React.FC<CoverProps> = ({ onOpen }) => {
  const [guestName, setGuestName] = useState<string>('');

  useEffect(() => {
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
      <div className="absolute inset-0 opacity-10">
        {JAVANESE_MOTIF}
      </div>

      {/* Floral Ornaments */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-48 md:w-80 text-[#D4AF37]"
      >
        {FLORAL_CORNER}
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute bottom-0 right-0 w-48 md:w-80 text-[#D4AF37] rotate-180"
      >
        {FLORAL_CORNER}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center p-6 max-w-lg w-full"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-title text-[#D4AF37] tracking-[0.4em] text-[10px] md:text-xs mb-8 uppercase font-bold"
        >
          The Wedding of
        </motion.p>
        
        <div className="flex flex-col items-center mb-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-serif-jawa text-5xl md:text-7xl font-black text-[#D4AF37] leading-tight drop-shadow-2xl"
          >
            Bagas
          </motion.h1>
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="font-script text-3xl md:text-5xl text-[#FDF5E6] my-2"
          >
            &
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-serif-jawa text-5xl md:text-7xl font-black text-[#D4AF37] leading-tight drop-shadow-2xl"
          >
            Lutvi
          </motion.h1>
        </div>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "10rem" }}
          transition={{ delay: 1.5, duration: 1 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-12"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mb-14 w-full"
        >
          <p className="font-title text-[#D4AF37] text-[9px] md:text-[10px] tracking-[0.3em] uppercase mb-4 opacity-70">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
          <div className="relative inline-block px-10 py-5 border border-[#D4AF37]/20 rounded-2xl bg-[#FDF5E6]/5 backdrop-blur-sm">
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#D4AF37]"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#D4AF37]"></div>
            <h2 className="font-serif-jawa text-xl md:text-3xl font-bold text-[#FDF5E6] tracking-wide">
              {guestName}
            </h2>
          </div>
          <p className="mt-4 text-[11px] italic opacity-50 font-body uppercase tracking-widest">Di Tempat</p>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          onClick={onOpen}
          className="group relative flex items-center gap-3 px-12 py-4 bg-[#D4AF37] text-[#3D2B1F] font-black rounded-full transition-all hover:bg-[#FDF5E6] hover:scale-105 shadow-[0_10px_30px_rgba(212,175,55,0.3)] active:scale-95 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <MailOpen className="w-5 h-5 group-hover:rotate-6 transition-transform relative z-10" />
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] relative z-10 font-title font-bold">Buka Undangan</span>
        </motion.button>
      </motion.div>

      <div className="absolute top-6 left-6 w-16 h-16 border-t border-l border-[#D4AF37]/30 rounded-tl-3xl pointer-events-none"></div>
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b border-r border-[#D4AF37]/30 rounded-br-3xl pointer-events-none"></div>
    </motion.div>
  );
};

export default Cover;
