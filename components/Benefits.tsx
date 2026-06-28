'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Clock, DollarSign, Heart, ShieldCheck, Zap, Star } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  {
    title: 'Tiempo',
    description: 'Agilizamos tus trámites y consultas para que te enfoques en tu recuperación.',
    icon: Clock,
    color: 'from-brand-primary to-brand-primary-container',
    bg: 'bg-brand-primary/10',
  },
  {
    title: 'Dinero',
    description: 'Eliminamos deducibles para que tu salud no sea un gasto excesivo.',
    icon: DollarSign,
    color: 'from-brand-secondary to-brand-secondary-container',
    bg: 'bg-brand-secondary/10',
  },
  {
    title: 'Salud',
    description: 'Acceso a los mejores especialistas e instituciones médicas de México.',
    icon: Heart,
    color: 'from-brand-accent to-brand-accent-container',
    bg: 'bg-brand-accent/10',
  },
];

const extraBenefits = [
  'Asesoría Telefónica 24/7',
  'Cirugías sin costo adicional',
  'Red médica y hospitalaria premium',
  'Trámites directos con aseguradoras',
  'Seguimiento personalizado',
  'Experiencia memorable de recuperación',
];

export default function Benefits() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="beneficios" className="relative py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-brand-primary/10 dark:bg-brand-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-secondary/10 dark:bg-brand-secondary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-primary/20 dark:border-brand-primary/40 mb-6">
            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
            Beneficios Exclusivos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight font-display">
            Nuestros <span className="text-gradient">Beneficios</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Obtén los siguientes beneficios <span className="text-brand-primary font-bold">¡SIN COSTO!</span> al usar tu seguro con nosotros.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24 lg:mb-32">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-3xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-500">
                <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${benefit.color} text-white flex items-center justify-center mb-6 lg:mb-8 shadow-lg shadow-current/20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700`}>
                  <benefit.icon size={32} className="lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight font-display">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {benefit.description}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-accent via-brand-accent-container to-brand-primary shadow-2xl shadow-brand-accent/30"
        >
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-48 h-48 lg:w-72 lg:h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 p-8 sm:p-10 lg:p-16 items-center relative z-10">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-8 lg:mb-10 leading-[1.1] tracking-tight font-display">
                ¿Por qué elegir RedMedic?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                {extraBenefits.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={false}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-accent transition-all duration-300">
                      <Star size={12} className="text-white group-hover:fill-current" />
                    </div>
                    <span className="text-sm font-semibold text-blue-50/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80"
                  alt="Instalaciones Médicas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-accent/20 group-hover:bg-brand-accent/10 transition-colors duration-500" />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-xl cursor-pointer hover:scale-110 transition-transform">
                    <Zap size={20} fill="currentColor" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
