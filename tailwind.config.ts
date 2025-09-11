import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Colores personalizados para la heladería
      colors: {
        // Colores principales
        "primary-custom": "var(--color-primary)",
        "primary-hover-custom": "var(--color-primary-hover)",
        "text-secondary-custom": "var(--color-text-secondary)",

        // Paleta cremita para heladería
        cream: {
          50: "#5A2328", // cream-light
          100: "#5A2328", // cream-medium
          200: "#5A2328", // cream-warm
          300: "#5A2328", // cream-soft
          400: "#5A2328", // cream-pale
          500: "#5A2328", // wheat
          600: "#5A2328", // burlywood
          700: "#5A2328", // tan
          800: "#5A2328", // darker tan
          900: "#5A2328", // darker brown
        },

        // Colores complementarios para badges y acentos
        amber: {
          350: "#fbbf24", // Para badges "NUEVO"
          450: "#f59e0b", // Para hovers
        },
      },

      // Animaciones personalizadas
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        shimmer: "shimmer 1.5s infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "bounce-gentle": "bounce-gentle 2s infinite",
        "spin-slow": "spin 3s linear infinite",
      },

      // Keyframes para las animaciones
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200px 0" },
          "100%": { backgroundPosition: "calc(200px + 100%) 0" },
        },
        "pulse-soft": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.05)",
          },
        },
        "bounce-gentle": {
          "0%, 20%, 53%, 80%, 100%": {
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: "translate3d(0, 0, 0)",
          },
          "40%, 43%": {
            animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            transform: "translate3d(0, -8px, 0)",
          },
          "70%": {
            animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            transform: "translate3d(0, -4px, 0)",
          },
          "90%": {
            transform: "translate3d(0, -2px, 0)",
          },
        },
      },

      // Sombras personalizadas
      boxShadow: {
        soft: "var(--shadow-soft)",
        premium: "var(--shadow-premium)",
        "card-hover": "var(--shadow-card-hover)",
        "glow-cream": "0 0 20px rgba(255, 248, 220, 0.6)",
        "glow-primary": "0 0 20px rgba(59, 42, 24, 0.3)",
      },

      // Gradientes de fondo personalizados
      backgroundImage: {
        "gradient-premium":
          "linear-gradient(135deg, var(--color-cream-light) 0%, var(--color-cream-medium) 50%, var(--color-cream-warm) 100%)",
        "gradient-hero":
          "linear-gradient(135deg, var(--color-cream-light) 0%, #e7f0e2 50%, #eaf8f0 100%)",
        "gradient-fallback":
          "linear-gradient(135deg, var(--color-fallback-from) 0%, var(--color-fallback-to) 100%)",
        "shimmer-gradient":
          "linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px)",
      },

      // Tamaños personalizados
      spacing: {
        "18": "4.5rem", // 72px
        "88": "22rem", // 352px - para elementos grandes
        "128": "32rem", // 512px - para contenedores amplios
      },

      // Borders radius personalizados
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      // Filtros personalizados
      backdropBlur: {
        xs: "2px",
      },

      // Transiciones personalizadas
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      // Typography personalizada
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    // Plugin para componentes personalizados
    function ({ addComponents, theme }) {
      addComponents({
        ".btn-primary-custom": {
          backgroundColor: theme("colors.primary-custom"),
          color: "white",
          padding: theme("spacing.3") + " " + theme("spacing.6"),
          borderRadius: theme("borderRadius.lg"),
          fontWeight: theme("fontWeight.semibold"),
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: theme("colors.primary-hover-custom"),
            transform: "translateY(-2px)",
            boxShadow: theme("boxShadow.premium"),
          },
        },
        ".card-ice-cream": {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderRadius: theme("borderRadius.2xl"),
          border: "1px solid rgba(255, 255, 255, 0.2)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-8px) scale(1.02)",
            boxShadow: theme("boxShadow.card-hover"),
          },
        },
      });
    },
  ],
};

export default config;
