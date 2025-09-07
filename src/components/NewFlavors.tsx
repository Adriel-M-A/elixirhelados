import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";

interface Flavor {
  name: string;
  description: string;
  color: string;
  gradient: string;
  imageUrl: string;
  popular: boolean;
  isNew: boolean;
}

interface NewFlavorsProps {
  flavors: Flavor[];
}

const NewFlavors = ({ flavors }: NewFlavorsProps) => {
  if (flavors.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-primary mb-2">
          ¡Sabores Nuevos!
        </h3>
        <p className="text-lg text-muted-foreground">
          Descubre nuestras últimas creaciones
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {flavors.map((flavor) => (
          <Card
            key={flavor.name}
            className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-3 border-2 border-primary/20 overflow-hidden relative"
          >
            <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground font-bold animate-pulse">
              ¡NUEVO!
            </Badge>
            <div className={`h-40 ${flavor.gradient} relative`}>
              {flavor.imageUrl ? (
                <img
                  src={flavor.imageUrl}
                  alt={flavor.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                  <div className="text-6xl">🍦</div>
                </div>
              )}
              {flavor.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-soft">
                  Popular
                </Badge>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                {flavor.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {flavor.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewFlavors;
