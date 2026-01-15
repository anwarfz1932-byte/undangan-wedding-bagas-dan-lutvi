
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';

const Location: React.FC = () => {
  // Alamat spesifik sesuai lokasi di link: Blater Kidul, Jimbaran, Bandungan
  const address = "Blater Kidul RT 02/RW 07";
  const region = "Jimbaran, Bandungan, Kab. Semarang";
  const mapsLink = "https://maps.app.goo.gl/B7BjSzbXwyX2Jjoo7";
  
  // Embed URL yang disesuaikan secara presisi untuk wilayah Blater Kidul, Jimbaran
  // Menggunakan koordinat yang lebih spesifik untuk titik pemukiman tersebut
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0537482613217!2d110.3752538!3d-7.2232535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7080e0c8290f63%3A0xc0957b4458f4a16b!2sBlater%20Kidul%2C%20Jimbaran%2C%20Kec.%20Bandungan%2C%20Kabupaten%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1715500000000!5m2!1sid!2sid`;

  return (
    <div className="py-24 px-6 bg-[#3D2B1F] text-[#FDF5E6]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-title text-[#D4AF37] tracking-[0.4em] text-[10px] md:text-xs mb-6 font-bold uppercase opacity-80">Panduan Lokasi</p>
          <h2 className="font-serif-jawa text-5xl md:text-7xl font-black text-[#D4AF37] mb-6 drop-shadow-md">Lokasi Acara</h2>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-10 opacity-40"></div>
          
          <div className="space-y-2 mb-12">
            <h3 className="font-title text-2xl md:text-3xl font-bold tracking-widest text-[#FDF5E6] uppercase">{address}</h3>
            <p className="font-body text-lg md:text-xl opacity-70 italic tracking-wide">{region}</p>
          </div>
        </motion.div>

        {/* Peta Besar dengan Frame Elegan */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-4 border-[#D4AF37]/30 h-[500px] md:h-[700px] mb-16"
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
            className="filter contrast-[1.05] brightness-[0.95]"
          ></iframe>
          
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-8 border-l-8 border-[#3D2B1F] rounded-tl-[2.8rem] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-t-8 border-r-8 border-[#3D2B1F] rounded-tr-[2.8rem] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-8 border-l-8 border-[#3D2B1F] rounded-bl-[2.8rem] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-[#3D2B1F] rounded-br-[2.8rem] pointer-events-none"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <motion.a 
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#FDF5E6", color: "#3D2B1F" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-12 py-5 bg-[#D4AF37] text-[#3D2B1F] font-black rounded-full shadow-[0_15px_30px_rgba(212,175,55,0.4)] transition-all uppercase tracking-[0.3em] text-sm md:text-base font-title"
          >
            <Navigation size={22} className="animate-pulse" />
            Navigasi Ke Lokasi
          </motion.a>
          
          <p className="max-w-md mx-auto text-sm opacity-60 font-body italic leading-relaxed px-4">
            "Klik tombol di atas untuk membuka petunjuk arah Google Maps langsung ke rumah mempelai di Blater Kidul."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Location;
