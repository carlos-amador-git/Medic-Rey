'use client';

import { motion } from 'motion/react';
import { Clock, DollarSign, Heart, ShieldCheck, Zap, Star } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  {
    title: 'Tiempo',
    description: 'Agilizamos tus trámites y consultas para que te enfoques en tu recuperación.',
    icon: Clock,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
  {
    title: 'Dinero',
    description: 'Eliminamos co-seguros y deducibles para que tu salud no sea un gasto excesivo.',
    icon: DollarSign,
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
  {
    title: 'Salud',
    description: 'Acceso a los mejores especialistas e instituciones médicas de México.',
    icon: Heart,
    color: 'text-red-600',
    bg: 'bg-red-100',
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
  return (
    <section id="beneficios" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-blue-100/50 dark:bg-blue-900/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-100/50 dark:bg-blue-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight font-display">
            Nuestros <span className="text-blue-600">Beneficios</span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Obtén los siguientes beneficios <span className="text-blue-600 font-bold">¡SIN COSTO!</span> al usar tu seguro con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)] border border-slate-50 dark:border-slate-800 flex flex-col items-center text-center group transition-all duration-500"
            >
              <div className={`w-24 h-24 rounded-[1.75rem] ${benefit.bg} dark:bg-blue-900/30 ${benefit.color} flex items-center justify-center mb-10 shadow-lg shadow-current/10 group-hover:rotate-12 transition-transform duration-700`}>
                <benefit.icon size={48} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight font-display">{benefit.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-[0_40px_80px_-15px_rgba(37,99,235,0.3)]">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <ShieldCheck size={300} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-4xl lg:text-5xl font-black mb-12 leading-[1.1] tracking-tight font-display">
                ¿Por qué elegir MedicRey?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {extraBenefits.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
                      <Star size={14} className="text-white group-hover:fill-current" />
                    </div>
                    <span className="text-base font-semibold text-blue-50 tracking-wide">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/hospital-room/800/450"
                  alt="Instalaciones Médicas"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/20" />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-xl cursor-pointer hover:scale-110 transition-transform">
                    <Zap size={24} fill="currentColor" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
