import logo from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-forest-deep border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img src={logo} alt="AgroMentor" className="h-60 mb-6" />
          
          {/* Tagline */}
          <p className="text-cream-muted max-w-xl font-serif italic mb-6">
            Formando consultores técnicos que geram valor, constroem confiança 
            e se tornam indispensáveis no agronegócio.
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-6" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AgroMentor. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
