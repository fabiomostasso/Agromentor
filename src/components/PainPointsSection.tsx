import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, UserX, Clock, HelpCircle } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    text: "Tem excelente conhecimento técnico, mas não consegue aplicar ou sente que o mercado não valoriza isso como deveria",
  },
  {
    icon: TrendingDown,
    text: "Só consegue fechar vendas concedendo descontos ou benefícios para o cliente, não consegue gerar valor nos seus produtos, e todo ano é a mesma luta",
  },
  {
    icon: UserX,
    text: "É visto como vendedor de produto, não como consultor",
  },
  {
    icon: Clock,
    text: "Trabalha muito, mas sente que poderia ganhar mais e ser mais respeitado",
  },
  {
    icon: HelpCircle,
    text: "Percebe que o cliente decide sem te consultar",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-forest relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-4">
            Você se reconhece em alguma{" "}
            <span className="text-gradient-gold">dessas situações?</span>
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-lg bg-forest-deep/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <point.icon className="w-5 h-5 text-gold" />
              </div>
              <p className="text-lg text-cream-muted leading-relaxed group-hover:text-cream transition-colors">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-xl md:text-2xl font-serif text-gold">
            👉 O problema não é a sua técnica.{" "}
            <span className="font-bold">É o seu posicionamento.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
