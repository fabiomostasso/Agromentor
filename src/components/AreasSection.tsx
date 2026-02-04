import { motion } from "framer-motion";
import { Cog, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
const areas = [{
  number: "1",
  icon: Cog,
  title: "AgroMentor PROFESSIONAL",
  description: "Voltada para o desenvolvimento e o aperfeiçoamento de profissionais das Ciências Agrárias.",
  formats: null,
  formatsNote: null,
  levels: [{
    name: "GROUP",
    target: "Mentoria em Grupos Homogêneos",
    detail: "Mentoria em grupo com foco prático, trocas de experiências e construção da base consultiva."
  }, {
    name: "MIX",
    target: "Mentoria em Grupos com sessões individuais",
    detail: "Plano GROUP mais reuniões individuais, para ajustes personalizados, aprofundamento estratégico e acompanhamento direcionado."
  }, {
    name: "PRIVATE",
    target: "Mentoria Individual Premium",
    detail: "Nível máximo do Programa AgroMentor PROFESSIONAL, mentoria totalmente personalizada, com foco em posicionamento profissional, grandes negócios, estratégia de carreira e crescimento financeiro."
  }],
  buttonText: "Saiba mais sobre o AgroMentor PROFESSIONAL",
  buttonHref: "https://agromentor.com.br/professional/"
}, {
  number: "2",
  icon: Building2,
  title: "AgroMentor BUSINESS",
  description: "Voltado para equipes comerciais de grandes empresas do agronegócio das áreas B2B, B2C e B2BC.",
  formats: null,
  formatsNote: null,
  levels: [{
    name: "MANAGER",
    target: "Diretores e gerentes",
    detail: "Alinhamento estratégico entre técnica, comercial e gestão"
  }, {
    name: "COMERCIAL",
    target: "Gestores e equipes comerciais",
    detail: "Desenvolvimento da verdadeira venda consultiva, deposicionamento e geração de valor dos produtos, e a fidelização do cliente."
  }, {
    name: "KEY ACCOUNT",
    target: "Suporte para gestor e equipe no atendimento de clientes chave.",
    detail: "Planejamento estratégico com gestores de conta chave, individualizado para o perfil do cliente, com objetivo fim de fidelização, proteção e retenção de conta-chave."
  }],
  buttonText: "Saiba mais sobre o AgroMentor BUSINESS",
  buttonHref: "https://agromentor.com.br/business/"
}];
const AreasSection = () => {
  return <section id="areas" className="py-20 lg:py-28 bg-forest relative">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-4">
            Estrutura do <span className="text-gradient-gold">Programa AgroMentor</span>
          </h2>
          <p className="text-lg text-cream-muted max-w-2xl mx-auto mt-4">O Programa AgroMentor é dividido em duas grandes áreas:</p>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {areas.map((area, index) => <motion.div key={index} initial={{
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
        }} className="flex flex-col">
              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-forest-deep border border-gold/20 hover:border-gold/40 transition-all duration-300 group flex-1">
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg text-forest-deep font-bold text-xl font-serif">
                  {area.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-forest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gold/20 mx-auto">
                  <area.icon className="w-8 h-8 text-gold" />
                </div>

                {/* Content */}
                <h3 className="font-serif font-bold text-gold mb-3 text-center">
                  {area.title.includes("PROFESSIONAL") || area.title.includes("BUSINESS") ? <span className="flex flex-col items-center">
                      <span className="text-xl">{area.title.split(" ")[0]}</span>
                      <span className="text-[1.6rem]">{area.title.split(" ")[1]}</span>
                    </span> : <span className="text-xl">{area.title}</span>}
                </h3>
                <p className="text-cream-muted leading-relaxed text-center">
                  {area.description}
                </p>
                
                {/* Formatos de entrega */}
                {area.formats && <div className="mt-4">
                    <p className="text-cream-muted font-semibold mb-2">Níveis de atuação:</p>
                    <ul className="space-y-2">
                      {area.formats.map((format, formatIndex) => <li key={formatIndex} className="flex items-start gap-2 text-cream-muted">
                          <span className="text-gold">•</span>
                          <span>{format}</span>
                        </li>)}
                    </ul>
                    {area.formatsNote && <p className="text-cream-muted mt-4 text-sm">{area.formatsNote}</p>}
                  </div>}
                
                {/* Níveis de atuação */}
                {area.levels && <div className="mt-4">
                    <p className="text-cream-muted font-semibold mb-2">Níveis de atuação:</p>
                    <ul className="space-y-3">
                      {area.levels.map((level, levelIndex) => <li key={levelIndex} className="text-cream-muted">
                          <div className="flex items-start gap-2">
                            <span className="text-gold">•</span>
                            <div>
                              <span className="font-bold text-cream">{level.name}</span>
                              <span className="text-cream-muted"> – {level.target}</span>
                              <div className="flex items-start gap-2 mt-1 ml-2">
                                <span className="text-gold">•</span>
                                <span className="text-cream-muted text-sm">{level.detail}</span>
                              </div>
                            </div>
                          </div>
                        </li>)}
                    </ul>
                  </div>}
              </div>
              
              {/* Button outside card */}
              {area.buttonText && <div className="mt-6">
                  <a href={area.buttonHref} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-full py-4 px-6 rounded-lg bg-forest-deep border-2 border-gold hover:border-gold/80 transition-all duration-300">
                    {area.buttonText.includes("AgroMentor") ? <>
                        <span className="text-cream text-[0.75em]">Saiba mais sobre o programa</span>
                        <span className="font-bold text-[1.3em] text-gold">
                          AgroMentor {area.buttonText.includes("PROFESSIONAL") ? "PROFESSIONAL" : "BUSINESS"}
                        </span>
                      </> : <span className="text-cream">{area.buttonText}</span>}
                  </a>
                </div>}
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default AreasSection;