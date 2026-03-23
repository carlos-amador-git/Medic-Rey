'use client';

import React from 'react';
import { Phone, MessageCircle, Facebook, Activity, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';

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

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-xl shadow-slate-200/20 dark:shadow-blue-900/10 border-b border-slate-200/50 dark:border-slate-700/50 py-2' 
        : 'bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/50 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 transition-all duration-500">
          {/* Logo */}
          <motion.div 
            animate={{ 
              scale: isScrolled ? 0.85 : 1,
              y: isScrolled ? -2 : 0
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex-shrink-0"
          >
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/20 group-hover:rotate-12 transition-transform duration-300">
                <Activity size={24} />
              </div>
              <span className="text-2xl md:text-3xl font-black text-blue-600 tracking-tighter font-display">
                MEDICREY
              </span>
            </div>
          </motion.div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-xs font-black text-blue-700 dark:text-blue-400 uppercase tracking-widest">
                Servicio 24/7
              </span>
            </motion.div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              <div className="flex items-center gap-3">
                <motion.a 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-blue-200 dark:shadow-none hover:brightness-110 transition-all"
                >
                  <Facebook size={18} fill="currentColor" />
                  Facebook
                </motion.a>

                <motion.a 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/525522957641" 
                  className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-green-200 dark:shadow-green-900/20 hover:bg-green-600 transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <Activity size={18} />
                  </div>
                  <span className="text-xl font-black text-blue-600 tracking-tighter">MEDICREY</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
                <div className="space-y-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Contacto Directo</span>
                  <div className="grid gap-3">
                    {[
                      { href: "https://wa.me/525522957641", icon: MessageCircle, label: "WhatsApp", color: "bg-green-500", text: "text-white" },
                      { href: "https://facebook.com", icon: Facebook, label: "Facebook", color: "bg-[#1877F2]", text: "text-white" },
                      { href: "tel:5522957641", icon: Phone, label: "Llamar Ahora", color: "bg-slate-100 dark:bg-slate-800", text: "text-slate-900 dark:text-white" }
                    ].map((item, i) => (
                      <motion.a
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        href={item.href}
                        target={item.href.startsWith('http') ? "_blank" : undefined}
                        rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className={`w-full ${item.color} ${item.text} p-4 rounded-2xl font-bold flex items-center justify-between group active:scale-95 transition-all shadow-lg shadow-slate-200/20 dark:shadow-none`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon size={20} fill={item.icon === Facebook ? "currentColor" : "none"} />
                          {item.label}
                        </div>
                        <Activity size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Estado del Servicio</span>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-3xl border border-blue-100 dark:border-blue-800/50"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                      <span className="text-sm font-bold text-blue-700 dark:text-blue-400">Servicio 24/7 Activo</span>
                    </div>
                    <p className="text-xs text-blue-600/70 dark:text-blue-400/70 leading-relaxed">
                      Estamos disponibles en todo momento para atender tus dudas sobre seguros de gastos médicos.
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Cambiar Tema</span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
