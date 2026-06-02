import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const WHATSAPP_NUMBER = '919909697844'; // +91 9909697844

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#6366F1',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: personalInfo.phone,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    color: '#25D366',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: '#',
    color: '#F59E0B',
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Darshan! 👋\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Subject:* ${form.subject}\n\n*Message:*\n${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' }}
      />
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div
        className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #6366F1, transparent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="neon-badge mx-auto mb-4 w-fit">
            <Mail size={12} />
            Get In Touch
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact details */}
            <div className="glass-card rounded-2xl p-6 space-y-5">
              <h3 className="font-display font-bold text-white text-lg">Contact Information</h3>
              {contactInfo.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      boxShadow: `0 0 15px ${item.color}20`,
                    }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-slate-500 text-xs mb-0.5">{item.label}</div>
                    <div className="text-white font-medium text-[13px] sm:text-sm group-hover:text-primary-400 transition-colors break-all sm:break-normal">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp quick link */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl p-5 group transition-all duration-300"
              style={{
                background: 'rgba(37,211,102,0.08)',
                border: '1px solid rgba(37,211,102,0.25)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.14)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(37,211,102,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.08)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(37,211,102,0.25)';
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)' }}
              >
                <MessageCircle size={20} style={{ color: '#25D366' }} />
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold text-sm">Chat on WhatsApp</div>
                <div className="text-slate-400 text-xs mt-0.5">Usually replies within an hour</div>
              </div>
              <div className="glow-dot" style={{ background: '#25D366', boxShadow: '0 0 8px #25D366' }} />
            </a>

            {/* Availability */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))',
                border: '1px solid rgba(99,102,241,0.25)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="glow-dot" />
                <span className="text-emerald-400 font-semibold text-sm">Available for Work</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Open to full-time positions, freelance projects, and exciting collaborations.
              </p>
            </div>
          </motion.div>

          {/* Right — Contact Form → WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 space-y-5"
            >
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-display font-bold text-white text-lg">Send a Message</h3>
                <span
                  className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-semibold"
                  style={{
                    background: 'rgba(37,211,102,0.12)',
                    border: '1px solid rgba(37,211,102,0.3)',
                    color: '#25D366',
                  }}
                >
                  <MessageCircle size={11} />
                  via WhatsApp
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block font-medium">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block font-medium">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 text-xs mb-1.5 block font-medium">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry, collaboration, etc."
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label className="text-slate-400 text-xs mb-1.5 block font-medium">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="form-input resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full justify-center flex items-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  boxShadow: '0 0 30px rgba(37,211,102,0.35)',
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(37,211,102,0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={18} />
                <span>Send via WhatsApp</span>
                <Send size={15} className="opacity-70" />
              </motion.button>

              <p className="text-center text-slate-600 text-xs">
                Clicking will open WhatsApp with your message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
