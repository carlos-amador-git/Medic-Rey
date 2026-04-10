'use client';

import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, CheckCircle2, Share2 } from 'lucide-react';
import Image from 'next/image';
import TestimonialCarousel from './TestimonialCarousel';

export default function Hero() {
  const handleShare = async () => {
    const shareData = {
      title: 'MEDICREY - Asesoría en Seguros de Gastos Médicos Mayores',
      text: 'Te ayudo a sacar el mejor provecho de tu seguro sin co-seguro ni deducible.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Enlace copiado al portapapeles');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 pointer-events-none">
        <svg className="w-full h-full text-slate-900 dark:text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] border border-blue-100 dark:border-blue-800 shadow-sm w-fit">
              <ShieldCheck size={14} />
              Tu derecho a la mejor salud
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tight font-display">
              ¿Tienes <span className="text-blue-600">Seguro de Gastos Médicos Mayores</span>?
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
              Soy tu asesor de confianza. Te ayudo a sacar el mejor provecho de tu seguro <span className="text-slate-900 dark:text-white font-bold underline decoration-blue-500/30 underline-offset-4">sin co-seguro ni deducible</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-300/40 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  ¡Usar mi Seguro!
                  <ArrowRight size={22} />
                </span>
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 3 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200/50 dark:shadow-none"
              >
                Ver Beneficios
              </motion.button>
              <motion.button
                onClick={handleShare}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-5 rounded-2xl text-lg font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2 shadow-md"
                title="Compartir página"
              >
                <Share2 size={22} />
                <span className="sm:hidden lg:inline">Compartir</span>
              </motion.button>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div className="flex items-center gap-2.5 text-sm font-bold text-slate-700 dark:text-slate-300">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <CheckCircle2 size={14} />
                </div>
                Sin Co-seguro
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-slate-700 dark:text-slate-300">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <CheckCircle2 size={14} />
                </div>
                Sin Deducible
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-slate-700 dark:text-slate-300">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <CheckCircle2 size={14} />
                </div>
                Cirugías Gratuitas
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full aspect-[2/3] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(37,99,235,0.2)] border-[12px] border-white dark:border-slate-800 group"
            >
              <Image
                src="/images/kikito.jpeg"
                alt="Asesor de confianza - MedicRey"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 max-w-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Asesoría de Confianza</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Atención Personalizada</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
                &quot;Tu salud no tiene precio, y nuestra asesoría tampoco.&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>
        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 lg:mt-32"
        >
          <TestimonialCarousel />
        </motion.div>
      </div>
    </section>
  );
}
