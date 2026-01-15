
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATE } from '../constants';
import { CountdownTime } from '../types';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = WEDDING_DATE.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <div className="py-24 px-6 bg-[#FDF5E6] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/batik-fractal.png')]"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <p className="font-title text-base tracking-[0.5em] text-[#8B4513] mb-4 font-bold uppercase">Menghitung Hari</p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
        >
          {items.map((item) => (
            <motion.div 
              key={item.label}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-[#D4AF37] opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-opacity"></div>
              <div className="relative flex flex-col items-center bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border-2 border-[#D4AF37]/20 transition-transform group-hover:-translate-y-2">
                <span className="text-5xl md:text-7xl font-black text-[#3D2B1F] font-serif-jawa leading-none mb-3">
                  {item.value.toString().padStart(2, '0')}
                </span>
                <span className="text-sm md:text-base text-[#8B4513] font-black uppercase tracking-[0.2em]">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="mt-20 italic text-[#5C4033] text-xl opacity-80"
        >
          "Mugi-mugi rancak sedaya titahing Gusti."
        </motion.div>
      </div>
    </div>
  );
};

export default Countdown;
