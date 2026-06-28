'use client';

import { Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Footer() {
  return (
    <motion.footer 
      initial={false}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black text-slate-300 py-16 sm:py-20 lg:py-24 transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-brand-accent/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 dark:bg-brand-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          <motion.div 
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-20 rounded-xl border border-white bg-white p-1.5 overflow-hidden shadow-inner">
                <Image 
                  src="/images/logo.jpeg" 
                  alt="RedMedic Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              &quot;Que el recuperar tu salud sea una experiencia memorable&quot;. Tu red médica y hospitalaria de confianza en México.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3, scale: 1.05 }}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-slate-800 dark:bg-slate-900 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all shadow-md shadow-black/20"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <h4 className="text-white font-black text-base tracking-tight font-display uppercase">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm font-bold">
              <li><a href="#" className="text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Inicio</a></li>
              <li><a href="#beneficios" className="text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Beneficios</a></li>
              <li><a href="#servicios" className="text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Servicios</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Gasto Médico Mayor</a></li>
            </ul>
          </motion.div>

          <motion.div 
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col space-y-6"
          >
            <h4 className="text-white font-black text-base tracking-tight font-display uppercase">Contáctanos</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">Llámanos</span>
                  <a href="tel:5522957641" className="text-slate-300 hover:text-brand-primary transition-colors">55 2295 7641</a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <MessageCircle size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">WhatsApp 24/7</span>
                  <a href="https://wa.me/525522957641" className="text-slate-300 hover:text-brand-primary transition-colors">Mándanos un mensaje</a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-accent transition-all">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">Email</span>
                  <a href="mailto:Info@medicasss.com.mx" className="text-slate-300 hover:text-brand-primary transition-colors">Info@medicasss.com.mx</a>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-6"
          >
            <h4 className="text-white font-black text-base tracking-tight font-display uppercase">Legal</h4>
            <ul className="space-y-3 text-sm font-bold">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Aviso de Privacidad</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Derechos ARCO</a></li>
            </ul>
            <div className="pt-2">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-container text-white px-5 py-3 rounded-xl text-xs font-black shadow-xl shadow-brand-primary/20 hover:brightness-110 transition-all uppercase tracking-widest border border-white/10 shimmer"
              >
                Agenda Ahora
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-medium tracking-wide">
            © 2026 Grupo MEDICREY. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs font-semibold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
