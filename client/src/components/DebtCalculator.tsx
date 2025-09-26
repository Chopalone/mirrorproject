import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const AchieveSmallLogo = () => (
  <svg className="h-8 w-8" style={{ color: '#3300FF' }} viewBox="0 0 30 30" fill="currentColor">
    <circle cx="15" cy="15" r="10"/>
  </svg>
);

export default function DebtCalculator() {
  const [debtAmount, setDebtAmount] = useState(100000);

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`;
  };

  return (
    <section className="bg-gray-50 py-16" data-testid="debt-calculator">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="calculator-title">
            Save an estimated $1,035 on your monthly payment¹
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="calculator-subtitle">
            Select your debt amount
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Debt amount selector and comparison */}
            <div>
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">Select your debt amount</label>
                <div className="relative">
                  <select
                    className="w-full text-xl font-semibold px-4 py-3 rounded-lg border-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ borderColor: '#3300FF' }}
                    value={debtAmount}
                    onChange={(e) => setDebtAmount(parseInt(e.target.value, 10))}
                    data-testid="debt-amount-select"
                  >
                    {[1000, 5000, 10000, 20000, 30000, 40000, 50000, 75000, 100000].map((v) => (
                      <option key={v} value={v}>{formatCurrency(v)}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3300FF' }}>
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-lg border-2 bg-blue-50" style={{ borderColor: '#3300FF' }} data-testid="achieve-option">
                  <div className="flex items-center mb-4">
                    <AchieveSmallLogo />
                    <span className="ml-2 font-bold text-lg" style={{ color: '#3300FF' }}>achieve</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Est monthly payment⁵</span>
                      <span className="font-bold text-lg" style={{ color: '#3300FF' }}>$1,744/mo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Est time to pay off debt⁶</span>
                      <span className="font-bold text-lg" style={{ color: '#3300FF' }}>4 yr</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Est total debt to pay off⁷</span>
                      <span className="font-bold text-lg" style={{ color: '#3300FF' }}>$83,730</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-lg border-2 bg-gray-50" style={{ borderColor: '#e5e7eb' }} data-testid="current-option">
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Current</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Est monthly payment⁵</span>
                      <span className="font-bold text-lg text-gray-800">$2,779/mo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Est time to pay off debt⁶</span>
                      <span className="font-bold text-lg text-gray-800">43 yr</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Est total debt to pay off⁷</span>
                      <span className="font-bold text-lg text-gray-800">$276,352</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  className="w-full text-white font-semibold py-4 text-lg rounded-lg"
                  style={{ backgroundColor: '#3300FF' }}
                  data-testid="button-see-options"
                >
                  See your options
                </Button>
                <p className="text-xs text-gray-500 mt-4 text-center" data-testid="disclaimer">
                  Our estimates are based on prior results, which will vary depending on your specific enrolled credit.
                </p>
              </div>
            </div>

            {/* Right side - Chart and warning */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center text-gray-800">Save an estimated $1,035 on your monthly payment¹</h3>
              
              <div className="h-80 bg-white p-6 rounded-lg border">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { name: 'Achieve', value: 1744, fill: '#3300FF' },
                    { name: 'Current', value: 2779, fill: '#e5e7eb' },
                    { name: 'If you wait', value: 3293, fill: '#ef4444' }
                  ]}>
                    <YAxis 
                      domain={[0, 3500]}
                      tickCount={8}
                      tick={{ fontSize: 12 }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="text-center space-y-4 p-6 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <h4 className="text-lg font-bold text-red-800">Don't Wait!</h4>
                </div>
                <p className="text-sm text-gray-700">
                  If you wait 3 months, you are estimated to pay <span className="font-bold text-red-600">$51,435</span> more in total debt and <span className="font-bold text-red-600">$514</span> more each month to get rid of your debt.
                </p>
                <a href="#" className="text-blue-600 underline font-medium">Explore debt solutions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}