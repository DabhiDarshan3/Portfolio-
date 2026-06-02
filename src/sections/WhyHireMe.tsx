import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Layers, Server, Monitor, Database, Link, Brain, TrendingUp, Sparkles,
  Star,
} from 'lucide-react';
import { whyHireMe } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Layers, Server, Monitor, Database, Link, Brain, TrendingUp, Sparkles,
};

export default function WhyHireMe() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="why-hire" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-5"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="neon-badge mx-auto mb-4 w-fit">
            <Star size={12} />
            Value Proposition
          </div>
          <h2 className="section-title">
            Why Hire <span className="gradient-text">Me?</span>
          </h2>
          <p className="section-subtitle mx-auto">
            I bring a unique combination of technical depth, business understanding, and passion for quality.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyHireMe.map((item, i) => {
            const Icon = iconMap[item.icon] || Star;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass-card-hover rounded-2xl p-6 text-center group"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    boxShadow: `0 0 20px ${item.color}20`,
                  }}
                >
                  <Icon size={24} style={{ color: item.color }} />
                </div>

                <h3 className="font-display font-bold text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>

                {/* Accent line */}
                <div
                  className="w-8 h-0.5 rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ background: item.color }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 mb-6 text-lg">
            Ready to build something <span className="gradient-text font-semibold">extraordinary</span> together?
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary inline-flex mx-auto"
          >
            <span>Let's Talk</span>
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
