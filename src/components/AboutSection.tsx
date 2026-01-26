import { motion } from "framer-motion";
import { Award, Briefcase, Users, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Award, text: "Mais de 30 anos no agronegócio" },
  { icon: Briefcase, text: "Experiência em empresas nacionais e multinacionais" },
  { icon: Users, text: "Gestão comercial e grandes contas" },
  { icon: TrendingUp, text: "Desenvolvimento de mercado e consultoria" },
];

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-forest relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-4">
            Quem está por trás do{" "}
            <span className="text-gradient-gold">AgroMentor</span>
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Photo placeholder - would be replaced with actual photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl bg-forest-deep border-2 border-gold/30 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gold-gradient flex items-center justify-center">
                      <span className="text-4xl font-serif font-bold text-forest-deep">FM</span>
                    </div>
                    <p className="text-xl font-serif text-gold font-bold">Fábio Mostasso</p>
                    <p className="text-sm text-cream-muted mt-1">Engenheiro Agrônomo</p>
                  </div>
                </div>
                {/* Golden accent */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-gold/20 -z-10" />
              </div>
            </motion.div>

            {/* Bio content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <p className="text-lg text-cream-muted leading-relaxed mb-8">
                <span className="text-gold font-semibold">Fábio Mostasso</span> é engenheiro agrônomo 
                com mais de 30 anos de atuação no agronegócio, com experiência em pesquisa, 
                desenvolvimento de mercado, gestão comercial, grandes contas e consultoria técnica 
                em empresas nacionais e multinacionais.
              </p>

              <p className="text-lg text-cream leading-relaxed mb-8">
                O AgroMentor nasce da aplicação prática dessa trajetória no desenvolvimento de 
                profissionais que querem jogar um <span className="text-gold font-semibold">jogo maior</span> no agronegócio.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-forest-deep/50 border border-gold/10"
                  >
                    <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm text-cream-muted">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
