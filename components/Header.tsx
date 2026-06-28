'use client';

import React from 'react';
import { Phone, MessageCircle, Facebook, Activity, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Servicios', href: '#servicios' },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? 'glass-card py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 transition-all duration-500">
          <motion.div 
            animate={{ 
              scale: isScrolled ? 0.85 : 1,
              y: isScrolled ? -2 : 0
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex-shrink-0"
          >
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative h-16 w-32 md:h-20 md:w-40 rounded-xl border-2 border-white/80 shadow-lg bg-white p-2 overflow-hidden transition-all duration-300">
                <Image 
                  src="/images/logo.jpeg" 
                  alt="RedMedic Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <motion.div 
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 px-3 py-1.5 bg-brand-primary/10 dark:bg-brand-primary/20 rounded-full border border-brand-primary/20 dark:border-brand-primary/40"
            >
              <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-brand-primary dark:text-brand-primary/80 uppercase tracking-widest">
                24/7
              </span>
            </motion.div>

            <motion.a 
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/525522957641" 
              className="flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-primary-container text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-brand-primary/20 hover:brightness-110 transition-all border border-white/10 shimmer"
            >
              <MessageCircle size={16} />
              WhatsApp
            </motion.a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <motion.div 
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl flex flex-col"
            >
              <div className="p-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="relative h-12 w-24 rounded-xl border-2 border-white/80 shadow-md bg-white p-1.5 overflow-hidden">
                    <Image 
                      src="/images/logo.jpeg" 
                      alt="RedMedic Logo" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6">
                <nav className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={false}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl text-base font-bold text-slate-700 dark:text-slate-300 hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="space-y-3">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Contacto</span>
                  <div className="grid gap-2">
                    {[
                      { href: "https://wa.me/525522957641", icon: MessageCircle, label: "WhatsApp", color: "bg-gradient-to-r from-brand-primary to-brand-primary-container", text: "text-white" },
                      { href: "https://facebook.com", icon: Facebook, label: "Facebook", color: "bg-gradient-to-r from-brand-accent to-brand-accent-container", text: "text-white" },
                      { href: "tel:5522957641", icon: Phone, label: "Llamar", color: "bg-gradient-to-r from-brand-secondary to-brand-secondary-container", text: "text-brand-accent" }
                    ].map((item, i) => (
                      <motion.a
                        key={i}
                        initial={false}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        href={item.href}
                        target={item.href.startsWith('http') ? "_blank" : undefined}
                        rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className={`w-full ${item.color} ${item.text} p-3.5 rounded-xl font-bold flex items-center justify-between group active:scale-95 transition-all shadow-lg`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon size={18} fill={item.icon === Facebook ? "currentColor" : "none"} />
                          {item.label}
                        </div>
                        <Activity size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.div 
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-4 bg-brand-primary/10 dark:bg-brand-primary/20 rounded-xl border border-brand-primary/20"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-brand-primary">Servicio 24/7 Activo</span>
                  </div>
                  <p className="text-xs text-brand-primary/70">
                    Disponibles para atender tus dudas sobre seguros médicos.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
