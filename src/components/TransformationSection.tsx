import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const transformations = [{
  from: "De vendedor de produto",
  to: "consultor de confiança"
}, {
  from: "De disputa por preço",
  to: "defesa de valor"
}, {
  from: "De relação pontual",
  to: "parceria de longo prazo"
}, {
  from: "De profissional substituível",
  to: "profissional indispensável"
}];
const TransformationSection = () => {
  return <section className="py-20 lg:py-28 bg-forest relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-4">
            A transformação que o{" "}
            <span className="text-gradient-gold">AgroMentor</span> entrega
          </h2>
          <p className="text-lg text-cream-muted max-w-3xl mx-auto mt-6">
            Ao longo do programa, você deixa de ser apenas mais um profissional no mercado 
            e passa a atuar como <span className="text-gold font-semibold">Consultor Técnico Estratégico</span>:
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {transformations.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: index % 2 === 0 ? -30 : 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl bg-forest-deep/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
              <span className="text-lg text-cream-muted flex-1 text-center sm:text-right">
                {item.from}
              </span>
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <ArrowRight className="w-6 h-6 text-forest-deep" />
              </div>
              <span className="text-lg text-gold font-bold flex-1 text-center sm:text-left">
                {item.to}
              </span>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.5
      }} className="text-center mt-12">
          <p className="text-xl md:text-2xl text-cream font-serif">
            O resultado é{" "}
            <span className="text-gold">mais autoridade</span>,{" "}
            <span className="text-gold">mais respeito</span>,{" "}
            <span className="text-gold">melhores margens</span> e{" "}
            <span className="text-gold">clientes fiéis</span>.
          </p>
        </motion.div>
      </div>
    </section>;
};
export default TransformationSection;