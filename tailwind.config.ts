import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // En Tailwind v4, la mayoría de la configuración se hace en CSS
  // Este archivo solo se usa para contenido y algunas configuraciones básicas
};

export default config;
