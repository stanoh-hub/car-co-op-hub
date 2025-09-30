import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Car, DollarSign, BarChart3, Calendar } from "lucide-react";

const PerformanceMetrics = () => {
  const metrics = [
    {
      icon: Users,
      label: "Active Members",
      value: "523",
      change: "+12% this month",
      positive: true
    },
    {
      icon: Car,
      label: "Vehicles Sold",
      value: "187",
      change: "Total lifetime",
      positive: true
    },
    {
      icon: DollarSign,
      label: "Total Returns Distributed",
      value: "$2.4M",
      change: "To date",
      positive: true
    },
    {
      icon: TrendingUp,
      label: "Average ROI",
      value: "15.2%",
      change: "Annual average",
      positive: true
    },
    {
      icon: BarChart3,
      label: "Current Fund Size",
      value: "$850K",
      change: "Available capital",
      positive: true
    },
    {
      icon: Calendar,
      label: "Years in Operation",
      value: "7",
      change: "Since 2018",
      positive: true
    }
  ];

  return (
    <section id="performance" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Performance</span> Track Record
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent metrics that showcase our commitment to delivering consistent value to our members.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all hover:shadow-medium group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform`}>
                    <metric.icon className="w-6 h-6" />
                  </div>
                  {metric.positive && (
                    <div className="px-2 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                      ↑ Active
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {metric.label}
                  </div>
                  <div className={`text-xs ${metric.positive ? 'text-secondary' : 'text-muted-foreground'} font-medium`}>
                    {metric.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust statement */}
        <Card className="mt-12 max-w-4xl mx-auto bg-gradient-primary text-primary-foreground border-0 shadow-large">
          <CardContent className="p-8 text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-3">
              Consistent Growth, Transparent Operations
            </h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Every metric you see here represents real investments, real vehicles, and real returns 
              delivered to our community members. Join us in building sustainable wealth together.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PerformanceMetrics;