// src/components/NewFlavors.tsx
import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";

/*
  NewFlavors component
  - Recibe un array de sabores nuevos (props).
  - Comentarios en español.
  - Uso utilidades Tailwind directas para colores, bordes y sombras.
*/

interface Flavor {
  name: string;
  description: string;
  color?: string;
  gradient?: string;
  imageUrl?: string;
  popular?: boolean;
  isNew?: boolean;
}

interface NewFlavorsProps {
  flavors: Flavor[];
}

function NewFlavors({ flavors }: NewFlavorsProps) {
  if (!flavors || flavors.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-[#3b2a18] mb-2">
          ¡Sabores Nuevos!
        </h3>
        <p className="text-lg text-[#6b6b6b]">
          Descubre nuestras últimas creaciones
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {flavors.map((flavor) => {
          const headerClasses = `h-40 relative overflow-hidden ${
            flavor.gradient ?? ""
          }`;
          const headerStyle =
            !flavor.gradient && flavor.color
              ? { background: flavor.color }
              : undefined;

          return (
            <Card
              key={flavor.name}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-[#3b2a18]/20 overflow-hidden relative"
            >
              {/* Badge "¡NUEVO!" */}
              <Badge className="absolute top-4 left-4 z-10 bg-amber-400 text-white font-bold animate-pulse px-3 py-1 rounded">
                ¡NUEVO!
              </Badge>

              <div className={headerClasses} style={headerStyle}>
                {flavor.imageUrl ? (
                  <img
                    src={flavor.imageUrl}
                    alt={flavor.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#fffaf0]/40 to-[#fff6de]/40 flex items-center justify-center">
                    <div className="text-6xl">🍦</div>
                  </div>
                )}

                {flavor.popular && (
                  <Badge className="absolute top-4 right-4 bg-[#3b2a18] text-white shadow-lg px-2 py-1 rounded">
                    Popular
                  </Badge>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#3b2a18] mb-3 group-hover:text-[#3b2a18]/80 transition-colors">
                  {flavor.name}
                </h3>
                <p className="text-[#6b6b6b] leading-relaxed text-lg">
                  {flavor.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default NewFlavors;
