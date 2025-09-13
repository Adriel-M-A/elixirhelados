import { Button } from "./ui/Button";
import { Instagram, ShoppingCart } from "lucide-react";
import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-strawberry rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-mint rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-vanilla rounded-full opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <img
            src={logo}
            alt="Elixir Heladería Logo"
            className="w-64 h-64 mx-auto drop-shadow-premium animate-float"
          />
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            Heladería Elixir
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Los mejores helados artesanales de Trelew. Sabores únicos y calidad
            premium que despiertan tus sentidos.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-premium transition-smooth px-8 py-6 text-lg"
              asChild
            >
              <a
                href="https://www.pedidosya.com.ar/restaurantes/trelew/heladeria-elixir-ef286799-2d2a-4cf7-a2f6-4321f55d3b52-menu?fbclid=PAZXh0bgNhZW0CMTEAAadzNloSxJth1iS_mtd17a-8oJ8dtjGvGA_8cIiLFfz2Du75dG7eLVOCYfSSiQ_aem_HWZv90-Wakl6lkswNb67UA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Pedí Online
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-6 text-lg bg-background/80 backdrop-blur-sm"
              asChild
            >
              <a
                href="https://www.instagram.com/elixirhelados/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Seguinos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
