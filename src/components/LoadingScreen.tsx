import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 6 + 2;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="loading"
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style={{ background: '#0F172A' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Soft glow behind logo */}
        <div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #6366F1, transparent)' }}
        />

        <div className="relative flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4"
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center font-display font-black text-2xl text-white"
              style={{
                background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                boxShadow: '0 0 50px rgba(99,102,241,0.5)',
              }}
            >
              DD
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-display font-bold text-white">Darshan Dabhi</h1>
              <p className="text-slate-400 text-sm mt-1 font-mono">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-52 space-y-2"
          >
            <div className="w-full h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${Math.min(progress, 100)}%`,
                  background: 'linear-gradient(90deg, #6366F1, #8B5CF6, #06B6D4)',
                  boxShadow: '0 0 10px rgba(99,102,241,0.6)',
                  transition: 'width 0.15s ease',
                }}
              />
            </div>
            <p className="text-center text-slate-600 text-xs font-mono">
              {Math.round(Math.min(progress, 100))}%
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
