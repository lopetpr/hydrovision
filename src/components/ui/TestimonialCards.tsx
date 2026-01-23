import { motion } from "framer-motion";
import { Quote, MapPin, Star } from "lucide-react";

interface Testimonio {
  nombre: string;
  cargo: string;
  testimonio: string;
  comunidad: string;
}

interface Props {
  testimonios: Testimonio[];
}
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
export default function TestimonialCards({ testimonios }: Props) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {testimonios.map((testimonio, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{
            y: -8,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          className="group relative"
        >
          {/* Card principal */}
          <div className="relative bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
            {/* Quote icon decorativo */}
            <div className="absolute -top-2 -right-2 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 p-6 sm:p-10" />

            <motion.div
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-cyan-200 group-hover:text-cyan-300 transition-colors duration-300"
              whileHover={{ rotate: 12, scale: 1.1 }}
            >
              <Quote
                className="w-8 h-8 sm:w-10 sm:h-10"
                fill="currentColor"
                strokeWidth={0}
              />
            </motion.div>

            {/* Estrellas */}

            {/* Testimonio */}
            <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 relative z-10 text-sm sm:text-[15px]">
              "{testimonio.testimonio}"
            </p>

            {/* Divider */}
            <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 mb-4 sm:mb-6 group-hover:w-16 sm:group-hover:w-20 transition-all duration-500" />

            {/* Info del autor */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Avatar con gradiente animado */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-xl shadow-lg shadow-cyan-500/25">
                  {testimonio.nombre.charAt(0)}
                </div>
                {/* Ring animado */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
              </motion.div>

              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 text-base sm:text-lg truncate">
                  {testimonio.nombre}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mb-1 truncate">
                  {testimonio.cargo}
                </p>
                <div className="flex items-center gap-1 text-cyan-600">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                  <span className="text-xs font-medium truncate">
                    {testimonio.comunidad}
                  </span>
                </div>
              </div>
            </div>
            {/* Gradient line en el bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
