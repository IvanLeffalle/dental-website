import React from "react";
import { motion } from "framer-motion";
import image from "../assets/dentista-chaco.jpg";
const SectionTwo = () => {
  return (
    <section className="w-full py-16 px-4 overflow-hidden bg-gray-50 rounded-lg">
      <div className="max-w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1 pl-40"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-600 font-semibold text-lg mb-4 block"
            >
              Cuidamos tu sonrisa
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-[120px] font-bold text-gray-900 mb-6 leading-tight"
            >
              Atención Personalizada en Resistencia Chaco
            </motion.h2>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -right-4 -top-4 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -left-4 -bottom-4 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-3xl"></div>

              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={image}
                  alt="Consultorio dental en Resistencia Chaco"
                  className="w-full h-1/2 object-cover"
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
