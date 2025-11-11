import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Truck, CreditCard } from "lucide-react";
import productImage from "@/assets/slimnutri-product.jpeg";

const Order = () => {
  const packageInfo = {
    bottles: 1,
    title: "SlimNutri - Tratamento Completo",
    description: "Comece sua transformação hoje",
    price: 47.90,
    oldPrice: 97.90,
    discount: 51
  };

  return (
    <section id="order" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground font-bold px-4 py-2">
            🔥 PROMOÇÃO POR TEMPO LIMITADO
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Escolha seu <span className="text-primary">pacote SlimNutri</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Quanto mais você investe na sua transformação, mais você economiza
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <Card className="relative p-8 border-primary border-2 shadow-glow">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-accent text-accent-foreground font-bold px-6 py-2 text-base">
                🔥 OFERTA ESPECIAL
              </Badge>
            </div>

            <div className="text-center mb-6">
              <img src={productImage} alt="SlimNutri" className="w-40 h-40 mx-auto mb-4 object-contain" />
              <h3 className="text-2xl font-bold mb-2">{packageInfo.title}</h3>
              <p className="text-muted-foreground">{packageInfo.description}</p>
            </div>

            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl line-through text-muted-foreground">
                  R$ {packageInfo.oldPrice.toFixed(2)}
                </span>
                <Badge variant="destructive" className="text-sm">-{packageInfo.discount}%</Badge>
              </div>
              <div className="text-6xl font-bold text-primary mb-2">
                R$ {packageInfo.price.toFixed(2)}
              </div>
              <div className="text-muted-foreground text-lg">
                ou 12x de R$ {(packageInfo.price / 12).toFixed(2)}
              </div>
            </div>

            <a 
              href="https://go.invictuspay.app.br/xfcamdphzr"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                className="w-full py-6 text-lg font-bold rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
              >
                Comprar Agora
              </Button>
            </a>

            <div className="mt-4 text-sm text-muted-foreground text-center">
              {packageInfo.bottles} pote • 60 cápsulas
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { icon: Shield, text: "Garantia de 30 dias" },
            { icon: Truck, text: "Entrega rápida e segura" },
            { icon: CreditCard, text: "Parcelamento sem juros" },
            { icon: Check, text: "Compra 100% segura" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-hero text-white max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">💯 Garantia de Satisfação Total</h3>
          <p className="text-lg text-center leading-relaxed">
            Você tem 30 dias para testar o SlimNutri. Se não ficar completamente satisfeito com os resultados, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Order;
