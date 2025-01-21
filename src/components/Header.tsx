import { motion } from "framer-motion";
import image from "../assets/image.webp";
import { CalendarPlus2 } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full min-h-screen relative mt-4">
      {/* Overlay with gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-950/60 to-blue-950/80 z-10 rounded-xl"
        aria-hidden="true"
      />

      {/* Background Image */}
      <div className="w-full h-screen rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={image}
          alt="Hospital facility showcasing modern medical environment"
          loading="eager"
        />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 md:px-12 lg:block lg:top-1/2 lg:-translate-y-1/2 lg:pl-40 lg:max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white tracking-tight break-words">
            Od. Iván Leffalle{" "}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium mb-6 text-white tracking-tight break-words">
            Odontología General y Estética{" "}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Con experiencia en tratamientos dentales integrales, desde limpiezas
            y restauraciones hasta blanqueamientos y exodoncias. Ofrecemos un
            enfoque personalizado para cuidar de tu sonrisa.
          </p>
        </motion.div>

        {/* Call-to-Action Button - Moved inside content container */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 lg:mt-12 max-w-64 bg-white flex items-center text-blue-950 font-semibold rounded-xl py-4 px-8 hover:bg-blue-50 transition-all duration-300 shadow-lg text-lg"
          aria-label="Sacar un Turno"
          href="https://citas-pi-two.vercel.app/"
        >
          <CalendarPlus2 size={20} className="mr-3" />
          Agendar una Cita{" "}
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
