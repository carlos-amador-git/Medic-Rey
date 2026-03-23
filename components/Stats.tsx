'use client';

import { motion, useSpring, useTransform, useInView } from 'motion/react';
import React, { useEffect, useRef } from 'react';
import { Users, Stethoscope, HeartPulse, Building2 } from 'lucide-react';
import Image from 'next/image';
import Carousel from './Carousel';

const stats = [
  { label: 'Consultas Médicas', value: 7234, icon: Stethoscope, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
  { label: 'Cirugías Exitosas', value: 3276, icon: HeartPulse, color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/30' },
  { label: 'Médicos en Red', value: 87, icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
  { label: 'Socios en Red', value: 30, icon: Building2, color: 'text-amber-600', bg: 'bg-amber-100 dark:bg-amber-900/30' },
];

function CountUp({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function Stats() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight font-display">
            Nuestra <span className="text-blue-600">Propuesta</span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Infraestructura de primer nivel diseñada para tu tranquilidad y recuperación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800"
          >
            <Image
              src="https://picsum.photos/seed/med-wide-1/1200/500"
              alt="Instalaciones Modernas"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800"
          >
            <Image
              src="https://picsum.photos/seed/med-wide-2/1200/500"
              alt="Tecnología de Punta"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
          </motion.div>
        </div>

        <Carousel />

        <div className="text-center mb-20 mt-32">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-display">Nuestra <span className="text-blue-600">Actualidad</span></h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Resultados que respaldan nuestra experiencia y compromiso con tu salud.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="flex flex-col items-center text-center p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-50 dark:border-slate-800 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.1)] transition-all duration-500 group"
            >
              <div className={`w-20 h-20 rounded-[1.75rem] ${stat.bg} ${stat.color} flex items-center justify-center mb-8 shadow-lg shadow-current/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700`}>
                <stat.icon size={40} />
              </div>
              <div className="text-5xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter font-display">
                <CountUp value={stat.value} />
              </div>
              <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
