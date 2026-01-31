import { motion } from "framer-motion";
import { Brain, Search, MessageCircle, Heart, TrendingUp } from "lucide-react";
const pillars = [{
  number: "1",
  icon: Brain,
  title: "Postura e Mentalidade Profissional",
  description: "Você aprende a assumir o papel de consultor, com responsabilidade sobre resultado, postura profissional e visão estratégica."
}, {
  number: "2",
  icon: Search,
  title: "Diagnóstico Técnico com Visão de Negócio",
  description: "Aprenda a enxergar além do produto, entender o sistema produtivo e o negócio do cliente."
}, {
  number: "3",
  icon: MessageCircle,
  title: "Comunicação de Valor e Autoridade",
  description: "Transforme conhecimento técnico em argumentos claros, objetivos e economicamente relevantes."
}, {
  number: "4",
  icon: Heart,
  title: "Relacionamento, Confiança e Fidelização",
  description: "Construa relacionamentos sólidos, duradouros e baseados em confiança real."
}, {
  number: "5",
  icon: TrendingUp,
  title: "Estratégia Comercial Consultiva",
  description: "Venda como consequência do trabalho técnico bem feito, defendendo preço e gerando valor."
}];
const MethodSection = () => {
  return <section id="metodo" className="py-20 lg:py-28 bg-forest-deep relative">
      {/* Golden accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-4">O Método do Programa AgroMentor<span className="text-gradient-gold">AgroMentor</span>
          </h2>
          <p className="text-lg text-cream-muted max-w-2xl mx-auto mt-4">
            O AgroMentor é estruturado em um método próprio, baseado em cinco pilares fundamentais:
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className={`relative p-8 rounded-2xl bg-forest border border-gold/20 hover:border-gold/40 transition-all duration-300 group ${index === 4 ? "md:col-span-2 lg:col-span-1 lg:mx-auto lg:w-full" : ""}`}>
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg text-forest-deep font-bold text-xl font-serif">
                {pillar.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-forest-deep flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gold/20">
                <pillar.icon className="w-8 h-8 text-gold" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-bold text-cream mb-3">
                {pillar.title}
              </h3>
              <p className="text-cream-muted leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default MethodSection;