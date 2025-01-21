import React, { useState } from "react";
import { Menu, X, User, Search } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#" },
    { name: "Doctores", href: "#" },
    { name: "Contacto", href: "#" },
  ];

  return (
    <nav className="w-full py-4 relative overflow-hidden bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg rounded-xl">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 flex items-center"
          >
            <div className="text-white font-bold text-2xl">Clínica</div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Section - Search & Profile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-colors duration-200"
              aria-label="Profile"
            >
              <User size={20} />
              <span className="text-sm font-medium">Mi Cuenta</span>
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Main menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white/10 mt-2"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="block px-3 py-2 rounded-md text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
            <div className="border-t border-white/10 mt-4 pt-4">
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center w-full px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                aria-label="Search"
              >
                <Search size={20} className="mr-3" />
                Buscar
              </motion.button>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center w-full px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                aria-label="Profile"
              >
                <User size={20} className="mr-3" />
                Mi Cuenta
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
