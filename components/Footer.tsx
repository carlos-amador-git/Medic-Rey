'use client';

import { Phone, Mail, MessageCircle, MapPin, Facebook, Instagram, Linkedin, Twitter, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <Activity size={20} />
                </div>
                <span className="text-2xl font-black text-white tracking-tighter">
                  MEDICREY
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">24/7</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              &quot;Que el recuperar tu salud sea una experiencia memorable&quot;. Tu red médica y hospitalaria de confianza en México.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-white font-bold text-lg tracking-tight">Menú</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Inicio</a></li>
              <li><a href="#beneficios" className="hover:text-blue-400 transition-colors">Beneficios</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Gasto Médico Mayor</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Aviso de Privacidad</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-white font-bold text-lg tracking-tight">Contacto</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <a href="tel:5522957641" className="hover:text-blue-400 transition-colors">55 2295 7641</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-green-500" />
                <a href="https://wa.me/525522957641" className="hover:text-blue-400 transition-colors">WhatsApp 24/7</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <a href="mailto:Info@medicasss.com.mx" className="hover:text-blue-400 transition-colors">Info@medicasss.com.mx</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-1" />
                <span>Mexico City, CDMX, México</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-white font-bold text-lg tracking-tight">¿Listo para iniciar?</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Agenda tu consulta hoy mismo y descubre los beneficios de nuestra red médica.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition-all">
              Agenda una consulta
            </button>
          </div>
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
    </footer>
  );
}
