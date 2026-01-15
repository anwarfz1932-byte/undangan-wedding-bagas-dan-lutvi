
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, MessageCircle, CheckCircle2 } from 'lucide-react';
import { GuestMessage } from '../types';

const Guestbook: React.FC = () => {
  const [messages, setMessages] = useState<GuestMessage[]>([
    { id: '1', name: 'Rama & Sinta', message: 'Selamat menempuh hidup baru untuk saudara Bagas & Lutvi. Semoga langgeng selamanya!', status: 'Hadir', timestamp: Date.now() - 1000000 },
    { id: '2', name: 'Yudhistira', message: 'Selamat menempuh hidup baru kawan! Mohon maaf belum bisa hadir.', status: 'Tidak Hadir', timestamp: Date.now() - 500000 },
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
    <div className="py-24 px-6 bg-[#FDF5E6]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif-jawa text-4xl md:text-5xl font-black text-[#3D2B1F] mb-4">Buku Tamu</h2>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-[#8B4513] italic font-body text-base md:text-lg opacity-80">Untaian doa dan ucapan tulus dari tamu undangan</p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-[#D4AF37]/10 h-fit"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-title font-bold text-[#5C4033] mb-2 uppercase tracking-widest opacity-60">Nama Lengkap</label>
                <input 
                  type="text" 
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/20 focus:ring-1 focus:ring-[#D4AF37] outline-none bg-[#FDF5E6]/10 font-body text-base"
                  placeholder="Nama Anda"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-title font-bold text-[#5C4033] mb-2 uppercase tracking-widest opacity-60">Kehadiran</label>
                <select 
                  value={form.status}
                  onChange={(e) => setForm({...form, status: e.target.value as any})}
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/20 focus:ring-1 focus:ring-[#D4AF37] outline-none bg-[#FDF5E6]/10 font-body text-base"
                >
                  <option value="Hadir">Hadir</option>
                  <option value="Tidak Hadir">Tidak Hadir</option>
                  <option value="Masih Ragu">Masih Ragu</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-title font-bold text-[#5C4033] mb-2 uppercase tracking-widest opacity-60">Ucapan & Doa</label>
                <textarea 
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/20 focus:ring-1 focus:ring-[#D4AF37] outline-none bg-[#FDF5E6]/10 font-body text-base"
                  placeholder="Tulis ucapan..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-[#3D2B1F] text-[#D4AF37] font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#5C4033] transition-all font-title text-xs tracking-widest uppercase"
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
              </button>
            </form>
          </motion.div>

          <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-[#D4AF37]/10"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-[#3D2B1F] font-title text-[11px] uppercase tracking-wider">{msg.name}</h4>
                    <span className={`text-[9px] px-2 py-1 rounded font-bold uppercase tracking-tighter ${
                      msg.status === 'Hadir' ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-500'
                    }`}>
                      {msg.status}
                    </span>
                  </div>
                  <p className="text-base text-[#5C4033] leading-relaxed italic font-body">"{msg.message}"</p>
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
