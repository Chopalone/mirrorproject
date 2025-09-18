import { Button } from "@/components/ui/button";
import { TrendingDown, DollarSign, CheckCircle } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="bg-white py-16" data-testid="benefits-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12" data-testid="benefits-title">
          Make your next step your best step
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center" data-testid="benefit-reduce-debt">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Reduce your debt & stress</h3>
            <p className="text-muted-foreground">Feel less stress as you lower your high-interest debt.</p>
          </div>
          <div className="text-center" data-testid="benefit-free-cash">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Free up cash</h3>
            <p className="text-muted-foreground">Decrease monthly payments, increase cash on hand so you could get ahead.</p>
          </div>
          <div className="text-center" data-testid="benefit-simplify-life">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Simplify your life</h3>
            <p className="text-muted-foreground">Consolidate debts with 1 easy monthly payment and enjoy life.</p>
          </div>
        </div>
        <div className="mt-12">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3"
            data-testid="button-get-debt-help"
          >
            Get debt help now
          </Button>
        </div>
      </div>
    </section>
  );
}
