import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Database, Zap } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIconMap: Record<string, React.ElementType> = {
  Monitor, Server, Database, Zap,
};

function SkillBar({ skill, delay, inView }: {
  skill: { name: string; level: number };
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
        <span className="text-xs font-mono" style={{ color: '#6366F1' }}>{skill.level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #6366F1, transparent)' }}
      />
      <div
        className="absolute right-0 top-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }}
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
            <Zap size={12} />
            Technical Arsenal
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A curated set of technologies I use to build scalable, modern web applications.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => {
            const Icon = categoryIconMap[category.icon] || Zap;
            const isExpanded = activeCategory === category.name;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                className="glass-card rounded-2xl p-6 cursor-pointer group transition-all duration-500 hover:border-opacity-50"
                style={{
                  borderColor: isExpanded ? `${category.color}40` : undefined,
                  boxShadow: isExpanded ? `0 0 30px ${category.color}15` : undefined,
                }}
                onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
              >
                {/* Category header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${category.color}18`,
                        border: `1px solid ${category.color}35`,
                        boxShadow: `0 0 15px ${category.color}20`,
                      }}
                    >
                      <Icon size={22} style={{ color: category.color }} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white">{category.name}</h3>
                      <p className="text-slate-500 text-xs">{category.skills.length} technologies</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-500 group-hover:text-slate-300 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.div>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map(skill => (
                    <span
                      key={skill.name}
                      className="text-xs px-2.5 py-1 rounded-lg font-medium"
                      style={{
                        background: `${category.color}12`,
                        border: `1px solid ${category.color}25`,
                        color: category.color,
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Expandable skill bars */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-3 pt-4 border-t overflow-hidden"
                      style={{ borderColor: `${category.color}20` }}
                    >
                      {category.skills.map((skill, i) => (
                        <SkillBar key={skill.name} skill={skill} delay={i * 0.08} inView={true} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="text-slate-600 text-xs mt-2">
                  {isExpanded ? 'Click to collapse' : 'Click to see proficiency levels'}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tech logos row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass-card rounded-2xl p-6"
        >
          <p className="text-center text-slate-500 text-sm mb-6 font-mono">// Technology Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Laravel', 'React.js', 'PHP', 'MySQL', 'JavaScript', 'TypeScript',
              'REST API', 'Git', 'HTML5', 'CSS3', 'jQuery', 'AJAX',
              'Quickbase', 'Telnyx API', 'Geocoding API', 'Tailwind CSS',
            ].map(tech => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
