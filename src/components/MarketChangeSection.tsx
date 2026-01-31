import { motion } from "framer-motion";
import { Target, MessageSquare, Handshake, Users } from "lucide-react";
const capabilities = [{
  icon: Target,
  text: "Diagnosticar problemas reais"
}, {
  icon: MessageSquare,
  text: "Comunicar valor"
}, {
  icon: Handshake,
  text: "Construir confiança"
}, {
  icon: Users,
  text: "Atuar como parceiro estratégico do cliente"
}];
const MarketChangeSection = () => {
  return <section className="py-20 lg:py-28 bg-forest-deep relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
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
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6">
              O agronegócio mudou.{" "}
              <span className="text-gradient-gold">
Você profissional do Agronegócio precisa mudar junto.</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

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
          delay: 0.2
        }} className="text-center mb-12">
            <p className="text-lg md:text-xl text-cream-muted leading-relaxed">Produtos viraram commodities. A informação está disponível. O cliente compara, questiona e escolhe. O Produtor não quer apenas produto, preço e tapinha nas costas. Ele quer SOLUÇÃO!!</p>
            <p className="text-lg md:text-xl text-cream mt-4 font-medium">
              Nesse cenário, sobrevive e cresce quem consegue:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {capabilities.map((cap, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3 + index * 0.1
          }} className="flex items-center gap-4 p-5 rounded-xl bg-forest border border-gold/20 hover:border-gold/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-gold-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <cap.icon className="w-6 h-6 text-forest-deep" />
                </div>
                <span className="text-lg text-cream font-medium">{cap.text}</span>
              </motion.div>)}
          </div>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="text-center text-xl md:text-2xl font-serif text-gold">É exatamente isso que o Programa AgroMentor desenvolve.<span className="font-bold"></span> desenvolve.
          </motion.p>
        </div>
      </div>
    </section>;
};
export default MarketChangeSection;