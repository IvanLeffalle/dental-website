import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Users, BadgeCheck } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
};

const ServiceCard = ({ title, description, bgColor, icon }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`relative flex flex-col h-[500px] p-6 rounded-xl shadow-lg ${bgColor} overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
          {icon}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-200"
          aria-label="Learn more"
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-white/10">
        <motion.button
          whileHover={{ x: 5 }}
          className="text-white text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-200"
        >
          Explorar servicio
          <ArrowUpRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Odontología General",
      description:
        "Tratamientos integrales para mantener tu salud bucal en óptimas condiciones, desde limpiezas hasta restauraciones.",
      bgColor: "bg-blue-600",
      icon: <Clock className="w-6 h-6 text-white" />,
    },
    {
      title: "Extracciones Dentales",
      description:
        "Extracción segura y profesional de dientes dañados o problemáticos, con cuidado postoperatorio adecuado.",
      bgColor: "bg-emerald-600",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      title: "Arreglos Estéticos",
      description:
        "Blanqueamientos, carillas y otros tratamientos para lograr una sonrisa radiante y natural.",
      bgColor: "bg-violet-600",
      icon: <BadgeCheck className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="w-full py-4 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            bgColor={service.bgColor}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
