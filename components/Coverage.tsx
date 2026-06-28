'use client';

import { motion } from 'motion/react';
import { MapPin, Building2, Hospital, Stethoscope, Pill, AmbulanceIcon as Ambulance, ShieldCheck } from 'lucide-react';

const regions = [
  {
    name: 'Centro',
    states: ['Ciudad de México', 'Estado de México', 'Morelos', 'Hidalgo', 'Tlaxcala', 'Puebla'],
    icon: Building2,
    color: 'from-brand-primary to-brand-primary-container',
  },
  {
    name: 'Occidente',
    states: ['Jalisco', 'Nayarit', 'Colima', 'Michoacán'],
    icon: Hospital,
    color: 'from-brand-secondary to-brand-secondary-container',
  },
  {
    name: 'Noroeste',
    states: ['Baja California', 'Baja California Sur', 'Sonora', 'Sinaloa', 'Chihuahua'],
    icon: Stethoscope,
    color: 'from-brand-accent to-brand-accent-container',
  },
  {
    name: 'Noreste',
    states: ['Nuevo León', 'Tamaulipas', 'Coahuila', 'Durango'],
    icon: Pill,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    name: 'Centro-Norte',
    states: ['Aguascalientes', 'Guanajuato', 'Querétaro', 'San Luis Potosí', 'Zacatecas'],
    icon: Ambulance,
    color: 'from-violet-500 to-violet-600',
  },
  {
    name: 'Sur',
    states: ['Guerrero', 'Oaxaca', 'Chiapas'],
    icon: ShieldCheck,
    color: 'from-rose-500 to-rose-600',
  },
  {
    name: 'Sureste',
    states: ['Veracruz', 'Tabasco', 'Campeche', 'Yucatán', 'Quintana Roo'],
    icon: MapPin,
    color: 'from-amber-500 to-amber-600',
  },
];

export default function Coverage() {
  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="absolute inset-0 bg-brand-accent/3 dark:bg-brand-accent/5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-brand-primary/5 dark:bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-secondary/5 dark:bg-brand-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-primary/20 dark:border-brand-primary/40 mb-6">
            <MapPin size={12} />
            Cobertura Nacional
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight font-display">
            Regiones de <span className="text-gradient">Cobertura</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Atención médica de calidad en toda la República Mexicana. Estamos donde nos necesitas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={false}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-slate-50 dark:bg-slate-900 p-6 lg:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-brand-primary/20 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-brand-primary/10 transition-all duration-500 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${region.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />
                
                <div className="relative flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${region.color} text-white flex items-center justify-center shadow-lg shadow-current/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <region.icon size={20} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight font-display">
                    {region.name}
                  </h3>
                </div>

                <div className="relative space-y-1.5">
                  {region.states.map((state) => (
                    <div
                      key={state}
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-medium group/state"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 dark:bg-brand-primary/60 group-hover/state:bg-brand-primary transition-colors" />
                      <span className="group-hover/state:text-slate-900 dark:group-hover/state:text-white transition-colors">
                        {state}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-brand-primary/5 dark:bg-brand-primary/10 border border-brand-primary/10 dark:border-brand-primary/20">
            <MapPin size={20} className="text-brand-primary" />
            <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
              <span className="text-brand-primary">+32 estados</span> con cobertura médica y hospitalaria en toda la República Mexicana
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
