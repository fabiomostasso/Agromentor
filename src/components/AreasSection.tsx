import { motion } from "framer-motion";
import { Leaf, Bug, FlaskConical, Droplets, Mountain } from "lucide-react";

const areas = [
  {
    number: "1",
    icon: Leaf,
    title: "Nutrição de Plantas",
    description: "Domine a arte de diagnosticar e recomendar soluções nutricionais que maximizam a produtividade.",
  },
  {
    number: "2",
    icon: Bug,
    title: "Manejo Integrado de Pragas",
    description: "Desenvolva estratégias de controle eficientes, sustentáveis e economicamente viáveis.",
  },
  {
    number: "3",
    icon: FlaskConical,
    title: "Fitossanidade",
    description: "Identifique e trate doenças com precisão, protegendo a lavoura e o investimento do cliente.",
  },
  {
    number: "4",
    icon: Droplets,
    title: "Irrigação e Manejo Hídrico",
    description: "Otimize o uso da água para garantir eficiência e sustentabilidade na produção.",
  },
  {
    number: "5",
    icon: Mountain,
    title: "Manejo de Solo",
    description: "Construa solos saudáveis e produtivos como base para resultados consistentes.",
  },
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-20 lg:py-28 bg-forest relative">
      {/* Golden accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-4">
            Áreas de <span className="text-gradient-gold">Atuação</span>
          </h2>
          <p className="text-lg text-cream-muted max-w-2xl mx-auto mt-4">
            Especialize-se nas principais áreas técnicas do agronegócio com visão consultiva:
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl bg-forest-deep border border-gold/20 hover:border-gold/40 transition-all duration-300 group ${
                index === 4 ? "md:col-span-2 lg:col-span-1 lg:mx-auto lg:w-full" : ""
              }`}
            >
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg text-forest-deep font-bold text-xl font-serif">
                {area.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-forest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gold/20">
                <area.icon className="w-8 h-8 text-gold" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-bold text-cream mb-3">
                {area.title}
              </h3>
              <p className="text-cream-muted leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
