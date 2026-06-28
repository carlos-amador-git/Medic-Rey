'use client';

import { motion } from 'motion/react';
import { Phone, Stethoscope, Siren, FileText, FlaskConical, Scissors } from 'lucide-react';
import Image from 'next/image';

const freeBenefits = [
  {
    title: 'Atención Médica 24/7',
    description: 'Asesoría telefónica disponible en cualquier momento.',
    icon: Phone,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
  },
  {
    title: 'Consulta Médica',
    description: 'Acceso a especialistas certificados de primer nivel.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&q=80',
  },
  {
    title: 'Emergencias e Ingreso a Hospitales',
    description: 'Atención inmediata sin trámites adicionales.',
    icon: Siren,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
  },
  {
    title: 'Gestión de Trámites',
    description: 'Nos encargamos de todo el proceso con tu aseguradora.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  },
  {
    title: 'Estudios Clínicos',
    description: 'Laboratorios de alta calidad sin costo adicional.',
    icon: FlaskConical,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
  },
  {
    title: 'Cirugía y Tratamiento',
    description: 'Procedimientos quirúrgicos cubiertos al 100%.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
  },
];

export default function FreeBenefits() {
  return (
    <section id="beneficios" className="relative py-16 sm:py-20 lg:py-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/5 dark:bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-display leading-[1.1]">
            Obtén los siguientes beneficios{' '}
            <span className="text-gradient">¡SIN COSTO!</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="absolute inset-0">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-transparent" />

              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-colors duration-500" />

              <motion.div
                initial={false}
                className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-white/10 backdrop-blur-xl text-white flex items-center justify-center border border-white/20 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:shadow-lg group-hover:shadow-brand-primary/30 transition-all duration-300"
              >
                <benefit.icon size={20} className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              </motion.div>

              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                <div className="h-0.5 w-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mb-4 group-hover:w-full transition-all duration-500" />
                <h3 className="text-lg lg:text-xl font-black text-white tracking-tight mb-2 drop-shadow-lg">
                  {benefit.title}
                </h3>
                <div className="overflow-hidden">
                  <p className="text-sm text-slate-200/90 font-medium leading-relaxed translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
