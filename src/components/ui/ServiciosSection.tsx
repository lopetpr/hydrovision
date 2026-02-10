import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

import AnimatedStats from "./AnimatedStats";

export interface ServiceImage {
  src: string;
  width: number;
  height: number;
}

interface Service {
  id: number;
  number: string;
  emoji: string;
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  image: ServiceImage;
}

interface ServiciosSectionProps {
  images: {
    reconocimientoDron: ServiceImage;
    captacion: ServiceImage;
    polietileno: ServiceImage;
  };
}

function getServices(images: ServiciosSectionProps["images"]): Service[] {
  return [
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
      image: images.reconocimientoDron,
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
      image: images.captacion,
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
      price: "Bajo cotización",
      image: images.polietileno,
    },
  ];
}

function ServiceItem({
  service,
  index,
  totalServices,
}: {
  service: Service;
  index: number;
  totalServices: number;
}) {
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
        className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center py-10 sm:py-12 lg:py-24 ${
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
            className="mb-4 sm:mb-6"
          >
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#02B6D4] select-none leading-none">
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
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400">
                {service.title}
              </h3>
            </div>

            <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8">
              {service.subtitle}
            </p>
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
                <ChevronRight className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" />
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
              <p className="text-2xl font-bold text-indigo-500">
                {service.price}
              </p>
            </div>

            <motion.a
              href="/contactanos"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors group/link mt-6"
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
                  src={service.image.src}
                  width={service.image.width}
                  height={service.image.height}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: isHovered ? 1.03 : 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  loading="lazy"
                  decoding="async"
                  onError={() => setImageError(true)}
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Línea divisoria */}
      {index < totalServices - 1 && (
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

export default function ServiciosSection({ images }: ServiciosSectionProps) {
  const services = getServices(images);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16 lg:py-32 border-b border-gray-100"
        >
          <div className="max-w-3xl">
            <div className="mb-4 sm:mb-6 max-w-40">
              <p className="text-white font-medium mb-4 tracking-wide uppercase text-xs sm:text-sm bg-[#000000] p-2 rounded-2xl text-center w-full">
                Lo que hacemos
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#02B6D4] leading-tight">
              Soluciones integrales para{" "}
              <span className="text-gray-400">el acceso al agua</span>
            </h2>
          </div>
        </motion.div>

        {/* Lista de servicios */}
        <div>
          {services.map((service, index) => (
            <ServiceItem
              key={service.id}
              service={service}
              index={index}
              totalServices={services.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
