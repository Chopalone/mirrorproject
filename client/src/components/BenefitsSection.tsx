import { Button } from "@/components/ui/button";
import { Coffee, Wallet, Flower2 } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="py-16" style={{ backgroundColor: '#3300FF10' }} data-testid="benefits-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12" data-testid="benefits-title">
          Make your next step your best step
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center" data-testid="benefit-reduce-debt">
            <Coffee className="w-16 h-16 mx-auto mb-4 text-indigo-600" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Reduce your debt & stress</h3>
            <p className="text-gray-600">Feel less stress as you lower your high-interest debt.</p>
          </div>
          <div className="text-center" data-testid="benefit-free-cash">
            <Wallet className="w-16 h-16 mx-auto mb-4 text-indigo-600" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Free up cash</h3>
            <p className="text-gray-600">Decrease monthly payments, increase cash on hand so you could get ahead.</p>
          </div>
          <div className="text-center" data-testid="benefit-simplify-life">
            <Flower2 className="w-16 h-16 mx-auto mb-4 text-indigo-600" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Simplify your life</h3>
            <p className="text-gray-600">Consolidate debts with 1 easy monthly payment and enjoy life.</p>
          </div>
        </div>
        <div className="mt-12">
          <Button 
            size="lg" 
            className="text-white font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            style={{ backgroundColor: '#3300FF' }}
            data-testid="button-get-debt-help"
          >
            Get debt help now
          </Button>
        </div>
      </div>
    </section>
  );
}
