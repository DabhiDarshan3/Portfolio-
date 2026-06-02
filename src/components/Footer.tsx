import { motion } from 'framer-motion';
import { Heart, Code2, GitBranch, Link2, Mail, ArrowUp } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold font-display text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
              >
                DD
              </div>
              <div>
                <div className="text-white font-display font-bold">Darshan Dabhi</div>
                <div className="text-slate-500 text-xs font-mono flex items-center gap-1">
                  <Code2 size={10} />
                  Full Stack Developer
                </div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Building scalable web applications and modern digital experiences with passion and precision.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: GitBranch, href: socialLinks.github },
                { icon: Link2, href: socialLinks.linkedin },
                { icon: Mail, href: `mailto:${personalInfo.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.4)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'React', 'PHP', 'MySQL', 'REST API', 'Git', 'Quickbase'].map(tech => (
                <span key={tech} className="tech-tag text-xs">{tech}</span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="glow-dot" />
                <span className="text-emerald-400 text-xs">Open to opportunities</span>
              </div>
              <p className="text-slate-600 text-xs mt-1">{personalInfo.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-slate-600 text-sm flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
            <span>Crafted with</span>
            <Heart size={14} className="text-pink-500" />
            <span>by</span>
            <span className="gradient-text font-semibold">Darshan Dabhi</span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span>© {new Date().getFullYear()}</span>
          </p>

          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-xs transition-all duration-300"
          >
            Back to top
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)' }}
            >
              <ArrowUp size={14} className="text-primary-400" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
