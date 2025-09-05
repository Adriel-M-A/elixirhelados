import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const Location = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Visitanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Te esperamos en nuestro local en el corazón de Trelew para que
            disfrutes de la mejor experiencia helada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Google Maps Link */}
          <div className="order-2 lg:order-1">
            <Card className="shadow-card hover:shadow-premium transition-smooth h-full">
              <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center space-y-4">
                <MapPin className="w-16 h-16 text-primary" />
                <h3 className="text-2xl font-semibold text-primary">
                  Ver en Google Maps
                </h3>
                <p className="text-muted-foreground">
                  Julio Argentino Roca 90, Trelew, Chubut
                </p>
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
                  asChild
                >
                  <a
                    href="https://maps.google.com/?q=Julio+Argentino+Roca+90,+Trelew,+Chubut,+Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir en Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Location Info */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="shadow-card hover:shadow-premium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Dirección
                    </h3>
                    <p className="text-muted-foreground">
                      Julio Argentino Roca 90
                      <br />
                      Trelew, Chubut
                      <br />
                      Argentina
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-premium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Horarios
                    </h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lunes a Sábados: 17:00 - 24:00</p>
                      <p className="text-sm text-accent-foreground mt-2">
                        *Horarios sujetos a cambios por temporada
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth h-auto py-4"
                asChild
              >
                <a
                  href="https://www.instagram.com/elixirhelados/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                  <span className="text-xs opacity-75">@elixirhelados</span>
                </a>
              </Button>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth h-auto py-4"
                asChild
              >
                <a
                  href="https://www.pedidosya.com.ar/restaurantes/trelew/heladeria-elixir-ef286799-2d2a-4cf7-a2f6-4321f55d3b52-menu?fbclid=PAZXh0bgNhZW0CMTEAAadnSkdHVKDsN0J6CQIDTpMMsvTTDkQvptkBR2hmPh1ahV1eOqDzr8KSfq321g_aem_6ksDtl2Xgch7REv996gzXw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Pedí Online</span>
                  <span className="text-xs opacity-75">PedidosYa</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
