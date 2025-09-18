import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const AchieveSmallLogo = () => (
  <svg className="h-8 w-8 text-blue-600" viewBox="0 0 30 30" fill="currentColor">
    <circle cx="15" cy="15" r="10"/>
  </svg>
);

export default function DebtCalculator() {
  const [debtAmount, setDebtAmount] = useState([20000]);

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`;
  };

  return (
    <section className="bg-gray-50 py-16" data-testid="debt-calculator">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="calculator-title">
            Save an estimated $178 on your monthly payment¹
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="calculator-subtitle">
            Select your debt amount
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2" data-testid="slider-labels">
              <span>$1,000</span>
              <span>$100,000+</span>
            </div>
            <Slider
              value={debtAmount}
              onValueChange={setDebtAmount}
              max={100000}
              min={1000}
              step={1000}
              className="w-full mb-4"
              data-testid="debt-slider"
            />
            <div className="text-center mt-4">
              <span className="text-2xl font-bold text-foreground" data-testid="debt-amount-display">
                {formatCurrency(debtAmount[0])}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg" data-testid="achieve-option">
              <div className="flex items-center justify-center mb-4">
                <AchieveSmallLogo />
                <span className="ml-2 font-bold text-blue-600">achieve</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Est monthly payment⁵</span>
                  <span className="font-bold text-green-600">$378/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Est time to pay off debt⁶</span>
                  <span className="font-bold text-green-600">4 yr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Est total debt to pay off⁷</span>
                  <span className="font-bold text-green-600">$18,130</span>
                </div>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg" data-testid="current-option">
              <h4 className="font-semibold text-foreground mb-4">Current</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Est monthly payment⁵</span>
                  <span className="font-bold">$556/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Est time to pay off debt⁶</span>
                  <span className="font-bold">29 yr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Est total debt to pay off⁷</span>
                  <span className="font-bold">$54,093</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
              data-testid="button-see-options"
            >
              See your options
            </Button>
            <p className="text-xs text-muted-foreground mt-4" data-testid="disclaimer">
              Our estimates are based on prior results, which will vary depending on your specific enrolled credit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
