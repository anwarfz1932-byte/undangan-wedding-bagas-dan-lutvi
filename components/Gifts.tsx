
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Gift, ExternalLink } from 'lucide-react';
import { FLORAL_CORNER } from '../constants';

const Gifts: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const accountNo = "089646703900";
  const danaLink = `https://link.dana.id/qr/`;

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 pb-32 px-6 bg-[#FDF5E6] relative overflow-hidden">
      {/* Decorative Floral */}
      <div className="absolute top-0 left-0 w-64 text-[#D4AF37]/20 pointer-events-none">
        {FLORAL_CORNER}
      </div>
      <div className="absolute bottom-0 right-0 w-64 text-[#D4AF37]/20 rotate-180 pointer-events-none">
        {FLORAL_CORNER}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Gift className="w-12 h-12 text-[#D4AF37] mx-auto mb-8 opacity-90" />
          <h2 className="font-serif-jawa text-5xl md:text-6xl font-black text-[#3D2B1F] mb-6">Kirim Kado</h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-10 opacity-60"></div>
          <p className="text-[#5C4033] font-body text-xl md:text-2xl opacity-90 italic max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            "Doa restu Anda merupakan kado terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih, Anda dapat mengirimkannya melalui:"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-[#3D2B1F] p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-[#D4AF37]/40">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/batik-fractal.png')]"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 px-8 py-3 rounded-full border border-[#D4AF37]/30 backdrop-blur-sm">
                  <span className="font-title text-[#D4AF37] text-2xl md:text-3xl font-black tracking-[0.25em]">DANA</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] opacity-80 font-black">Nomor Rekening/HP:</p>
                <h3 className="text-3xl md:text-4xl font-black text-[#FDF5E6] font-title tracking-[0.1em]">{accountNo}</h3>
              </div>

              <div className="space-y-2 pb-6">
                <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] opacity-80 font-black">Atas Nama:</p>
                <p className="text-2xl md:text-3xl text-[#FDF5E6] font-serif-jawa font-black italic drop-shadow-md">Bagas Dwi Septyan</p>
              </div>

              <div className="grid grid-cols-1 gap-5 pt-8 border-t border-[#D4AF37]/30">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="w-full py-5 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] rounded-[1.2rem] font-black flex items-center justify-center gap-4 transition-all hover:bg-[#D4AF37]/15 font-title text-sm uppercase tracking-widest shadow-inner"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                  {copied ? "Nomor Tersalin!" : "Salin Nomor HP"}
                </motion.button>

                <motion.a
                  href={danaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-5 bg-[#D4AF37] text-[#3D2B1F] rounded-[1.2rem] font-black flex items-center justify-center gap-4 transition-all hover:bg-[#FDF5E6] shadow-[0_15px_30px_rgba(212,175,55,0.4)] font-title text-sm uppercase tracking-widest"
                >
                  <ExternalLink size={20} />
                  Buka Aplikasi DANA
                </motion.a>
              </div>
            </div>
          </div>
          
          <p className="mt-10 text-sm md:text-base opacity-60 font-body italic font-medium leading-relaxed">
            *Silakan salin nomor HP di atas terlebih dahulu <br className="hidden md:block" /> sebelum membuka aplikasi DANA untuk kemudahan transfer.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Gifts;
