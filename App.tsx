
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cover from './components/Cover';
import Profile from './components/Profile';
import EventDetails from './components/EventDetails';
import Countdown from './components/Countdown';
import Location from './components/Location';
import Guestbook from './components/Guestbook';
import Prayers from './components/Prayers';
import Gifts from './components/Gifts';
import Footer from './components/Footer';
import { PETAL_SVG } from './constants';

const FloatingPetals = () => {
  const petals = Array.from({ length: 15 });
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            top: -20, 
            left: `${Math.random() * 100}%`, 
            opacity: 0,
            rotate: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            top: '110%', 
            left: `${Math.random() * 100}%`,
            opacity: [0, 0.4, 0.4, 0],
            rotate: 360,
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            delay: Math.random() * 20,
            ease: "linear"
          }}
          className="absolute text-[#D4AF37]/30 w-4 h-4"
        >
          {PETAL_SVG}
        </motion.div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative overflow-x-hidden min-h-screen">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div key="cover" exit={{ opacity: 0 }}>
            <Cover onOpen={handleOpenInvitation} />
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-[#FDF5E6] text-[#5C4033]"
          >
            <FloatingPetals />
            
            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/batik-fractal.png')]"></div>
            </div>

            <section id="profil" className="relative z-10 pt-20">
              <Profile />
            </section>
            
            <section id="detail" className="relative z-10">
              <EventDetails />
            </section>

            <section id="countdown" className="relative z-10">
              <Countdown />
            </section>

            <section id="location" className="relative z-10">
              <Location />
            </section>

            <section id="guestbook" className="relative z-10">
              <Guestbook />
            </section>

            <section id="prayers" className="relative z-10">
              <Prayers />
            </section>

            {/* Gifts dipindahkan ke sebelum Footer sesuai permintaan "pojok bawah sebelum bagikan undangan" */}
            <section id="gifts" className="relative z-10">
              <Gifts />
            </section>

            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
