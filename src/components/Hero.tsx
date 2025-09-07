// src/components/Hero.jsx
import { Button } from "./ui/Button";
import { Instagram, ShoppingCart } from "lucide-react";
import logo from "../assets/logo.svg";

/*
  Hero component - versión ajustada en colores para parecerse a la imagen objetivo.
  Comentarios en español. Nombres (component, files, props) en inglés.
*/

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                        bg-gradient-to-br from-[#fffaf0]  via-[#e7f0e2] to-[#eaf8f0]"
    >
      {/* Decorative elements (bolas de fondo) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* fresa suave (muy pálido) */}
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 animate-pulse"
          style={{ backgroundColor: "#fdecec" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <img
            src={logo}
            alt="Elixir Heladería Logo"
            className="w-64 h-64 mx-auto filter drop-shadow-[0_20px_60px_rgba(0,0,0,0.12)] animate-float"
          />
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Título: color oscuro terroso para lograr contraste */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#3b2a18]">
            Heladería Elixir
          </h1>

          {/* Párrafo: gris neutral, lectura cómoda */}
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-[#6b6b6b]">
            Los mejores helados artesanales de Trelew. Sabores únicos y calidad
            premium que despiertan tus sentidos.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              /* Botón principal: fondo oscuro terroso, texto blanco, sombra suave */
              className="bg-[#3b2a18] hover:bg-[#4a3725] text-white shadow-[0_20px_40px_rgba(59,42,24,0.12)]
                         transition-all duration-300 ease-in-out px-8 py-6 text-lg"
              asChild
            >
              <a
                href="https://www.pedidosya.com.ar/restaurantes/trelew/heladeria-elixir-ef286799-2d2a-4cf7-a2f6-4321f55d3b52-menu?fbclid=PAZXh0bgNhZW0CMTEAAadnSkdHVKDsN0J6CQIDTpMMsvTTDkQvptkBR2hmPh1ahV1eOqDzr8KSfq321g_aem_6ksDtl2Xgch7REv996gzXw"
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
              /* Botón secundario: borde oscuro, fondo translúcido blanco y texto oscuro */
              className="border border-[#3b2a18] text-[#3b2a18] hover:bg-[#3b2a18] hover:text-white
                         transition-all duration-300 ease-in-out px-8 py-6 text-lg bg-white/80 backdrop-blur-sm"
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
}

export default Hero;
