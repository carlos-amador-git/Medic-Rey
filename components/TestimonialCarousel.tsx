'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Upload, 
  X, 
  CheckCircle2,
  User,
  MessageSquare
} from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
  video?: string;
  type: 'image' | 'video';
}

const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    name: "María García",
    role: "Paciente de Cirugía",
    quote: "Increíble atención. No pagué ni un peso de deducible gracias a su asesoría.",
    image: "https://picsum.photos/seed/p1/400/400",
    type: 'image'
  },
  {
    id: '2',
    name: "Roberto Sánchez",
    role: "Atención Especializada",
    quote: "El proceso fue transparente y muy rápido. Altamente recomendados.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-medical-team-working-in-a-hospital-4613-large.mp4",
    type: 'video'
  },
  {
    id: '3',
    name: "Elena Torres",
    role: "Consulta General",
    quote: "Me sentí cuidada en todo momento. Son expertos en lo que hacen.",
    image: "https://picsum.photos/seed/p3/400/400",
    type: 'image'
  },
  {
    id: '4',
    name: "Carlos Ruiz",
    role: "Urgencias",
    quote: "La rapidez con la que me atendieron fue vital. Excelente servicio.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-doctor-checking-a-patient-s-pulse-4614-large.mp4",
    type: 'video'
  }
];

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
    setIsPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    quote: '',
    file: null as File | null,
    fileType: 'image' as 'image' | 'video'
  });

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Math.random().toString(36).substr(2, 9);
    const testimonial: Testimonial = {
      id,
      name: newTestimonial.name,
      role: newTestimonial.role,
      quote: newTestimonial.quote,
      type: newTestimonial.fileType,
      // In a real app, we'd upload the file and get a URL
      // Here we'll use a placeholder based on type
      image: newTestimonial.fileType === 'image' ? URL.createObjectURL(newTestimonial.file!) : undefined,
      video: newTestimonial.fileType === 'video' ? URL.createObjectURL(newTestimonial.file!) : undefined,
    };
    setTestimonials([testimonial, ...testimonials]);
    setCurrentIndex(0);
    setIsModalOpen(false);
    setNewTestimonial({ name: '', role: '', quote: '', file: null, fileType: 'image' });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4 flex-1">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          <span className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Testimonios Reales</span>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="ml-6 flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-700 transition-all"
        >
          <Upload size={18} />
          Subir Testimonio
        </motion.button>
      </div>

      <div className="relative h-[500px] md:h-[450px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="absolute w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden flex flex-col md:flex-row"
          >
            {/* Media Section */}
            <div className="relative w-full md:w-1/2 h-64 md:h-full bg-slate-100 dark:bg-slate-800">
              {currentTestimonial.type === 'video' ? (
                <div className="relative w-full h-full group">
                  <video
                    ref={videoRef}
                    src={currentTestimonial.video}
                    className="w-full h-full object-cover"
                    onEnded={() => setIsPlaying(false)}
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleVideoToggle}
                      className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-blue-600 shadow-xl"
                    >
                      {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                    </motion.button>
                  </div>
                </div>
              ) : (
                <Image
                  src={currentTestimonial.image!}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute top-6 left-6">
                <div className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  {currentTestimonial.type === 'video' ? 'Video Testimonio' : 'Foto Testimonio'}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <MessageSquare size={32} fill="currentColor" className="opacity-20" />
                </div>
                <p className="text-xl md:text-2xl text-slate-800 dark:text-slate-200 font-medium leading-relaxed italic">
                  &quot;{currentTestimonial.quote}&quot;
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {currentTestimonial.name}
                    <CheckCircle2 size={16} className="text-green-500" />
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                    {currentTestimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10">
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ChevronLeft size={28} />
          </motion.button>
        </div>
        <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10">
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ChevronRight size={28} />
          </motion.button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-blue-600' 
                : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      {/* Upload Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Comparte tu Experiencia</h3>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:scale-110 transition-transform"
                  >
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleAddTestimonial} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Nombre</label>
                      <input 
                        required
                        type="text"
                        value={newTestimonial.name}
                        onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Servicio</label>
                      <input 
                        required
                        type="text"
                        value={newTestimonial.role}
                        onChange={(e) => setNewTestimonial({...newTestimonial, role: e.target.value})}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="Ej. Cirugía"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Tu Comentario</label>
                    <textarea 
                      required
                      value={newTestimonial.quote}
                      onChange={(e) => setNewTestimonial({...newTestimonial, quote: e.target.value})}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all h-32 resize-none"
                      placeholder="Cuéntanos cómo te ayudamos..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Archivo (Foto o Video)</label>
                    <div className="relative group">
                      <input 
                        required
                        type="file"
                        accept="image/*,video/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setNewTestimonial({
                              ...newTestimonial, 
                              file, 
                              fileType: file.type.startsWith('video') ? 'video' : 'image'
                            });
                          }
                        }}
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                      />
                      <div className="w-full border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 group-hover:border-blue-500 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                          <Upload size={24} />
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-slate-900 dark:text-white">
                            {newTestimonial.file ? newTestimonial.file.name : 'Selecciona un archivo'}
                          </div>
                          <div className="text-xs text-slate-500">Imágenes o videos cortos (MP4)</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 dark:shadow-none hover:bg-blue-700 active:scale-95 transition-all"
                  >
                    Publicar Testimonio
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
