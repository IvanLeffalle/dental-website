import { motion } from "framer-motion";
import image from "../assets/image.webp";
import React from "react";

const Header = () => {
  return (
    <div className="w-full min-h-screen relative mt-4">
      {/* Overlay with gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-950/60 to-blue-950/80 z-10 rounded-lg"
        aria-hidden="true"
      />

      {/* Background Image */}
      <div className="w-full h-screen rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={image}
          alt="Hospital facility showcasing modern medical environment"
          loading="eager"
        />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 md:p-12 lg:block lg:top-1/2 lg:pl-40 lg:max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl lg:text-[120px] font-bold mb-6 text-white tracking-tight">
            Bienvenido a la Clínica
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque auctor velit, vitae dignissim nunc.
          </p>
        </motion.div>
      </div>

      {/* Call-to-Action Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-10 left-1/2 lg:left-auto lg:right-[10%]  z-20 bg-white text-blue-950 font-semibold rounded-lg py-4 px-8 hover:bg-blue-50 transition-all duration-300 shadow-lg text-lg"
        aria-label="Sacar un Turno"
      >
        Sacar un Turno
      </motion.button>
    </div>
  );
};

export default Header;
