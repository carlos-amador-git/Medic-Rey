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
    <section id="beneficios" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Nuestra Propuesta</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Obtén los siguientes beneficios ¡SIN COSTO! al usar tu seguro con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:scale-105 transition-transform"
            >
              <div className={`w-20 h-20 rounded-2xl ${benefit.bg} ${benefit.color} flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform`}>
                <benefit.icon size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <ShieldCheck size={200} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight tracking-tight">
                ¿Por qué elegir MedicRey?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {extraBenefits.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <Star size={12} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-blue-50 tracking-wide">{item}</span>
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
