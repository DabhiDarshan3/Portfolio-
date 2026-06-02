import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Code2, Heart, Rocket, Star } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const timeline = [
  {
    year: 'May 2025 – Present',
    title: 'Full Stack Developer @ TechXperts',
    desc: 'Joined TechXperts to build enterprise-grade web applications with Laravel and React after completing my degree.',
    icon: Rocket,
    color: '#6366F1',
    current: true,
  },
  {
    year: '2022 – 2025',
    title: 'College — BCA / Degree',
    desc: 'Pursued my degree while mastering web development — PHP, Laravel, React, MySQL, and full stack architecture.',
    icon: Star,
    color: '#8B5CF6',
  },
  {
    year: '2022',
    title: 'Started Web Development Journey',
    desc: 'Began learning HTML, CSS, JavaScript and PHP, building small projects and discovering a passion for full stack development.',
    icon: Code2,
    color: '#06B6D4',
  },
];

const philosophy = [
  {
    icon: '⚡',
    title: 'Performance First',
    desc: 'Every line of code is written with performance in mind. Fast apps are good apps.',
  },
  {
    icon: '🎯',
    title: 'Clean Architecture',
    desc: 'Maintainable, readable, and scalable code that teams love to work with.',
  },
  {
    icon: '🔄',
    title: 'Continuous Learning',
    desc: 'Technology evolves fast — I stay ahead by learning and adapting constantly.',
  },
];

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-16"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{
          background: `${item.color}20`,
          border: `1px solid ${item.color}40`,
          boxShadow: `0 0 20px ${item.color}30`,
        }}
      >
        <Icon size={18} style={{ color: item.color }} />
      </div>

      {/* Card */}
      <div className="glass-card-hover rounded-2xl p-4 sm:p-5">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 flex-wrap mb-1.5">
            <div className="font-mono text-xs" style={{ color: item.color }}>
              {item.year}
            </div>
            {item.current && (
              <span
                className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold flex items-center gap-1.5"
                style={{
                  background: 'rgba(16,185,129,0.15)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  color: '#34D399',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Current
              </span>
            )}
          </div>
          
          <h3 className="font-display font-semibold text-white text-base sm:text-lg leading-snug mb-1.5">
            {item.title}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="neon-badge mx-auto mb-4 w-fit">
            <Code2 size={12} />
            About Me
          </div>
          <h2 className="section-title">
            Crafting <span className="gradient-text">Digital Experiences</span>
          </h2>
          <p className="section-subtitle mx-auto">{personalInfo.aboutText}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info + Philosophy */}
          <div className="space-y-6">
            {/* Info card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 space-y-4"
            >
              {[
                { icon: MapPin, label: 'Location', value: personalInfo.location, color: '#06B6D4' },
                { icon: Calendar, label: 'Available Since', value: personalInfo.joinedDate, color: '#8B5CF6' },
                { icon: Code2, label: 'Specialization', value: 'Laravel + React Full Stack', color: '#6366F1' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}20`, border: `1px solid ${item.color}30` }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Philosophy */}
            <div className="space-y-3">
              <h3 className="text-slate-300 font-display font-semibold text-lg mb-4">Development Philosophy</h3>
              {philosophy.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card-hover rounded-xl p-4 flex items-start gap-3"
                >
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm">{p.title}</div>
                    <div className="text-slate-400 text-sm mt-0.5">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Timeline */}
          <div>
            <h3 className="text-slate-300 font-display font-semibold text-lg mb-8">Career Timeline</h3>
            <div className="relative space-y-5">
              {/* Vertical line */}
              <div className="timeline-line" style={{ left: '20px' }} />

              {timeline.map((item, i) => (
                <TimelineItem key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
