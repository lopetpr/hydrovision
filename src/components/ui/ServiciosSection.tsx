import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

interface Service {
  id: number;
  number: string;
  emoji: string;
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    number: "01",
    emoji: "🛰",
    title: "Mapeo con dron",
    subtitle: "Mapeo con fin de zonificación territorial y estudio hídrico",
    features: [
      "Levantamiento con dron georreferenciado",
      "Ortofotos y nube de puntos",
      "Modelo digital de terreno (MDT)",
      "Identificación de afloramientos y vasos hídricos",
      "Modelos 3D de microreservorios",
    ],
    price: "Desde S/. 420.00",
    image: "/servicios/mapeo-dron.jpg",
  },
  {
    id: 2,
    number: "02",
    emoji: "💧",
    title: "Captación de agua",
    subtitle: "Diseño e instalación de sistemas de captación",
    features: [
      "Captación con caja HDPE",
      "Captación con mampostería",
      "Filtros, válvulas y conducción",
      "Diseño por gravedad",
    ],
    price: "Desde S/. 280.00",
    image: "/servicios/captacion-agua.jpg",
  },
  {
    id: 3,
    number: "03",
    emoji: "🏞",
    title: "Almacenamiento y distribución",
    subtitle: "Infraestructura hídrica completa",
    features: [
      "Microreservorios",
      "Tanques de polietileno",
      "Redes de distribución para personas y ganado",
    ],
    price: "Cotización personalizada",
    image: "/servicios/almacenamiento.jpg",
  },
];

function ServiceItem({ service, index }: { service: Service; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-16 lg:py-24 ${
          isReversed ? "" : ""
        }`}
      >
        {/* Número y contenido */}
        <div
          className={`lg:col-span-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
        >
          {/* Número grande */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-8xl lg:text-9xl font-black text-gray-100 select-none leading-none">
              {service.number}
            </span>
          </motion.div>

          {/* Emoji y título */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{service.emoji}</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {service.title}
              </h3>
            </div>

            <p className="text-lg text-gray-500 mb-8">{service.subtitle}</p>
          </motion.div>

          {/* Features como lista simple */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 mb-8"
          >
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                className="flex items-start gap-3 text-gray-600"
              >
                <ChevronRight className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Precio y CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <div>
              <p className="text-sm text-gray-400 mb-1">Inversión</p>
              <p className="text-2xl font-bold text-gray-900">
                {service.price}
              </p>
            </div>

            <motion.a
              href="/contactanos"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors group/link"
            >
              <span>Solicitar cotización</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>

        {/* Imagen */}
        <div
          className={`lg:col-span-7 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100"
          >
            {imageError ? (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl block mb-4">{service.emoji}</span>
                  <p className="text-gray-400 text-sm">Imagen del servicio</p>
                </div>
              </div>
            ) : (
              <>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: isHovered ? 1.03 : 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  onError={() => setImageError(true)}
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            )}

            {/* Badge de precio flotante */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
            >
              <span className="text-sm font-bold text-gray-900">
                💰 {service.price}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Línea divisoria */}
      {index < services.length - 1 && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent origin-left"
        />
      )}
    </motion.article>
  );
}

export default function ServiciosSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 lg:py-32 border-b border-gray-100"
        >
          <div className="max-w-3xl">
            <p className="text-cyan-600 font-medium mb-4 tracking-wide uppercase text-sm">
              Lo que hacemos
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Soluciones integrales para el{" "}
              <span className="text-gray-400">acceso al agua</span>
            </h2>
          </div>
        </motion.div>

        {/* Lista de servicios */}
        <div>
          {services.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Footer section - Trust indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-50 mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100+", label: "Proyectos completados" },
              { value: "< 7", label: "Días de instalación" },
              { value: "40%", label: "Ahorro promedio" },
              { value: "24/7", label: "Soporte técnico" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <p className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
