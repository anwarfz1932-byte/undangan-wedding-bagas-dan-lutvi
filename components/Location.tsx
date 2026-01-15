
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';
import { FLORAL_CORNER } from '../constants';

const Location: React.FC = () => {
  // Alamat spesifik sesuai lokasi: Blater Kidul, Jimbaran, Bandungan
  const address = "Blater Kidul RT 02/RW 07";
  const region = "Jimbaran, Bandungan, Kab. Semarang";
  const mapsLink = "https://maps.app.goo.gl/B7BjSzbXwyX2Jjoo7";
  
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0487315153243!2d110.3730810!3d-7.2238477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7080e0c8290f63%3A0xc0957b4458f4a16b!2sBlater%20Kidul%2C%20Jimbaran%2C%20Kec.%20Bandungan%2C%20Kabupaten%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1715505000000!5m2!1sid!2sid`;

  return (
    <div className="py-24 px-6 bg-[#3D2B1F] text-[#FDF5E6] relative overflow-hidden">
      {/* Background Batik Subtle */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/batik-fractal.png')]"></div>
      
      {/* Decorative Floral Ornaments */}
      <div className="absolute top-0 right-0 w-64 text-[#D4AF37]/15 -rotate-90 pointer-events-none">
        {FLORAL_CORNER}
      </div>
      <div className="absolute bottom-0 left-0 w-64 text-[#D4AF37]/15 rotate-90 pointer-events-none">
        {FLORAL_CORNER}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-title text-[#D4AF37] tracking-[0.5em] text-xs md:text-sm mb-8 font-black uppercase opacity-90">Panduan Lokasi</p>
          <h2 className="font-serif-jawa text-5xl md:text-7xl font-black text-[#D4AF37] mb-8 drop-shadow-md">Lokasi Acara</h2>
          <div className="w-28 h-[1px] bg-[#D4AF37] mx-auto mb-12 opacity-50"></div>
          
          <div className="space-y-4 mb-14">
            <h3 className="font-title text-3xl md:text-4xl font-black tracking-[0.1em] text-[#FDF5E6] uppercase">{address}</h3>
            <p className="font-body text-xl md:text-2xl opacity-80 italic tracking-wide font-medium">{region}</p>
          </div>
        </motion.div>

        {/* Peta Besar dengan Frame Elegan */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="relative rounded-[4rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] border-[6px] border-[#D4AF37]/30 h-[500px] md:h-[700px] mb-20 group"
        >
          <iframe 
            src={embedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Pernikahan Bagas & Lutvi"
            className="filter grayscale-[20%] contrast-[1.1] brightness-[0.85] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
          ></iframe>
          
          {/* Elegant Overlay Shadow Frame */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(61,43,31,0.8)] rounded-[3.8rem]"></div>
          
          {/* Subtle Decorative Border Overlay */}
          <div className="absolute inset-0 pointer-events-none border-[15px] border-[#3D2B1F]/40 rounded-[3.8rem]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <motion.a 
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#FDF5E6", color: "#3D2B1F" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-5 px-16 py-6 bg-[#D4AF37] text-[#3D2B1F] font-black rounded-full shadow-[0_20px_40px_rgba(212,175,55,0.4)] transition-all uppercase tracking-[0.3em] text-sm md:text-lg font-title"
          >
            <Navigation size={26} className="animate-pulse" />
            Buka Petunjuk Arah
          </motion.a>
          
          <p className="max-w-xl mx-auto text-base md:text-lg opacity-70 font-body italic leading-relaxed px-4 font-medium">
            "Klik tombol di atas untuk navigasi langsung ke titik lokasi acara menggunakan aplikasi Google Maps."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Location;
