'use client';

import { motion } from 'motion/react';
import { Stethoscope, HeartPulse, Microscope, Baby, Activity, Brain, Bone, Thermometer } from 'lucide-react';

const services = [
  { name: 'Cardiología', icon: HeartPulse, color: 'text-red-600', bg: 'bg-red-50' },
  { name: 'Pediatría', icon: Baby, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'Ginecología', icon: Activity, color: 'text-pink-600', bg: 'bg-pink-50' },
  { name: 'Neurología', icon: Brain, color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: 'Ortopedia', icon: Bone, color: 'text-amber-600', bg: 'bg-amber-50' },
  { name: 'Medicina General', icon: Stethoscope, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'Laboratorio', icon: Microscope, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'Urgencias 24/7', icon: Thermometer, color: 'text-orange-600', bg: 'bg-orange-50' },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6 font-display leading-[1.1]">
              Nuestros servicios <span className="text-blue-600">más solicitados</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Contamos con una amplia red de especialistas listos para brindarte la mejor atención médica con la calidez que mereces.
            </p>
          </div>
          <motion.button
            whileHover={{ x: 10 }}
            className="text-blue-600 dark:text-blue-400 font-black flex items-center gap-3 group text-lg tracking-tight"
          >
            Ver todas las especialidades
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm group-hover:shadow-blue-200">
              <Activity size={20} />
            </div>
          </motion.button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`p-10 rounded-[2.5rem] ${service.bg} dark:bg-slate-900 border border-transparent dark:border-slate-800 hover:border-slate-100 dark:hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-100/30 transition-all cursor-pointer group`}
            >
              <div className={`w-16 h-16 rounded-[1.25rem] bg-white dark:bg-slate-800 shadow-md ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight font-display">{service.name}</h3>
              <p className="mt-3 text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em]">Especialistas Certificados</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
