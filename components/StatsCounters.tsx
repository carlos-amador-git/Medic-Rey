'use client';

import { motion, useSpring, useTransform, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Users, Stethoscope, HeartPulse, Building2 } from 'lucide-react';

const stats = [
  { label: 'Consultas Médicas', value: 7234, icon: Stethoscope, color: 'from-brand-primary to-brand-primary-container', bg: 'bg-brand-primary/10 dark:bg-brand-primary/20', textColor: 'text-brand-primary' },
  { label: 'Cirugías Exitosas', value: 3276, icon: HeartPulse, color: 'from-red-500 to-red-600', bg: 'bg-red-100 dark:bg-red-900/30', textColor: 'text-red-500' },
  { label: 'Médicos en Red', value: 87, icon: Users, color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-100 dark:bg-emerald-900/30', textColor: 'text-emerald-500' },
  { label: 'Socios en Red', value: 30, icon: Building2, color: 'from-amber-500 to-amber-600', bg: 'bg-amber-100 dark:bg-amber-900/30', textColor: 'text-amber-500' },
];

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { stiffness: 40, damping: 15, mass: 0.5 });
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

export default function StatsCounters() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="absolute inset-0 bg-brand-accent/5 dark:bg-brand-accent/10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-secondary/10 dark:bg-brand-secondary/20 text-brand-secondary text-xs font-bold uppercase tracking-widest border border-brand-secondary/20 dark:border-brand-secondary/40 mb-6">
            Resultados Reales
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-display">
            Nuestra <span className="text-gradient">Actualidad</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Resultados que respaldan nuestra experiencia y compromiso con tu salud.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={false}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card-strong rounded-3xl p-6 lg:p-8 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 dark:to-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`relative w-14 h-14 lg:w-16 lg:h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} text-white flex items-center justify-center mb-5 lg:mb-6 shadow-lg shadow-current/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <stat.icon size={24} className="lg:w-7 lg:h-7" />
                </div>
                
                <div className="relative text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter font-display">
                  <CountUp value={stat.value} />
                  <span className="absolute -right-4 top-0 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity text-lg">+</span>
                </div>
                
                <div className="relative text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                  {stat.label}
                </div>

                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
