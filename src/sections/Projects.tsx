import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Filter, GitBranch,
  ShoppingCart, Building2, Store, Hotel, Users, MapPin,
  Phone, Layers,
} from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart, Building2, Store, Hotel, Users, MapPin,
  GitBranch, Phone, Layers,
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const Icon = iconMap[project.icon] || Layers;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative rounded-2xl overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? project.color + '40' : 'rgba(255,255,255,0.08)'}`,
        backdropFilter: 'blur(20px)',
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.3), 0 0 40px ${project.color}20` : '0 8px 32px rgba(0,0,0,0.2)',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Gradient top bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />



      {/* Glow background */}
      <motion.div
        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-700"
        style={{ background: project.color }}
      />

      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: `${project.color}18`,
              border: `1px solid ${project.color}30`,
              boxShadow: `0 0 20px ${project.color}20`,
            }}
          >
            <Icon size={22} style={{ color: project.color }} />
          </div>
          <div className="min-w-0">
            <h3 className="font-display font-bold text-white text-lg leading-tight">{project.title}</h3>
            <p className="text-slate-500 text-sm mt-0.5">{project.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-2">
          {project.highlights.map(h => (
            <div key={h} className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.color }} />
              {h}
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>


      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="neon-badge mx-auto mb-4 w-fit">
            <Filter size={12} />
            Portfolio Showcase
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real-world applications solving real business problems — from e-commerce to AI automation.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {projectCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={
                activeFilter === cat
                  ? {
                      background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                      color: 'white',
                      boxShadow: '0 0 20px rgba(99,102,241,0.4)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#94a3b8',
                    }
              }
            >
              {cat}
              <span
                className="ml-2 text-xs px-1.5 py-0.5 rounded"
                style={{
                  background: activeFilter === cat ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)',
                }}
              >
                {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
