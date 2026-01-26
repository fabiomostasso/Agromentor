import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-transparent.png";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-serif text-gold-light mb-4"
            >
              Deixe de ser apenas um vendedor técnico.
            </motion.h2>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6"
            >
              <span className="text-cream">Torne-se um </span>
              <span className="text-gradient-gold">consultor indispensável</span>
              <span className="text-cream"> no agronegócio.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-cream-muted leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              O AgroMentor é um programa de desenvolvimento profissional para engenheiros agrônomos 
              e profissionais das Ciências Agrárias que desejam subir de nível, gerar valor real 
              para seus clientes e construir uma carreira sólida, respeitada e bem remunerada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="premium" size="xl" asChild>
                <a href="#cta">Quero me tornar um consultor</a>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <a href="#metodo">Conheça o Método</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl animate-pulse" />
              <img 
                src={logo} 
                alt="AgroMentor" 
                className="relative w-64 md:w-80 lg:w-96 drop-shadow-2xl animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Golden line decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
};

export default HeroSection;
