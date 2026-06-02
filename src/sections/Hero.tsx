import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Download, ArrowRight, Mail,
  Code2, Database, Server, Globe, Cpu, Layers,
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

const techIcons = [
  { icon: Code2, label: 'React', color: '#06B6D4', size: 28, x: 85, y: 15, delay: 0 },
  { icon: Server, label: 'Laravel', color: '#EF4444', size: 24, x: 90, y: 45, delay: 0.5 },
  { icon: Database, label: 'MySQL', color: '#F59E0B', size: 22, x: 80, y: 72, delay: 1 },
  { icon: Globe, label: 'PHP', color: '#8B5CF6', size: 26, x: 10, y: 20, delay: 0.3 },
  { icon: Cpu, label: 'API', color: '#10B981', size: 22, x: 5, y: 55, delay: 0.8 },
  { icon: Layers, label: 'Full Stack', color: '#6366F1', size: 30, x: 15, y: 78, delay: 1.2 },
];

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [count, setCount] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const num = parseInt(target.replace(/\D/g, ''));
          if (isNaN(num)) { setCount(target); return; }
          let start = 0;
          const step = Math.ceil(num / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= num) { setCount(target); clearInterval(timer); }
            else setCount(start + suffix);
          }, 50);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <div ref={ref}>{count}</div>;
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-mesh" />

      {/* Animated orbs */}
      <div className="hero-orb-1" style={{ top: '-10%', left: '-5%' }} />
      <div className="hero-orb-2" style={{ bottom: '-5%', right: '-5%' }} />
      <div className="hero-orb-3" style={{ top: '50%', left: '60%' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        style={{ y }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="neon-badge">
                <span className="glow-dot" />
                Available for Opportunities
              </div>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-slate-400 font-mono text-base"
              >
                Hi there, I'm 👋
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-none"
              >
                <span className="text-white">Darshan</span>
                <br />
                <span className="gradient-text text-shadow-glow">Dabhi</span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap gap-2 pt-2"
              >
                {['Full Stack Developer', 'Laravel Specialist', 'React Developer'].map((role, i) => (
                  <span
                    key={role}
                    className="text-xs font-mono px-3 py-1 rounded-full"
                    style={{
                      background: `rgba(${i === 0 ? '99,102,241' : i === 1 ? '239,68,68' : '6,182,212'},0.12)`,
                      border: `1px solid rgba(${i === 0 ? '99,102,241' : i === 1 ? '239,68,68' : '6,182,212'},0.3)`,
                      color: i === 0 ? '#a5b4fc' : i === 1 ? '#fca5a5' : '#67e8f9',
                    }}
                  >
                    {role}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-slate-400 text-lg leading-relaxed max-w-lg"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://drive.google.com/file/d/1nhx1WMqiD0hPCZTqSkqQ3prtbi2EL2Z7/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
              <button onClick={scrollToProjects} className="btn-secondary">
                <ArrowRight size={18} />
                <span>View Projects</span>
              </button>
              <a href="#contact" className="btn-secondary"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="grid grid-cols-2 gap-4 pt-2"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-5 text-center group hover:border-primary-400/30 transition-all duration-300"
                >
                  <div className="font-display font-black text-3xl gradient-text mb-1">
                    <AnimatedCounter target={stat.value} />
                  </div>
                  <div className="text-slate-400 text-sm leading-snug">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative flex items-center justify-center mt-4 mb-10 lg:-mt-16 w-full h-[320px] sm:h-[400px] lg:h-[520px]"
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-80 lg:h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Dashed ring */}
            <div
              className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-72 lg:h-72 rounded-full border"
              style={{
                borderColor: 'rgba(99,102,241,0.2)',
                borderStyle: 'dashed',
                animation: 'spin 18s linear infinite',
              }}
            />
            <div
              className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-96 lg:h-96 rounded-full border hidden sm:block"
              style={{
                borderColor: 'rgba(139,92,246,0.1)',
                borderStyle: 'dashed',
                animation: 'spin 28s linear infinite reverse',
              }}
            />

            {/* Photo frame */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full lg:rounded-3xl overflow-hidden"
                style={{
                  border: '2px solid rgba(99,102,241,0.5)',
                  boxShadow: '0 0 60px rgba(99,102,241,0.4), 0 0 120px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                <img
                  src="/dd.png"
                  alt="Darshan Dabhi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name tag below photo */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-4 text-center absolute -bottom-16 sm:-bottom-12 lg:-bottom-10"
                style={{
                  background: 'rgba(15,23,42,0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  borderRadius: '16px',
                  padding: '10px 24px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
              >
                <div className="font-display font-bold text-white text-sm sm:text-base">Darshan Dabhi</div>
                <div className="text-slate-400 text-[10px] sm:text-xs font-mono mt-1 flex items-center justify-center gap-1.5">
                  <div className="glow-dot" style={{ width: '6px', height: '6px', background: '#6366F1', boxShadow: '0 0 10px #6366F1' }} />
                  Full Stack Developer
                </div>
              </motion.div>
            </div>

            {/* Floating tech icons */}
            {techIcons.map(({ icon: Icon, label, color, size, x, y: yPos, delay }) => (
              <motion.div
                key={label}
                className="absolute hidden sm:block"
                style={{ left: `${x}%`, top: `${yPos}%`, transform: 'translate(-50%, -50%)' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.5, duration: 0.5, type: 'spring' }}
              >
                <div
                  className="floating-icon w-10 h-10 lg:w-12 lg:h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `rgba(${color === '#06B6D4' ? '6,182,212' : color === '#EF4444' ? '239,68,68' : color === '#F59E0B' ? '245,158,11' : color === '#8B5CF6' ? '139,92,246' : color === '#10B981' ? '16,185,129' : '99,102,241'},0.15)`,
                    border: `1px solid ${color}30`,
                    boxShadow: `0 0 20px ${color}30`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Icon size={size - 4} color={color} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>


      </motion.div>
    </section>
  );
}
