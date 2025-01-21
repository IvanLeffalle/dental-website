import React from "react";
import { motion } from "framer-motion";
import image from "../assets/dentista-chaco.jpg";

const SectionTwo = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-8 overflow-hidden bg-gray-50 rounded-xl">
      <div className="lg:max-w-10xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1 px-4 md:px-8 lg:pl-12"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-600 font-semibold text-lg md:text-xl mb-4 block"
            >
              Cuidamos tu sonrisa
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight break-words"
            >
              Atención Personalizada en Resistencia, Chaco
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              En nuestro consultorio, nos enfocamos en brindarte un servicio de
              calidad con tecnología de vanguardia y un trato cercano. Desde
              limpiezas dentales hasta tratamientos especializados, estamos aquí
              para cuidar de tu salud bucal.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-semibold rounded-xl py-3 px-8 hover:bg-blue-700 transition-all duration-300 shadow-lg text-lg"
              aria-label="Conocer más sobre nuestros servicios"
            >
              Conocer Más
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2"
          >
            <div className="relative mx-auto max-w-2xl md:max-w-none">
              {/* Background decoration */}
              <div className="absolute -right-8 -top-8 w-64 h-64 md:w-72 md:h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -left-8 -bottom-8 w-64 h-64 md:w-72 md:h-72 bg-green-100 rounded-full opacity-20 blur-3xl"></div>

              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={image}
                  alt="Consultorio dental en Resistencia Chaco"
                  className="w-full aspect-[4/3] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
