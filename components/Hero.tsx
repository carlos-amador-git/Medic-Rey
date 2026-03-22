'use client';

import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 bg-slate-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} />
              Tu derecho a la mejor salud
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              ¿Tienes <span className="text-blue-600">Seguro de Gastos Médicos Mayores</span>?
            </h1>

            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Soy tu asesor de confianza. Te ayudo a sacar el mejor provecho de tu seguro sin co-seguro ni deducible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                ¡Usar mi Seguro!
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl text-base font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                Ver Beneficios
              </motion.button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <CheckCircle2 size={16} className="text-green-500" />
                Sin Co-seguro
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <CheckCircle2 size={16} className="text-green-500" />
                Sin Deducible
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <CheckCircle2 size={16} className="text-green-500" />
                Cirugías Gratuitas
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 border-8 border-white">
              <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Asesor Médico Profesional"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Asesoría de Confianza</div>
                  <div className="text-xs text-slate-500">Atención Personalizada</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                &quot;Tu salud no tiene precio, y nuestra asesoría tampoco.&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
