
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
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-[#8B4513] italic font-body text-lg">Kiriman doa dan ucapan dari Bapak/Ibu/Saudara sekalian</p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-[#D4AF37]/20 h-fit"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#5C4033] mb-2 flex items-center gap-2 uppercase tracking-wider">
                  <User size={16} className="text-[#D4AF37]" /> Nama Lengkap
                </label>
                <input 
                  type="text" 
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/30 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all bg-[#FDF5E6]/30 font-body"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#5C4033] mb-2 uppercase tracking-wider">Konfirmasi Kehadiran</label>
                <select 
                  value={form.status}
                  onChange={(e) => setForm({...form, status: e.target.value as any})}
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/30 focus:ring-2 focus:ring-[#D4AF37] outline-none bg-[#FDF5E6]/30 font-body"
                >
                  <option value="Hadir">Hadir</option>
                  <option value="Tidak Hadir">Tidak Hadir</option>
                  <option value="Masih Ragu">Masih Ragu</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#5C4033] mb-2 flex items-center gap-2 uppercase tracking-wider">
                  <MessageCircle size={16} className="text-[#D4AF37]" /> Ucapan & Doa
                </label>
                <textarea 
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/30 focus:ring-2 focus:ring-[#D4AF37] outline-none bg-[#FDF5E6]/30 font-body"
                  placeholder="Tuliskan ucapan Anda..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 bg-[#3D2B1F] text-[#D4AF37] font-black rounded-xl flex items-center justify-center gap-3 transition-all hover:bg-[#5C4033] shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''} uppercase tracking-widest text-sm`}
              >
                {isSubmitting ? 'Mengirim...' : (
                  <>
                    <Send size={18} /> Kirim Ucapan
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Messages List */}
          <div className="max-h-[600px] overflow-y-auto pr-4 custom-scrollbar space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#D4AF37]"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-[#3D2B1F] font-title text-sm">{msg.name}</h4>
                    <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-tighter flex items-center gap-1 ${
                      msg.status === 'Hadir' ? 'bg-green-100 text-green-700' : 
                      msg.status === 'Tidak Hadir' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      <CheckCircle2 size={10} /> {msg.status}
                    </span>
                  </div>
                  <p className="text-base text-[#5C4033] leading-relaxed italic font-body">"{msg.message}"</p>
                  <p className="text-[10px] text-gray-400 mt-4 text-right uppercase tracking-widest">{new Date(msg.timestamp).toLocaleDateString()}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Guestbook;
