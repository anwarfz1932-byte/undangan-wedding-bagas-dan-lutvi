
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
    <footer className="bg-[#3D2B1F] text-[#FDF5E6] pt-40 pb-20 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-20">
            <Heart className="w-12 h-12 text-[#D4AF37] mx-auto mb-10 animate-pulse" />
            <p className="font-body text-2xl md:text-4xl italic mb-12 max-w-3xl mx-auto leading-relaxed opacity-95 px-4 font-medium">
              "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai."
            </p>
          </div>

          <div className="space-y-6 mb-24">
            <p className="font-title text-sm tracking-[0.6em] text-[#D4AF37] font-black uppercase opacity-90">Mempelai Berbahagia</p>
            <h2 className="font-serif-jawa text-7xl md:text-[10rem] font-black text-[#D4AF37] leading-none drop-shadow-2xl">
              Bagas & Lutvi
            </h2>
          </div>
          
          <div className="flex items-center justify-center gap-8 my-16">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
            <p className="font-title text-base md:text-lg tracking-[0.8em] font-black uppercase text-[#D4AF37]">MATUR NUWUN</p>
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
          </div>

          {/* Guest Link Generator Tool */}
          <div className="bg-[#FDF5E6]/5 border border-[#D4AF37]/30 rounded-[3.5rem] p-10 md:p-16 mb-28 max-w-3xl mx-auto backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/batik-fractal.png')]"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-10">
                <UserPlus className="text-[#D4AF37]" size={24} />
                <h3 className="font-title text-base md:text-lg tracking-[0.3em] font-black uppercase text-[#D4AF37]">Bagikan Undangan</h3>
              </div>
              
              <div className="space-y-8">
                <div className="text-left">
                  <label className="text-xs uppercase tracking-[0.3em] font-black mb-4 block opacity-70 text-[#D4AF37]">Nama Calon Tamu:</label>
                  <input 
                    type="text"
                    value={targetGuest}
                    onChange={(e) => setTargetGuest(e.target.value)}
                    placeholder="Contoh: Budi Sudarsono"
                    className="w-full bg-white/10 border-b-2 border-[#D4AF37]/50 py-4 px-6 focus:border-[#D4AF37] outline-none transition-all font-body text-2xl italic font-medium placeholder:opacity-20"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button 
                    onClick={shareWhatsApp}
                    className="group flex items-center justify-center gap-4 px-10 py-5 bg-[#D4AF37] text-[#3D2B1F] rounded-full font-black hover:bg-[#FDF5E6] transition-all shadow-[0_15px_30px_rgba(212,175,55,0.3)] text-sm md:text-base uppercase tracking-widest active:scale-95"
                  >
                    <Share2 size={22} /> Kirim WhatsApp
                  </button>
                  <button 
                    onClick={copyToClipboard}
                    className="group flex items-center justify-center gap-4 px-10 py-5 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-black hover:bg-[#D4AF37] hover:text-[#3D2B1F] transition-all text-sm md:text-base uppercase tracking-widest active:scale-95 shadow-lg"
                  >
                    {isCopied ? <Check size={22} /> : <Copy size={22} />}
                    {isCopied ? 'Tersalin!' : 'Salin Tautan'}
                  </button>
                </div>
              </div>
              <p className="mt-10 text-xs md:text-sm opacity-50 font-body italic font-medium">Gunakan alat ini untuk membuat link khusus bagi setiap tamu undangan.</p>
            </div>
          </div>

          <div className="pt-20 border-t border-[#FDF5E6]/15">
            <p className="text-base opacity-60 font-black tracking-[0.5em] uppercase">
              © 2026 DIGITAL WEDDING INVITATION <br className="md:hidden" />
              <span className="text-[#D4AF37] block mt-2">BAGAS & LUTVI</span>
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" className="fill-[#D4AF37]">
           <path d="M0,100 L100,100 L0,0 C20,20 40,40 0,60 Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 scale-x-[-1] pointer-events-none">
        <svg viewBox="0 0 100 100" className="fill-[#D4AF37]">
           <path d="M0,100 L100,100 L0,0 C20,20 40,40 0,60 Z" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
