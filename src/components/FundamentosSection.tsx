import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Wifi, BookOpen, Users } from "lucide-react";
const benefits = ["Clareza sobre seu papel no agro moderno", "Postura profissional e consultiva", "Entendimento de valor além do produto", "Base do Método AgroMentor"];
const format = [{
  icon: Wifi,
  text: "Online"
}, {
  icon: BookOpen,
  text: "Conteúdo direto e aplicável"
}, {
  icon: Users,
  text: "Acesso inicial ao ecossistema AgroMentor"
}];
const FundamentosSection = () => {
  return <section id="fundamentos" className="py-20 lg:py-28 bg-forest-deep relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

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
      }} className="text-center mb-12">
          <p className="text-gold text-lg mb-4">A porta de entrada para o Programa AgroMentor PROFESSIONAL**</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-4">
            Fundamentos do Consultor{" "}
            <span className="text-gradient-gold">AgroMentor</span>
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
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
            <p className="text-lg text-cream-muted leading-relaxed max-w-3xl mx-auto">
              Este é o <span className="text-gold font-semibold">primeiro passo obrigatório</span> para 
              quem deseja entrar no AgroMentor. Um programa criado para ajustar mentalidade, 
              postura e visão profissional, preparando você para atuar como consultor técnico estratégico.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* O que você vai desenvolver */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="p-8 rounded-2xl bg-forest-deep border border-gold/20">
              <h3 className="text-2xl font-serif font-bold text-cream mb-6">
                O que você vai desenvolver:
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-forest-deep" />
                    </div>
                    <span className="text-cream-muted">{benefit}</span>
                  </li>)}
              </ul>
            </motion.div>

            {/* Formato */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="p-8 rounded-2xl bg-forest-deep border border-gold/20">
              <h3 className="text-2xl font-serif font-bold text-cream mb-6">
                Formato:
              </h3>
              <ul className="space-y-4 mb-8">
                {format.map((item, index) => <li key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-cream">{item.text}</span>
                  </li>)}
              </ul>

              <div className="p-4 rounded-lg bg-gold/10 border border-gold/20">
                <p className="text-gold font-serif italic text-center text-lg md:text-xl">
                  👉 Este não é um curso técnico. É uma mudança de postura profissional.
                </p>
              </div>

              <p className="text-cream-muted text-sm mt-6 italic">
                *Para o Programa AgroMentor BUSINESS, a mentoria "<span className="text-gold">Fundamentos do Consultor AgroMentor</span>" é o primeiro módulo do programa.
              </p>
            </motion.div>
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
        }} className="text-center">
            <Button variant="premium" size="xl" asChild>
              <a href="#cta">Quero começar o Programa AgroMentor PROFESSIONAL</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default FundamentosSection;