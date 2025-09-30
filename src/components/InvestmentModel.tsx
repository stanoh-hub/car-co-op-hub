import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Car, TrendingUp, PiggyBank } from "lucide-react";

const InvestmentModel = () => {
  const steps = [
    {
      icon: PiggyBank,
      title: "Pool Investments",
      description: "Members contribute capital to create a collective investment fund.",
      color: "text-primary"
    },
    {
      icon: Car,
      title: "Purchase Vehicles",
      description: "We strategically acquire quality vehicles at competitive prices.",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Sell for Profit",
      description: "Vehicles are sold through our established network of buyers.",
      color: "text-secondary"
    },
    {
      icon: DollarSign,
      title: "Share Returns",
      description: "Net profits are distributed to members based on investment share.",
      color: "text-primary-light"
    }
  ];

  return (
    <section id="investment" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Our <span className="text-primary">Investment Model</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A transparent, proven system that has delivered consistent returns to our members
            through strategic vehicle investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-2 hover:border-primary/50 transition-all hover:shadow-medium group">
              <CardContent className="p-6 space-y-4">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold shadow-medium">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Profit Formula */}
        <Card className="mt-12 max-w-4xl mx-auto border-2 border-primary/20 shadow-medium">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center text-foreground mb-6">
              Profit Distribution Formula
            </h3>
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <div className="text-center space-y-2">
                <div className="text-lg font-mono text-muted-foreground">
                  Your Share = (Your Investment / Total Investment Pool) × Net Profit
                </div>
                <div className="text-sm text-muted-foreground">
                  Net Profit = Selling Price - (Purchase Price + Operating Expenses)
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-center text-sm text-muted-foreground">
                  <strong className="text-foreground">Example:</strong> If you invested $5,000 out of a $50,000 pool (10% share) 
                  and a vehicle generates $10,000 net profit, you receive $1,000.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InvestmentModel;