'use client';

import { motion } from 'motion/react';
import { Stethoscope, HeartPulse, Microscope, Baby, Activity, Brain, Bone, Thermometer } from 'lucide-react';
import Image from 'next/image';

const services = [
  { name: 'Cardiología', icon: HeartPulse, color: 'from-brand-accent to-brand-accent-container', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
  { name: 'Pediatría', icon: Baby, color: 'from-brand-primary to-brand-primary-container', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80' },
  { name: 'Ginecología', icon: Activity, color: 'from-brand-secondary to-brand-secondary-container', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
  { name: 'Neurología', icon: Brain, color: 'from-brand-accent to-brand-accent-container', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80' },
  { name: 'Ortopedia', icon: Bone, color: 'from-brand-primary to-brand-primary-container', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80' },
  { name: 'Medicina General', icon: Stethoscope, color: 'from-brand-accent to-brand-accent-container', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80' },
  { name: 'Laboratorio', icon: Microscope, color: 'from-brand-secondary to-brand-secondary-container', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80' },
  { name: 'Urgencias 24/7', icon: Thermometer, color: 'from-red-500 to-red-600', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80' },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="absolute inset-0 bg-brand-accent/3 dark:bg-brand-accent/5" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-primary/5 dark:bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-primary/20 dark:border-brand-primary/40 mb-6">
              Especialidades
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4 sm:mb-6 font-display leading-[1.1]">
              Nuestros servicios <span className="text-gradient">más solicitados</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Contamos con una amplia red de especialistas listos para brindarte la mejor atención médica con la calidez que mereces.
            </p>
          </div>
          <motion.button
            whileHover={{ x: 8 }}
            className="text-brand-primary dark:text-brand-primary/80 font-black flex items-center gap-3 group text-base tracking-tight"
          >
            Ver todas las especialidades
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all shadow-sm group-hover:shadow-brand-primary/30">
              <Activity size={18} />
            </div>
          </motion.button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={false}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative p-6 lg:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-brand-primary/20 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-brand-primary/10 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-slate-900/80 dark:via-slate-900/40 dark:to-transparent group-hover:from-white/60 group-hover:via-white/20 dark:group-hover:from-slate-900/60 dark:group-hover:via-slate-900/20 transition-colors duration-500" />
              
              <div className="relative">
                <div className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-5 lg:mb-6 shadow-lg shadow-current/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <service.icon size={24} className="lg:w-7 lg:h-7" />
                </div>
                <h3 className="text-base lg:text-lg font-black text-slate-900 dark:text-white tracking-tight font-display">{service.name}</h3>
                <p className="mt-2 text-[9px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em]">Especialistas Certificados</p>
              </div>
              
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
