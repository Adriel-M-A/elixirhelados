// src/components/Flavors.tsx
import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";
import NewFlavors from "./NewFlavors";
import flavorsData from "../data/flavors.json";
// Importa las imágenes manualmente
import frambuesaReina from "../assets/frambuesa-reina.png";

/*
  Flavors component
  - Comentarios en español.
  - Reemplacé clases personalizadas por utilidades Tailwind directas.
  - Usa fallback por si flavor.color (hex) está disponible en data.
*/

interface Flavor {
  name: string;
  description: string;
  imageUrl?: string;
  popular?: boolean;
  isNew?: boolean;
}

function Flavors() {
  const flavors = flavorsData as unknown as Flavor[];
  const newFlavors = flavors.filter((flavor) => flavor.isNew);
  const regularFlavors = flavors.filter((flavor) => !flavor.isNew);

  // Mapea nombres de archivo a imports
  const imageMap: Record<string, string> = {
    "frambuesa-reina.png": frambuesaReina,
    // agrega más si tienes más imágenes
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#fffaf0] via-[#fff4f2] to-[#f7f3ef]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3b2a18] mb-4">
            Nuestros Sabores
          </h2>
          <p className="text-xl text-[#6b6b6b] max-w-2xl mx-auto">
            Cada helado es elaborado artesanalmente con ingredientes premium
            seleccionados especialmente para crear experiencias únicas.
          </p>
        </div>

        {/* New Flavors Section */}
        <NewFlavors flavors={newFlavors} />

        {/* Regular Flavors Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {regularFlavors.map((flavor) => {
            // Solo fondo por defecto si no hay imagen
            let headerClasses = "h-32 relative overflow-hidden";
            if (!flavor.imageUrl) {
              headerClasses += " bg-gradient-to-br from-[#fffaf0] to-[#fff6de]";
            }

            // Si hay imageUrl, busca en el map si es local
            let imgSrc = "";
            if (flavor.imageUrl) {
              const fileName = flavor.imageUrl.split("/").pop() || "";
              imgSrc = imageMap[fileName] || flavor.imageUrl;
            }

            return (
              <Card
                key={flavor.name}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden"
              >
                <div className={headerClasses}>
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={flavor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl">🍦</div>
                    </div>
                  )}

                  {/* Badge "Popular" */}
                  {flavor.popular && (
                    <Badge className="absolute top-3 right-3 bg-[#3b2a18] text-white shadow-lg px-2 py-1 rounded">
                      Popular
                    </Badge>
                  )}

                  {/* Overlay ligero para contraste */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#3b2a18] mb-3 group-hover:text-[#3b2a18]/80 transition-colors">
                    {flavor.name}
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed">
                    {flavor.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-[#6b6b6b]">
            ¡Y muchos sabores más disponibles en nuestra tienda!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Flavors;
