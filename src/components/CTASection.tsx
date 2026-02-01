import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
const CTASection = () => {
  return <section id="cta" className="py-20 lg:py-32 bg-forest-deep relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      
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
      }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6">
            Dê o <span className="text-gradient-gold">próximo passo</span>
          </h2>

          <p className="text-lg md:text-xl text-cream-muted leading-relaxed mb-8 max-w-2xl mx-auto">Se você sente que está pronto para subir de nível profissional e deixar de ser apenas mais um mero vendedor no mercado do agronegócio, o Fundamentos do Consultor AgroMentor é o seu ponto de partida.<span className="text-gold font-semibold">Fundamentos do Consultor AgroMentor</span> é 
            o seu ponto de partida.
          </p>

          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="inline-block mb-8">
            <Button variant="premium" size="xl" className="text-lg px-12 py-6 h-auto gold-glow group" asChild>
              <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                <span>Manifeste seu interesse no Fundamentos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
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
          duration: 0.5,
          delay: 0.3
        }} className="flex items-center justify-center gap-2 text-cream-muted">
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-sm">
              As vagas são limitadas para garantir qualidade, acompanhamento e aplicação prática.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default CTASection;