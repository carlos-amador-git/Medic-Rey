'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Share2 } from 'lucide-react';
import Image from 'next/image';
import TestimonialCarousel from './TestimonialCarousel';

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleShare = async () => {
    const shareData = {
      title: 'RedMedic - Asesoría en Seguros de Gastos Médicos Mayores',
      text: 'Te ayudo a sacar el mejor provecho de tu seguro sin deducible.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Enlace copiado al portapapeles');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-brand-primary/10 dark:bg-brand-primary/5 rounded-full blur-[140px] float-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 dark:bg-brand-secondary/5 rounded-full blur-[120px] float" />
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-brand-accent/5 dark:bg-brand-accent/10 rounded-full blur-[80px] rotate-slow" />
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.01] pointer-events-none">
        <svg className="w-full h-full text-slate-900 dark:text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col space-y-8"
          >
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider border border-brand-primary/20 dark:border-brand-primary/40 shadow-sm w-fit"
            >
              <ShieldCheck size={14} />
              Tu derecho a la mejor salud
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tight font-display">
              ¿Tienes{' '}
              <span className="text-gradient">Seguro de Gastos Médicos Mayores</span>?
            </h1>

            <motion.p 
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium"
            >
              Soy tu asesor de confianza. Te ayudo a sacar el mejor provecho de tu seguro{' '}
              <span className="text-slate-900 dark:text-white font-bold underline decoration-brand-primary/40 underline-offset-4">sin deducible</span>.
            </motion.p>

            <motion.div 
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden bg-brand-primary text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:brightness-110 transition-all flex items-center justify-center gap-2 group border border-white/10 shimmer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ¡Usar mi Seguro!
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl text-base font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200/50 dark:shadow-none"
              >
                Ver Beneficios
              </motion.button>

              <motion.button
                onClick={handleShare}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-4 py-4 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center shadow-md"
                title="Compartir página"
              >
                <Share2 size={18} />
              </motion.button>
            </motion.div>

            <motion.div 
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              {[
                { label: 'Sin Deducible', color: 'text-brand-secondary', bg: 'bg-brand-secondary/10' },
                { label: 'Cirugías Gratuitas', color: 'text-brand-accent', bg: 'bg-brand-accent/10' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                  <div className={`w-5 h-5 rounded-full ${item.bg} dark:bg-brand-accent/20 ${item.color} flex items-center justify-center`}>
                    <CheckCircle2 size={12} />
                  </div>
                  {item.label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-accent/20 border-8 border-white dark:border-slate-800 group"
            >
              <Image
                src="/images/kikito.jpeg"
                alt="Asesor de confianza - RedMedic"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 glass-card p-5 rounded-xl max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Asesoría de Confianza</div>
                  <div className="text-xs text-brand-primary font-medium">Atención Personalizada</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
                &quot;Tu salud no tiene precio, y nuestra asesoría tampoco.&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* TestimonialCarousel ocultado */}
      </div>
    </section>
  );
}
