import { motion } from "framer-motion";
import { Search, Compass, Droplets, Users } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Diagnóstico técnico",
    description:
      "Evaluación integral del territorio y recursos hídricos disponibles mediante tecnología avanzada.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Compass,
    title: "Diseño estratégico",
    description:
      "Planificación personalizada de soluciones hídricas adaptadas a cada comunidad y ademas a su entorno.",
    gradient: "from-cyan-500 to-teal-400",
  },
  {
    icon: Droplets,
    title: "Implementación de módulos hídricos",
    description:
      "Instalación de sistemas de captación, almacenamiento y distribución de agua.",
    gradient: "from-teal-500 to-emerald-400",
  },
  {
    icon: Users,
    title: "Capacitación y gestión comunitaria",
    description:
      "Formación técnica para garantizar la sostenibilidad a largo plazo del proyecto.",
    gradient: "from-emerald-500 to-green-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServiceCards() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group relative bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-100 overflow-hidden"
          >
            {/* Gradient line on top */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
            />

            {/* Icon container */}
            <motion.div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Icon
                className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                strokeWidth={1.5}
              />
            </motion.div>

            {/* Content */}
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-gray-800 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              {service.description}
            </p>

            {/* Subtle arrow indicator */}
            <motion.div
              className="mt-8 sm:mt-14 flex items-center text-sm font-medium text-gray-400 group-hover:text-cyan-600 transition-colors"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              <svg
                className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>

            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 to-gray-100/0 group-hover:from-gray-50/50 group-hover:to-gray-100/30 transition-all duration-500 -z-10 rounded-2xl" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
