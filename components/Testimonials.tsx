'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Alejandro Rivera',
    role: 'Cardiólogo',
    photo: 'https://picsum.photos/seed/doc1/200/200',
    quote: 'El servicio de gestión de seguros ha transformado la manera en que operamos. La rapidez en los trámites es inigualable.',
  },
  {
    id: 2,
    name: 'Dra. Sofía Martínez',
    role: 'Pediatra',
    photo: 'https://picsum.photos/seed/doc2/200/200',
    quote: 'Excelente atención y soporte. Siempre están disponibles para resolver cualquier duda con nuestras pólizas.',
  },
  {
    id: 3,
    name: 'Dr. Carlos Mendoza',
    role: 'Cirujano General',
    photo: 'https://picsum.photos/seed/doc3/200/200',
    quote: 'He recomendado este servicio a todos mis colegas. La transparencia y eficiencia son sus mayores fortalezas.',
  },
  {
    id: 4,
    name: 'Dra. Elena Gómez',
    role: 'Dermatóloga',
    photo: 'https://picsum.photos/seed/doc4/200/200',
    quote: 'Una herramienta indispensable para cualquier profesional de la salud en México. Simplifica lo complejo.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight"
          >
            Lo que dicen nuestros <span className="text-blue-600">clientes</span>
          </motion.h2>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            La confianza de los profesionales de la salud es nuestro mayor activo.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[350px] flex items-center justify-center">
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
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                className="absolute w-full"
              >
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-blue-900/10 border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                    <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 -z-10 opacity-20" />
                    <Image
                      src={testimonials[currentIndex].photo}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover rounded-2xl shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <Quote className="text-blue-600 mb-6 opacity-20 w-12 h-12 mx-auto md:mx-0" />
                    <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 italic mb-8 leading-relaxed">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all border border-slate-100 dark:border-slate-700"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all border border-slate-100 dark:border-slate-700"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-slate-300 dark:bg-slate-700 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
