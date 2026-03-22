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
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Nuestros servicios más solicitados</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Contamos con una amplia red de especialistas listos para brindarte la mejor atención médica con la calidez que mereces.
            </p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-blue-600 font-bold flex items-center gap-2 group"
          >
            Ver todas las especialidades
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Activity size={16} />
            </div>
          </motion.button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`p-8 rounded-3xl ${service.bg} border border-transparent hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all cursor-pointer group`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">{service.name}</h3>
              <p className="mt-2 text-sm text-slate-500 font-medium">Especialistas certificados</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
