import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-5"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="neon-badge mx-auto mb-4 w-fit">
            <Briefcase size={12} />
            Work History
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Building enterprise solutions and driving technical excellence.
          </p>
        </motion.div>

        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >
            {/* Main experience card */}
            <div
              className="relative rounded-3xl p-8 mb-8 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(99,102,241,0.2)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 60px rgba(99,102,241,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Glow accent top-left */}
              <div
                className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: exp.color }}
              />

              {/* Company header */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
                <div className="flex items-center gap-5">
                  {/* Company logo placeholder */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-xl relative shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${exp.color}30, ${exp.color}10)`,
                      border: `1px solid ${exp.color}40`,
                      boxShadow: `0 0 30px ${exp.color}30`,
                    }}
                  >
                    <span style={{ color: exp.color }}>TX</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white">{exp.company}</h3>
                    <p className="text-slate-400 text-sm mt-0.5">{exp.type}</p>
                  </div>
                </div>

                {/* Status badge */}
                <div>
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                    style={{
                      background: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.3)',
                      color: '#34D399',
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Currently Working
                  </span>
                </div>
              </div>

              {/* Position details */}
              <div className="relative z-10 grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Briefcase, label: 'Role', value: exp.role, color: exp.color },
                  { icon: MapPin, label: 'Location', value: exp.location, color: '#06B6D4' },
                  { icon: Calendar, label: 'Duration', value: exp.duration, color: '#8B5CF6' },
                ].map(item => (
                  <div
                    key={item.label}
                    className="rounded-xl p-4"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon size={14} style={{ color: item.color }} />
                      <span className="text-slate-500 text-xs">{item.label}</span>
                    </div>
                    <div className="text-white font-semibold text-sm">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Responsibilities */}
              <div className="relative z-10">
                <h4 className="text-slate-300 font-display font-semibold mb-4 flex items-center gap-2">
                  <ArrowRight size={16} style={{ color: exp.color }} />
                  Key Responsibilities
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {exp.responsibilities.map(resp => (
                    <div key={resp} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: exp.color }} />
                      <span className="text-slate-300 text-sm leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Career progression note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
            style={{
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.2)',
            }}
          >
            <div className="glow-dot" />
            <span className="text-slate-400 text-sm">
              Growing rapidly at TechXperts — passionate about building impactful products
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
