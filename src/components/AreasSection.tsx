import { motion } from "framer-motion";
import { Leaf, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  {
    number: "1",
    icon: Leaf,
    title: "AgroMentor PROFESSIONAL",
    description: "Voltado ao desenvolvimento individual do profissional das Ciências Agrárias.",
    formats: [
      "Mentoria em grupo",
      "Mentoria mista (grupo + encontros individuais)",
      "Mentoria individual premium",
    ],
    formatsNote: "Os formatos são definidos conforme o estágio profissional e os objetivos do participante.",
    levels: null,
    buttonText: "Saiba mais sobre o AgroMentor Professional",
  },
  {
    number: "2",
    icon: Briefcase,
    title: "AgroMentor BUSINESS",
    description: "Voltado para empresas do agronegócio.",
    formats: null,
    formatsNote: null,
    levels: [
      {
        name: "EXECUTIVE",
        target: "Diretores e gerentes",
        detail: "Alinhamento estratégico entre técnica, comercial e gestão",
      },
      {
        name: "COMERCIAL",
        target: "Gestores e equipes comerciais",
        detail: "Desenvolvimento de venda consultiva, posicionamento e geração de valor",
      },
      {
        name: "KEY ACCOUNT",
        target: "Suporte para gestor e equipe no atendimento de clientes chave.",
        detail: "Planejamento estratégico, fidelização e proteção de contas-chave",
      },
    ],
    buttonText: "Saiba mais sobre o AgroMentor Business",
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
            Estrutura do <span className="text-gradient-gold">Programa AgroMentor</span>
          </h2>
          <p className="text-lg text-cream-muted max-w-2xl mx-auto mt-4">
            O AgroMentor é dividido em duas grandes áreas:
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-forest-deep border border-gold/20 hover:border-gold/40 transition-all duration-300 group flex-1">
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg text-forest-deep font-bold text-xl font-serif">
                  {area.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-forest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gold/20">
                  <area.icon className="w-8 h-8 text-gold" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-gold mb-3">
                  {area.title}
                </h3>
                <p className="text-cream-muted leading-relaxed">
                  {area.description}
                </p>
                
                {/* Formatos de entrega */}
                {area.formats && (
                  <div className="mt-4">
                    <p className="text-cream-muted font-semibold mb-2">Formatos de entrega:</p>
                    <ul className="space-y-2">
                      {area.formats.map((format, formatIndex) => (
                        <li key={formatIndex} className="flex items-start gap-2 text-cream-muted">
                          <span className="text-gold">•</span>
                          <span>{format}</span>
                        </li>
                      ))}
                    </ul>
                    {area.formatsNote && (
                      <p className="text-cream-muted mt-4 text-sm">{area.formatsNote}</p>
                    )}
                  </div>
                )}
                
                {/* Níveis de atuação */}
                {area.levels && (
                  <div className="mt-4">
                    <p className="text-cream-muted font-semibold mb-2">Níveis de atuação:</p>
                    <ul className="space-y-3">
                      {area.levels.map((level, levelIndex) => (
                        <li key={levelIndex} className="text-cream-muted">
                          <div className="flex items-start gap-2">
                            <span className="text-gold">•</span>
                            <div>
                              <span className="font-bold text-cream">{level.name}</span>
                              <span className="text-cream-muted"> – {level.target}</span>
                              <div className="flex items-start gap-2 mt-1 ml-2">
                                <span className="text-gold">•</span>
                                <span className="text-cream-muted text-sm">{level.detail}</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Button outside card */}
              {area.buttonText && (
                <div className="mt-6">
                  <Button variant="gold" size="lg" className="w-full" asChild>
                    <a href="#">{area.buttonText}</a>
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
