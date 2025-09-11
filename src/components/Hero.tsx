// src/components/Hero.jsx
import { Button } from "./ui/Button";
import { Instagram, ShoppingCart } from "lucide-react";
import logo from "../assets/logo.svg";

/*
  Hero component - versión actualizada con estilos personalizados Tailwind v4
  Usando las nuevas utilidades y componentes personalizados
*/

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-gradient-hero"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bolas de fondo con animaciones suaves */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cream-100/20 animate-pulse-soft" />
        <div
          className="absolute top-40 right-20 w-24 h-24 rounded-full bg-cream-200/15 animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-cream-300/25 animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full bg-cream-400/20 animate-pulse-soft"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo con animación flotante */}
        <div className="mb-8">
          <img
            src={logo}
            alt="Elixir Heladería Logo"
            className="w-64 h-64 mx-auto ice-cream-glow animate-float transition-smooth"
          />
        </div>

        {/* Contenido principal */}
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          {/* Título principal */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-4 text-primary-custom
                         transition-smooth hover:text-primary-hover-custom"
          >
            Heladería Elixir
          </h1>

          {/* Subtítulo */}
          <p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-secondary-custom
                        leading-relaxed"
          >
            Los mejores helados artesanales de Trelew. Sabores únicos y calidad
            premium que despiertan tus sentidos.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="btn-primary-custom shadow-glow-primary text-lg px-8 py-6 
                         hover:shadow-glow-cream transition-smooth"
              asChild
            >
              <a
                href="https://www.pedidosya.com.ar/restaurantes/trelew/heladeria-elixir-ef286799-2d2a-4cf7-a2f6-4321f55d3b52-menu?fbclid=PAZXh0bgNhZW0CMTEAAadnSkdHVKDsN0J6CQIDTpMMsvTTDkQvptkBR2hmPh1ahV1eOqDzr8KSfq321g_aem_6ksDtl2Xgch7REv996gzXw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-smooth hover:scale-105"
              >
                <ShoppingCart className="w-5 h-5" />
                Pedí Online
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary-custom text-primary-custom 
                         hover:bg-primary-custom hover:text-white
                         transition-smooth px-8 py-6 text-lg 
                         cream-backdrop shadow-soft hover:shadow-premium
                         hover:scale-105"
              asChild
            >
              <a
                href="https://www.instagram.com/elixirhelados/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-smooth"
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
}

export default Hero;
