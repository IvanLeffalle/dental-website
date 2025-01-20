import React, { useState } from "react";
import { Menu, X, User, Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#" },
    { name: "Doctores", href: "#" },
    { name: "Contacto", href: "#" },
  ];

  return (
    <nav className="w-full  py-2 shadow-sm  top-0 z-50 ">
      <div className="mx-auto">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center p-4 rounded-lg bg-white">
            <div className="text-blue-600 font-bold text-2xl">Clínica</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1 p-4 rounded-lg bg-white">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Search & Profile */}
          <div className="hidden md:flex items-center space-x-4 p-4 rounded-lg bg-white ">
            <button
              className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Profile"
            >
              <User size={20} />
              <span className="text-sm font-medium">Mi Cuenta</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              aria-label="Main menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-gray-200 mt-4 pt-4">
              <button
                className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
                aria-label="Search"
              >
                <Search size={20} className="mr-3" />
                Buscar
              </button>
              <button
                className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
                aria-label="Profile"
              >
                <User size={20} className="mr-3" />
                Mi Cuenta
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
