// src/App.jsx
import "./index.css"; // IMPORTANTE: index.css primero (variables, tailwind)
import "./App.css"; // luego estilos específicos de la app
import Hero from "./components/Hero";
import Flavors from "./components/Flavors";
import Location from "./components/Location";

function App() {
  return (
    <>
      <Hero />
      <Flavors />
      <Location />
    </>
  );
}

export default App;
