'use client';

import { Phone, Mail, MessageCircle, MapPin, Facebook, Instagram, Linkedin, Twitter, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-24 border-t border-slate-800 dark:border-slate-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <Activity size={24} />
                </div>
                <span className="text-2xl font-black text-white tracking-tighter font-display">
                  MEDICREY
                </span>
              </div>
            </div>
            <p className="text-base leading-relaxed text-slate-400 font-medium">
              &quot;Que el recuperar tu salud sea una experiencia memorable&quot;. Tu red médica y hospitalaria de confianza en México.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -4, scale: 1.1 }}
                  href={social.href}
                  className="w-11 h-11 rounded-2xl bg-slate-800 dark:bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-lg shadow-black/20"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <h4 className="text-white font-black text-lg tracking-tight font-display uppercase">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" /> Inicio</a></li>
              <li><a href="#beneficios" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" /> Beneficios</a></li>
              <li><a href="#servicios" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" /> Servicios</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" /> Gasto Médico Mayor</a></li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col space-y-8"
          >
            <h4 className="text-white font-black text-lg tracking-tight font-display uppercase">Contáctanos</h4>
            <ul className="space-y-6 text-sm font-bold">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">Llámanos</span>
                  <a href="tel:5522957641" className="text-slate-300 hover:text-blue-400 transition-colors">55 2295 7641</a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <MessageCircle size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">WhatsApp 24/7</span>
                  <a href="https://wa.me/525522957641" className="text-slate-300 hover:text-blue-400 transition-colors">Mándanos un mensaje</a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">Email</span>
                  <a href="mailto:Info@medicasss.com.mx" className="text-slate-300 hover:text-blue-400 transition-colors">Info@medicasss.com.mx</a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-8"
          >
            <h4 className="text-white font-black text-lg tracking-tight font-display uppercase">Legal</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Aviso de Privacidad</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Derechos ARCO</a></li>
            </ul>
            <div className="pt-4">
              <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-2xl text-sm font-black shadow-xl shadow-blue-900/40 hover:bg-blue-700 transition-all uppercase tracking-widest">
                Agenda Ahora
              </button>
            </div>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-medium tracking-wide">
            © 2026 Grupo MEDICREY. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-xs font-semibold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
