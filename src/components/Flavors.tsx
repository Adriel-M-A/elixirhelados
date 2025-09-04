import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";

const flavors = [
  {
    name: "Vainilla Premium",
    description:
      "Cremosa vainilla con esencia natural y trocitos de vainilla real",
    color: "bg-vanilla",
    gradient: "bg-gradient-vanilla",
    popular: true,
  },
  {
    name: "Frutilla Suprema",
    description: "Helado de frutillas frescas con trozos de fruta natural",
    color: "bg-strawberry",
    gradient: "bg-gradient-strawberry",
    popular: true,
  },
  {
    name: "Menta Granizada",
    description: "Refrescante menta con cristales de chocolate crujientes",
    color: "bg-mint",
    gradient: "bg-gradient-mint",
    popular: false,
  },
  {
    name: "Chocolate Intenso",
    description: "Chocolate belga premium con cacao de origen seleccionado",
    color: "bg-chocolate",
    gradient: "bg-gradient-radial from-chocolate to-chocolate/80",
    popular: true,
  },
  {
    name: "Pistacho Siciliano",
    description: "Exquisito pistacho importado con textura sedosa",
    color: "bg-pistachio",
    gradient: "bg-gradient-radial from-pistachio to-pistachio/80",
    popular: false,
  },
  {
    name: "Arándanos Silvestres",
    description: "Deliciosos arándanos patagónicos en base cremosa",
    color: "bg-blueberry",
    gradient: "bg-gradient-radial from-blueberry to-blueberry/80",
    popular: false,
  },
];

const Flavors = () => {
  return (
    <section className="py-20 bg-gradient-premium">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {flavors.map((flavor) => (
            <Card
              key={flavor.name}
              className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden"
            >
              <div className={`h-32 ${flavor.gradient} relative`}>
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

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            ¡Y muchos sabores más disponibles en nuestra tienda!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Flavors;
