'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause, HeartPulse, Baby, Activity, Bone, Thermometer, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const icons = [HeartPulse, Thermometer, Bone, Activity, Baby];

interface Slide {
  title: string;
  description: string;
  highlights?: string[];
  image: string;
  color: string;
}

const slides: Slide[] = [
  {
    title: '¡Cuidado con las hernias!',
    description: 'Solucionamos tu problema con cirugía laparoscópica de mínima invasión.',
    highlights: ['Valoración', 'Estudios', 'Cirugía'],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=80',
    color: 'from-brand-accent to-brand-accent-container'
  },
  {
    title: 'Atención Urológica',
    description: 'Realízate valoración, estudios y cirugía con nuestros especialistas.',
    highlights: ['Circuncisión', 'Próstata', 'Varicocele', 'Tratamiento general'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80',
    color: 'from-brand-primary to-brand-primary-container'
  },
  {
    title: '¿Dolores Articulares?',
    description: '¡No vivas más con ese dolor! Agenda una valoración y cirugía con nuestros ortopedistas.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80',
    color: 'from-brand-secondary to-brand-secondary-container'
  },
  {
    title: 'Rinoplastía',
    description: '¡Muestra tu mejor perfil y respira con estilo!',
    highlights: ['Valoración', 'Estudios', 'Cirugía'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=1600&q=80',
    color: 'from-brand-accent to-brand-accent-container'
  },
  {
    title: 'Valoración Ginecológica',
    description: 'Si tienes 2 o más de estos síntomas, acude a valoración.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1600&q=80',
    color: 'from-brand-primary to-brand-primary-container'
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setProgress(0);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          paginate(1);
          return 0;
        }
        return prev + 1.5;
      });
    }, 100);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isPlaying, isHovered, paginate]);

  const slide = slides[currentIndex];
  const Icon = icons[currentIndex];

  return (
    <section id="servicios" className="relative py-16 sm:py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-primary/5 dark:bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 dark:bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight font-display">
            Nuestros servicios <span className="text-gradient">más solicitados</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Atención especializada con los mejores profesionales de la salud.
          </p>
        </motion.div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full h-[400px] sm:h-[500px] md:h-[560px] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 group shadow-2xl"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 280, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) paginate(1);
                else if (swipe > 10000) paginate(-1);
              }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-transparent" />

              <motion.div
                key={`content-${currentIndex}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${slide.color} text-white flex items-center justify-center shadow-xl shadow-current/30`}>
                    <Icon size={28} className="lg:w-8 lg:h-8" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-xl text-white px-4 py-2 rounded-full border border-white/20 shadow-lg">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Especialistas Certificados</span>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight font-display leading-[1.1] max-w-2xl drop-shadow-lg">
                  {slide.title}
                </h3>
                <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-xl drop-shadow-md">
                  {slide.description}
                </p>
                {slide.highlights && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {slide.highlights.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-xl text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-lg uppercase tracking-wider"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 inline-flex items-center gap-2 bg-brand-primary/25 backdrop-blur-xl text-brand-primary text-sm font-semibold px-4 py-2 rounded-full border border-brand-primary/30 shadow-lg">
                  <ShieldCheck size={16} />
                  Más información con tu asesor médico RedMedic
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear', duration: 0.1 }}
            />
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 z-20 p-3 rounded-xl bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 border border-white/20"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-xl bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 border border-white/20"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-xl bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 border border-white/20"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setProgress(0);
                  setCurrentIndex(index);
                }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-10 h-2.5 bg-brand-primary shadow-lg shadow-brand-primary/40'
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
