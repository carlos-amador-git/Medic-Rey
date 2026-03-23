'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    type: 'image',
    url: 'https://picsum.photos/seed/hospital-1/1600/800',
    title: 'Instalaciones de Vanguardia',
    description: 'Contamos con la mejor tecnología médica para tu atención.',
  },
  {
    type: 'video',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-medical-team-working-in-a-hospital-4613-large.mp4',
    title: 'Equipo Médico Especializado',
    description: 'Profesionales comprometidos con tu bienestar y recuperación.',
  },
  {
    type: 'image',
    url: 'https://picsum.photos/seed/hospital-3/1600/800',
    title: 'Red Médica Nacional',
    description: 'Acceso a los mejores hospitales de México.',
  },
  {
    type: 'image',
    url: 'https://picsum.photos/seed/hospital-4/1600/800',
    title: 'Compromiso con tu Salud',
    description: 'Tu bienestar es nuestra prioridad número uno.',
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate, isPlaying, isHovered]);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-[3rem] bg-slate-100 dark:bg-slate-900 mb-16 group transition-colors duration-500 shadow-2xl border-8 border-white dark:border-slate-800"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {slides[currentIndex].type === 'video' ? (
            <video
              src={slides[currentIndex].url}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={slides[currentIndex].url}
              alt={slides[currentIndex].title}
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8 md:p-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full mb-6 border border-blue-400/30 shadow-lg">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Servicio 24/7</span>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight font-display leading-[1.1]">
                {slides[currentIndex].title}
              </h3>
              <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl">
                {slides[currentIndex].description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
        title={isPlaying ? 'Pausar' : 'Reproducir'}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}
      </button>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
        onClick={() => paginate(1)}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
