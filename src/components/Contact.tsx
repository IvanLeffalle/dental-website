import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full py-16 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col p-8 rounded-xl shadow-lg bg-blue-600 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="currentColor" />
              </svg>
            </div>

            <div className="space-y-8">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-white/80 font-semibold text-lg md:text-xl block mb-4"
                >
                  Contactanos
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                >
                  ¿Necesitas más información?
                </motion.h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  Estamos aquí para responder tus preguntas y ayudarte a
                  programar tu consulta.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Teléfono</h3>
                    <p className="text-white/80">+54 (362) 4985198</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Dirección</h3>
                    <p className="text-white/80">
                      Obligado 721, Resistencia, Chaco
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col p-8 rounded-xl shadow-lg bg-violet-600 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="currentColor" />
              </svg>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Envíanos un mensaje
                  </h3>
                </div>

                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                />
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white/20 text-white font-semibold rounded-xl py-4 px-8 hover:bg-white/30 transition-colors shadow-lg flex items-center justify-center gap-2"
                type="submit"
              >
                <span>Enviar mensaje</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
