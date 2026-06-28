'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import Carousel from './Carousel';

export default function Stats() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="absolute inset-0 morph-bg opacity-60 dark:opacity-30" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 dark:bg-brand-primary/5 rounded-full blur-3xl rotate-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/10 dark:bg-brand-secondary/5 rounded-full blur-3xl rotate-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-primary/20 dark:border-brand-primary/40 mb-6">
            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
            Infraestructura Premium
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight font-display">
            Nuestra <span className="text-gradient">Propuesta</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Infraestructura de primer nivel diseñada para tu tranquilidad y recuperación.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div style={{ y: y1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl shadow-brand-primary/10 dark:shadow-none"
            >
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
                alt="Instalaciones Modernas"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-black text-white mb-1">Instalaciones Modernas</h3>
                <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Tecnología de vanguardia para tu atención.</p>
              </div>
            </motion.div>

            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: y2 }}
              className="group relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl shadow-brand-secondary/10 dark:shadow-none"
            >
              <Image
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80"
                alt="Tecnología de Punta"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-black text-white mb-1">Tecnología de Punta</h3>
                <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Equipos médicos de última generación.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16"
        >
          <Carousel />
        </motion.div>
      </div>
    </section>
  );
}
