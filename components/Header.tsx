'use client';

import { Phone, MessageCircle, Facebook, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <Activity size={24} />
              </div>
              <span className="text-3xl font-black text-blue-600 tracking-tighter">
                MEDICREY
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Servicio 24/7</span>
            </div>
          </div>

          {/* Desktop Navigation (Social Buttons Only) */}
          <nav className="hidden lg:flex items-center space-x-3">
            <motion.a 
              whileHover={{ y: -2 }}
              href="https://wa.me/525522957641" 
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-green-600 transition-all"
            >
              <MessageCircle size={16} />
              WhatsApp
            </motion.a>
            <motion.a 
              whileHover={{ y: -2 }}
              href="#" 
              className="flex items-center gap-2 bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-blue-800 transition-all"
            >
              <Facebook size={16} />
              Facebook
            </motion.a>
          </nav>

          {/* Mobile Menu Button (simplified) */}
          <div className="lg:hidden flex items-center gap-3">
            <a href="https://wa.me/525522957641" className="p-2 bg-green-500 text-white rounded-full shadow-sm">
              <MessageCircle size={18} />
            </a>
            <a href="tel:5522957641" className="p-2 bg-blue-600 text-white rounded-full shadow-sm">
              <Phone size={18} />
            </a>
            <button className="p-2 text-slate-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
