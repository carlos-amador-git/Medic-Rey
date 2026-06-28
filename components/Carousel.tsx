'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&q=80',
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
    url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1600&q=80',
    title: 'Red Médica Nacional',
    description: 'Acceso a los mejores hospitales de México.',
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=80',
    title: 'Compromiso con tu Salud',
    description: 'Tu bienestar es nuestra prioridad número uno.',
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
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
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
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
        return prev + 2;
      });
    }, 100);
    
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isPlaying, isHovered, paginate]);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 group transition-colors duration-500 shadow-2xl"
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
            x: { type: 'spring', stiffness: 300, damping: 35 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) paginate(1);
            else if (swipe > swipeConfidenceThreshold) paginate(-1);
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
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
          
          <motion.div
            key={`content-${currentIndex}`}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-0 left-0 right-0 p-8 md:p-16"
          >
            <div className="inline-flex items-center gap-1.5 bg-brand-primary/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full mb-6 border border-brand-primary/30 shadow-lg">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Servicio 24/7</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight font-display leading-[1.1] max-w-2xl">
              {slides[currentIndex].title}
            </h3>
            <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed max-w-xl">
              {slides[currentIndex].description}
            </p>
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
        className="absolute top-4 right-4 z-20 p-3 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 border border-white/20"
        title={isPlaying ? 'Pausar' : 'Reproducir'}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
      </button>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 border border-white/20"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 border border-white/20"
        onClick={() => paginate(1)}
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setProgress(0);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-brand-primary' 
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
