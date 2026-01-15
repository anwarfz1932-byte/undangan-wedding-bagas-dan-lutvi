
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, MessageCircle, CheckCircle2 } from 'lucide-react';
import { GuestMessage } from '../types';
import { FLORAL_CORNER } from '../constants';

const Guestbook: React.FC = () => {
  const [messages, setMessages] = useState<GuestMessage[]>([
    { id: '1', name: 'Annas & Ayya', message: 'Selamat menempuh hidup baru untuk saudara Bagas & Lutvi. Semoga langgeng selamanya!', status: 'Hadir', timestamp: Date.now() - 1000000 },
    { id: '2', name: 'Noval', message: 'Selamat menempuh hidup baru kawan! Mohon maaf belum bisa hadir.', status: 'Tidak Hadir', timestamp: Date.now() - 500000 },
  ]);

  const [form, setForm] = useState({ name: '', message: '', status: 'Hadir' as 'Hadir' | 'Tidak Hadir' | 'Masih Ragu' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newMessage: GuestMessage = {
        id: Math.random().toString(36).substr(2, 9),
        name: form.name,
        message: form.message,
        status: form.status,
        timestamp: Date.now(),
      };
      setMessages([newMessage, ...messages]);
      setForm({ name: '', message: '', status: 'Hadir' });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="py-24 px-6 bg-[#FDF5E6] relative overflow-hidden">
      {/* Decorative Floral */}
      <div className="absolute top-0 left-0 w-64 text-[#D4AF37]/20 pointer-events-none">
        {FLORAL_CORNER}
      </div>
      <div className="absolute bottom-0 right-0 w-64 text-[#D4AF37]/20 rotate-180 pointer-events-none">
        {FLORAL_CORNER}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif-jawa text-5xl md:text-6xl font-black text-[#3D2B1F] mb-6">Buku Tamu</h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-8 opacity-60"></div>
          <p className="text-[#8B4513] italic font-body text-xl md:text-2xl opacity-90 font-medium">Untaian doa dan ucapan tulus dari tamu undangan</p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-[#D4AF37]/20 h-fit"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-title font-black text-[#5C4033] mb-3 uppercase tracking-[0.2em] opacity-80">Nama Lengkap</label>
                <input 
                  type="text" 
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none bg-[#FDF5E6]/10 font-body text-lg font-medium transition-all"
                  placeholder="Nama Anda"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-title font-black text-[#5C4033] mb-3 uppercase tracking-[0.2em] opacity-80">Konfirmasi Kehadiran</label>
                <select 
                  value={form.status}
                  onChange={(e) => setForm({...form, status: e.target.value as any})}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none bg-[#FDF5E6]/10 font-body text-lg font-bold transition-all appearance-none"
                >
                  <option value="Hadir">Saya Akan Hadir</option>
                  <option value="Tidak Hadir">Maaf, Tidak Bisa Hadir</option>
                  <option value="Masih Ragu">Masih Ragu</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-title font-black text-[#5C4033] mb-3 uppercase tracking-[0.2em] opacity-80">Ucapan & Doa</label>
                <textarea 
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none bg-[#FDF5E6]/10 font-body text-lg font-medium transition-all"
                  placeholder="Tulis ucapan tulus Anda di sini..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 bg-[#3D2B1F] text-[#D4AF37] font-black rounded-2xl flex items-center justify-center gap-4 hover:bg-[#5C4033] transition-all font-title text-sm tracking-[0.3em] uppercase shadow-lg active:scale-[0.98]"
              >
                {isSubmitting ? 'Sedang Mengirim...' : 'Kirim Ucapan'}
              </button>
            </form>
          </motion.div>

          <div className="max-h-[650px] overflow-y-auto pr-3 custom-scrollbar space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#D4AF37]/10 relative group hover:border-[#D4AF37]/30 transition-all"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-black text-[#3D2B1F] font-title text-[12px] uppercase tracking-widest">{msg.name}</h4>
                    <span className={`text-[10px] px-3 py-1.5 rounded-lg font-black uppercase tracking-tighter ${
                      msg.status === 'Hadir' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {msg.status}
                    </span>
                  </div>
                  <p className="text-lg md:text-xl text-[#5C4033] leading-relaxed italic font-body font-medium">"{msg.message}"</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guestbook;
