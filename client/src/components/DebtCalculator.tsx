import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Clock, DollarSign, Target, Zap } from "lucide-react";

export default function DebtCalculator() {
  const [debtAmount, setDebtAmount] = useState(25000);
  const [monthlyPayment, setMonthlyPayment] = useState(500);
  const [interestRate, setInterestRate] = useState(18.5);
  const [results, setResults] = useState({
    currentPayoffTime: 0,
    currentTotalInterest: 0,
    achievePayoffTime: 0,
    achieveTotalInterest: 0,
    monthlySavings: 0,
    totalSavings: 0
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateResults = () => {
    // Current scenario calculations
    const currentMonthlyRate = interestRate / 100 / 12;
    const currentPayoffTime = Math.ceil(
      Math.log(1 + (debtAmount * currentMonthlyRate) / monthlyPayment) / 
      Math.log(1 + currentMonthlyRate)
    );
    const currentTotalInterest = (monthlyPayment * currentPayoffTime) - debtAmount;

    // Achieve scenario (lower interest rate and optimized payment)
    const achieveInterestRate = 8.5; // Lower rate
    const achieveMonthlyRate = achieveInterestRate / 100 / 12;
    const achieveOptimizedPayment = Math.min(monthlyPayment * 1.2, debtAmount * 0.05); // 20% more or 5% of debt
    const achievePayoffTime = Math.ceil(
      Math.log(1 + (debtAmount * achieveMonthlyRate) / achieveOptimizedPayment) / 
      Math.log(1 + achieveMonthlyRate)
    );
    const achieveTotalInterest = (achieveOptimizedPayment * achievePayoffTime) - debtAmount;

    const monthlySavings = monthlyPayment - achieveOptimizedPayment;
    const totalSavings = (monthlyPayment * currentPayoffTime) - (achieveOptimizedPayment * achievePayoffTime);

    setResults({
      currentPayoffTime,
      currentTotalInterest,
      achievePayoffTime,
      achieveTotalInterest,
      monthlySavings,
      totalSavings
    });
  };

  useEffect(() => {
    calculateResults();
  }, [debtAmount, monthlyPayment, interestRate]);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20" data-testid="debt-calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="calculator-title">
            Discover Your Debt Freedom Path
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="calculator-subtitle">
            Get personalized insights and see how much you could save with our debt consolidation solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card className="h-fit border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Debt Details</h3>
                
                {/* Debt Amount Slider */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Total Debt Amount
                  </label>
                  <div className="space-y-4">
                    <Slider
                      value={[debtAmount]}
                      onValueChange={(value) => setDebtAmount(value[0])}
                      max={100000}
                      min={5000}
                      step={1000}
                      className="w-full"
                    />
                    <div className="text-center">
                      <span className="text-2xl font-bold text-blue-600">
                        {formatCurrency(debtAmount)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Monthly Payment Slider */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Current Monthly Payment
                  </label>
                  <div className="space-y-4">
                    <Slider
                      value={[monthlyPayment]}
                      onValueChange={(value) => setMonthlyPayment(value[0])}
                      max={2000}
                      min={100}
                      step={50}
                      className="w-full"
                    />
                    <div className="text-center">
                      <span className="text-xl font-semibold text-gray-800">
                        {formatCurrency(monthlyPayment)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Current Interest Rate
                  </label>
                  <div className="space-y-4">
                    <Slider
                      value={[interestRate]}
                      onValueChange={(value) => setInterestRate(value[0])}
                      max={30}
                      min={5}
                      step={0.5}
                      className="w-full"
                    />
                    <div className="text-center">
                      <span className="text-xl font-semibold text-gray-800">
                        {interestRate}%
                      </span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  data-testid="button-calculate"
                >
                  Calculate My Savings
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Current Scenario */}
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-800">Current Plan</h4>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      <Clock className="w-3 h-3 mr-1" />
                      {Math.ceil(results.currentPayoffTime / 12)} years
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Monthly Payment</span>
                      <span className="font-semibold text-gray-800">{formatCurrency(monthlyPayment)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Total Interest</span>
                      <span className="font-semibold text-gray-800">{formatCurrency(results.currentTotalInterest)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Total Paid</span>
                      <span className="font-semibold text-gray-800">{formatCurrency(debtAmount + results.currentTotalInterest)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achieve Scenario */}
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-blue-800">With Achieve</h4>
                    <Badge className="bg-blue-600 text-white">
                      <Target className="w-3 h-3 mr-1" />
                      {Math.ceil(results.achievePayoffTime / 12)} years
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="text-sm text-gray-600">Monthly Payment</span>
                      <span className="font-semibold text-blue-800">{formatCurrency(monthlyPayment - results.monthlySavings)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="text-sm text-gray-600">Total Interest</span>
                      <span className="font-semibold text-blue-800">{formatCurrency(results.achieveTotalInterest)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Total Paid</span>
                      <span className="font-semibold text-blue-800">{formatCurrency(debtAmount + results.achieveTotalInterest)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Savings Summary */}
            <Card className="border-0 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Your Potential Savings</h3>
                  <p className="text-gray-600">See how much you could save with our debt consolidation program</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <DollarSign className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-800 mb-1">
                      {formatCurrency(results.monthlySavings)}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Savings</div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingDown className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-800 mb-1">
                      {formatCurrency(results.totalSavings)}
                    </div>
                    <div className="text-sm text-gray-600">Total Savings</div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-800 mb-1">
                      {Math.ceil((results.currentPayoffTime - results.achievePayoffTime) / 12)}
                    </div>
                    <div className="text-sm text-gray-600">Years Saved</div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button 
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                    data-testid="button-get-started"
                  >
                    Get Started Today
                  </Button>
                  <p className="text-xs text-gray-500 mt-3">
                    *Results are estimates based on your inputs and may vary based on creditworthiness and other factors.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}