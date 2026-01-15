
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Heart, UserPlus, Copy, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const [targetGuest, setTargetGuest] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const generateLink = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    const nameParam = targetGuest ? `?to=${encodeURIComponent(targetGuest)}` : '';
    return `${baseUrl}${nameParam}`;
  };

  const shareWhatsApp = () => {
    const name = targetGuest || 'Bapak/Ibu/Saudara/i';
    const link = generateLink();
    const text = encodeURIComponent(`Halo ${name}!\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Anda untuk hadir di acara pernikahan kami (Bagas & Lutvi).\n\nSilakan buka tautan berikut untuk melihat undangan lengkap & detail acara:\n${link}\n\nMerupakan suatu kebahagiaan bagi kami apabila Anda berkenan hadir. Terima kasih.`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateLink());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <footer className="bg-[#3D2B1F] text-[#FDF5E6] pt-32 pb-16 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-16">
            <Heart className="w-10 h-10 text-[#D4AF37] mx-auto mb-8 animate-pulse" />
            <p className="font-body text-2xl md:text-3xl italic mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
              "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai."
            </p>
          </div>

          <div className="space-y-4 mb-20">
            <p className="font-title text-base tracking-[0.4em] text-[#D4AF37] font-bold uppercase">Mempelai Berbahagia</p>
            <h2 className="font-serif-jawa text-6xl md:text-8xl font-black text-[#D4AF37] leading-none drop-shadow-2xl">
              Bagas & Lutvi
            </h2>
          </div>
          
          <div className="flex items-center justify-center gap-6 my-12">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
            <p className="font-title text-sm tracking-[0.6em] font-black uppercase text-[#D4AF37]">MATUR NUWUN</p>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
          </div>

          {/* Guest Link Generator Tool */}
          <div className="bg-[#FDF5E6]/5 border border-[#D4AF37]/30 rounded-[2.5rem] p-8 md:p-12 mb-24 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-8">
              <UserPlus className="text-[#D4AF37]" size={20} />
              <h3 className="font-title text-sm md:text-base tracking-[0.2em] font-bold uppercase text-[#D4AF37]">Bagikan Undangan</h3>
            </div>
            
            <div className="space-y-6">
              <div className="text-left">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2 block opacity-60">Nama Calon Tamu:</label>
                <input 
                  type="text"
                  value={targetGuest}
                  onChange={(e) => setTargetGuest(e.target.value)}
                  placeholder="Contoh: Budi Sudarsono"
                  className="w-full bg-white/10 border-b-2 border-[#D4AF37]/50 py-3 px-4 focus:border-[#D4AF37] outline-none transition-all font-body text-lg italic"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={shareWhatsApp}
                  className="group flex items-center justify-center gap-3 px-6 py-4 bg-[#D4AF37] text-[#3D2B1F] rounded-full font-black hover:bg-[#FDF5E6] transition-all shadow-lg text-sm uppercase tracking-wider"
                >
                  <Share2 size={18} /> Kirim WhatsApp
                </button>
                <button 
                  onClick={copyToClipboard}
                  className="group flex items-center justify-center gap-3 px-6 py-4 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-black hover:bg-[#D4AF37] hover:text-[#3D2B1F] transition-all text-sm uppercase tracking-wider"
                >
                  {isCopied ? <Check size={18} /> : <Copy size={18} />}
                  {isCopied ? 'Tersalin!' : 'Salin Tautan'}
                </button>
              </div>
            </div>
            <p className="mt-6 text-[10px] opacity-40 font-body italic">Gunakan alat ini untuk membuat link khusus bagi setiap tamu undangan.</p>
          </div>

          <div className="pt-16 border-t border-[#FDF5E6]/10">
            <p className="text-sm opacity-50 font-semibold tracking-widest">
              © 2026 DIGITAL WEDDING INVITATION <br className="md:hidden" />
              <span className="text-[#D4AF37]">BAGAS & LUTVI</span>
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" className="fill-[#D4AF37]">
           <path d="M0,100 L100,100 L0,0 C20,20 40,40 0,60 Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 scale-x-[-1] pointer-events-none">
        <svg viewBox="0 0 100 100" className="fill-[#D4AF37]">
           <path d="M0,100 L100,100 L0,0 C20,20 40,40 0,60 Z" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
