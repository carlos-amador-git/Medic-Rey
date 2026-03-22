'use client';

import { motion } from 'motion/react';
import { Users, Stethoscope, HeartPulse, Building2 } from 'lucide-react';
import Image from 'next/image';
import Carousel from './Carousel';

const stats = [
  { label: 'Consultas Médicas', value: '7,234', icon: Stethoscope, color: 'text-blue-600', bg: 'bg-blue-100' },
  { label: 'Cirugías Exitosas', value: '3,276', icon: HeartPulse, color: 'text-red-600', bg: 'bg-red-100' },
  { label: 'Médicos en Red', value: '87', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { label: 'Socios en Red', value: '30', icon: Building2, color: 'text-amber-600', bg: 'bg-amber-100' },
];

export default function Stats() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Nuestra propuesta
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="https://picsum.photos/seed/med-wide-1/1200/500"
              alt="Instalaciones Modernas"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="https://picsum.photos/seed/med-wide-2/1200/500"
              alt="Tecnología de Punta"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Nuestra propuesta
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            { seed: 'med1', alt: 'Consulta Médica' },
            { seed: 'med2', alt: 'Tecnología Médica' },
            { seed: 'med3', alt: 'Atención Especializada' },
            { seed: 'med4', alt: 'Laboratorio' },
            { seed: 'med5', alt: 'Cuidado Intensivo' },
            { seed: 'med6', alt: 'Rehabilitación' },
          ].map((img, index) => (
            <motion.div
              key={img.seed}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100"
            >
              <Image
                src={`https://picsum.photos/seed/${img.seed}/600/450`}
                alt={img.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>

        <Carousel />

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Nuestra Actualidad</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Resultados que respaldan nuestra experiencia y compromiso con tu salud.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <stat.icon size={32} />
              </div>
              <div className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
