import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  ArrowUpRight,
  CalendarCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-violet-600">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-4">
              {["Inicio", "Servicios", "Acerca de Nosotros", "Contacto"].map(
                (link) => (
                  <motion.li key={link} whileHover={{ x: 5 }}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white flex items-center gap-2 transition-colors group"
                    >
                      {link}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Contacto</h3>
            <ul className="space-y-4">
              {[
                {
                  text: "Obligado 721, Resistencia, Argentina",
                  label: "Dirección",
                },
                { text: "3624985198", label: "Teléfono" },
                { text: "ivanmleffalle@gmail.com", label: "Email" },
              ].map((item) => (
                <li key={item.label}>
                  <p className="text-white/80">
                    <span className="text-white/60 text-sm block">
                      {item.label}
                    </span>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Síguenos</h3>
            <div className="flex space-x-4">
              {[
                {
                  icon: <Facebook />,
                  label: "Facebook",
                  href: "https://www.facebook.com/drleffalle/",
                },
                {
                  icon: <Twitter />,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/leffalleivan/",
                },
                {
                  icon: <CalendarCheck />,
                  label: "CalendAr",
                  href: "https://citas-pi-two.vercel.app/",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  {React.cloneElement(social.icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-white/10 mt-12 pt-8 text-center"
        >
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Od. Ivan Leffalle. Todos los derechos
            reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
