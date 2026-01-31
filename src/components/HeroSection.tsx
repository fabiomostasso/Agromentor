import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-transparent.png";
import heroBackground from "@/assets/hero-background.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-20">
        {/* Logo at Top */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8
      }} className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl animate-pulse" />
            <img alt="AgroMentor" className="relative w-[36rem] md:w-[48rem] lg:w-[54rem] drop-shadow-2xl animate-float" src="/lovable-uploads/cfea007f-cbf3-43eb-ad13-57337127fdef.png" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="text-center max-w-4xl mx-auto">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="text-xl md:text-2xl font-serif text-gold-light mb-4">Deixe de ser apenas um vendedor</motion.h2>
          
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            <span className="text-cream">Torne-se um </span>
            <span className="text-gradient-gold">consultor indispensável</span>
            <span className="text-cream"> para seu cliente do agronegócio.</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="text-lg md:text-xl text-cream-muted leading-relaxed mb-8 max-w-2xl mx-auto">O AgroMentor é um programa de desenvolvimento profissional para profissionais das Ciências Agrárias, em geral, que desejam subir de nível, gerar valor real para seus clientes, conquistar a fidelidade deles e construir uma carreira sólida, respeitada e bem remunerada.</motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.7
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="goldOutline" size="xl" asChild>
              <a href="#metodo">Conheça o Programa Agromentor</a>
            </Button>
            <Button variant="premium" size="xl" asChild>
              <a href="#fundamentos">Quero me tornar um consultor</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Golden line decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>;
};
export default HeroSection;