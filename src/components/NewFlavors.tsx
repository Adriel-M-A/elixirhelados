import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { SafeImage } from "./SafeImage";

interface Flavor {
  name: string;
  description: string;
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
    <div className="mb-16 relative">
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-28 h-28 rounded-full bg-[#fff8dc]/30 animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-[#faf0e6]/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="text-center mb-8 relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-[#3b2a18] mb-2">
          ¡Sabores Nuevos!
        </h3>
        <p className="text-lg text-[#6b6b6b]">
          Descubre nuestras últimas creaciones
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
        {flavors.map((flavor, index) => (
          <Card
            key={flavor.name}
            className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-[#3b2a18]/20 overflow-hidden relative bg-white/95 backdrop-blur-sm"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Badge "¡NUEVO!" */}
            <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold animate-pulse px-3 py-1 rounded-full shadow-lg">
              ¡NUEVO!
            </Badge>

            <div className="h-40 relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
              {flavor.imageUrl ? (
                <SafeImage
                  src={flavor.imageUrl}
                  alt={`Helado de ${flavor.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackIcon="🍦"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#fffaf0]/40 to-[#fff6de]/40 flex items-center justify-center">
                  <div className="text-6xl animate-bounce">🍦</div>
                </div>
              )}

              {flavor.popular && (
                <Badge className="absolute top-4 right-4 bg-[#3b2a18] text-white shadow-lg px-2 py-1 rounded-full">
                  Popular
                </Badge>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none group-hover:from-black/40 transition-all duration-300"></div>
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
        ))}
      </div>
    </div>
  );
}

export default NewFlavors;
