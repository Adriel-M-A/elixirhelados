import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import NewFlavors from "../components/NewFlavors";
import flavorsData from "../data/flavors.json";
import { SafeImage } from "../components/SafeImage";

interface Flavor {
  name: string;
  description: string;
  color: string;
  gradient: string;
  imageUrl: string;
  popular: boolean;
  isNew: boolean;
}

const Flavors = () => {
  const flavors = flavorsData as Flavor[];
  const newFlavors = flavors.filter((flavor) => flavor.isNew);
  const regularFlavors = flavors.filter((flavor) => !flavor.isNew);

  return (
    <section className="py-20 bg-gradient-to-br from-[#fffaf0] via-[#fef9f0] to-[#fdf6e3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestros Sabores
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada helado es elaborado artesanalmente con ingredientes premium
            seleccionados especialmente para crear experiencias únicas.
          </p>
        </div>

        {/* New Flavors Section */}
        <NewFlavors flavors={newFlavors} />

        {/* Regular Flavors Section */}
        {regularFlavors.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-2">
                Sabores Clásicos
              </h3>
              <p className="text-lg text-muted-foreground">
                Nuestros sabores tradicionales que siempre están disponibles
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {regularFlavors.map((flavor) => (
                <Card
                  key={flavor.name}
                  className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-2  overflow-hidden"
                >
                  <div className="h-32 relative bg-gradient-to-br from-orange-50 to-orange-100">
                    <SafeImage
                      src={flavor.imageUrl}
                      alt={flavor.name}
                      className="w-full h-full object-cover"
                      fallbackIcon="🍦"
                    />
                    {flavor.popular && (
                      <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground shadow-soft">
                        Popular
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                      {flavor.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {flavor.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-lg text-[#6b6b6b]">
            ¡Y muchos sabores más disponibles en nuestra tienda!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Flavors;
