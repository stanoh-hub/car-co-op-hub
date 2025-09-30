import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, TrendingUp } from "lucide-react";

const VehicleShowcase = () => {
  const vehicles = [
    {
      id: 1,
      name: "Toyota Camry 2022",
      status: "Sold",
      purchasePrice: "$24,500",
      sellPrice: "$28,900",
      profit: "$4,400",
      profitPercent: "18%",
      date: "Mar 2024",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Honda CR-V 2023",
      status: "Sold",
      purchasePrice: "$32,000",
      sellPrice: "$36,500",
      profit: "$4,500",
      profitPercent: "14%",
      date: "Feb 2024",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Ford F-150 2021",
      status: "In Stock",
      purchasePrice: "$38,500",
      sellPrice: "TBD",
      profit: "Pending",
      profitPercent: "Est. 15%",
      date: "Listed Mar 2024",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="vehicles" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Recent <span className="text-primary">Vehicle Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our recent investments and successful sales that have generated returns for our members.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-medium group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge 
                  className={`absolute top-4 right-4 ${
                    vehicle.status === 'Sold' 
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'bg-accent text-accent-foreground'
                  }`}
                >
                  {vehicle.status}
                </Badge>
              </div>

              {/* Content */}
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{vehicle.date}</span>
                  </div>
                </div>

                {/* Financial details */}
                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      Purchase
                    </span>
                    <span className="font-semibold text-foreground">{vehicle.purchasePrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {vehicle.status === 'Sold' ? 'Sold' : 'Target'}
                    </span>
                    <span className="font-semibold text-foreground">{vehicle.sellPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-2 border-t border-border">
                    <span className="text-secondary flex items-center gap-1 font-medium">
                      <TrendingUp className="w-4 h-4" />
                      Profit
                    </span>
                    <div className="text-right">
                      <div className="font-bold text-secondary">{vehicle.profit}</div>
                      <div className="text-xs text-muted-foreground">{vehicle.profitPercent}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;