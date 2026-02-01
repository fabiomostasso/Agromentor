import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forWhom = [
  "Profissionais das Ciências Agrárias que atuam nas áreas comercial de empresa ou em consultoria profissional",
  "Consultores, RTVs, representantes e demais profissionais da área comercial",
  "Profissionais com vivência prática no agro",
  "Quem quer parar de apenas disputar preço e começar a gerar valor no seu trabalho e produtividade para o cliente",
];

const notForWhom = [
  "Iniciantes sem experiência prática",
  "Quem busca fórmula mágica ou atalhos",
  "Quem não está disposto a mudar postura e mentalidade",
];

const AudienceSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-forest relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream">
            Para quem é o{" "}
            <span className="text-gradient-gold">Fundamentos do Consultor AgroMentor</span>
          </h2>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Para quem é */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-forest border-2 border-gold/30"
          >
            <h3 className="text-2xl font-serif font-bold text-gold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center">
                <Check className="w-6 h-6 text-forest-deep" />
              </div>
              Para quem é
            </h3>
            <ul className="space-y-4">
              {forWhom.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-cream">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Para quem não é */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl bg-forest border border-muted-foreground/30"
          >
            <h3 className="text-2xl font-serif font-bold text-cream-muted mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <X className="w-6 h-6 text-muted-foreground" />
              </div>
              Para quem não é
            </h3>
            <ul className="space-y-4">
              {notForWhom.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                  <span className="text-cream-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
