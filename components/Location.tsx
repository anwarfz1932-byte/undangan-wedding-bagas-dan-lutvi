
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';

const Location: React.FC = () => {
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0!2d110.37!3d-7.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7080e7d58a5f67%3A0x4027a70e352f7a0!2sJimbaran%2C%20Bandungan%2C%20Semarang%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1715421234567!5m2!1sid!2sid";
  const mapsLink = "https://www.google.com/maps/search/Blater+Kidul+RT+02+RW+07+Jimbaran+Bandungan+Kab+Semarang";

  return (
    <div className="py-24 px-6 bg-[#3D2B1F] text-[#FDF5E6]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-serif-jawa text-5xl md:text-7xl font-black text-[#D4AF37] mb-6 drop-shadow-md">Lokasi Acara</h2>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-8 opacity-40"></div>
          <p className="font-title italic tracking-[0.2em] opacity-90 mb-2 text-xl md:text-2xl uppercase font-bold">Blater Kidul RT 02/RW 07</p>
          <p className="font-serif-jawa text-lg opacity-70 italic tracking-wider">Jimbaran, Bandungan, Kabupaten Semarang, Jawa Tengah</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotateX: 45 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-[#D4AF37]/30 h-[500px] mb-16 transform-gpu"
        >
          <iframe 
            src={embedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Pernikahan"
            className="grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
          ></iframe>
        </motion.div>

        <motion.a 
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, backgroundColor: "#FDF5E6", color: "#3D2B1F" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.5 }}
          className="inline-flex items-center gap-4 px-12 py-5 bg-[#D4AF37] text-[#3D2B1F] font-black rounded-full shadow-[0_15px_30px_rgba(212,175,55,0.4)] transition-all uppercase tracking-[0.3em] text-sm md:text-base font-title"
        >
          <Navigation size={22} className="animate-pulse" />
          Petunjuk Lokasi
        </motion.a>
      </div>
    </div>
  );
};

export default Location;
