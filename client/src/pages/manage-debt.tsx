import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, TrendingDown, Calculator, Star } from "lucide-react";
import bbbLogo from "@/assets/bbb-logo.svg";
import trustpilotStrip from "@/assets/tp-strip__1_-cropped.svg";

export default function ManageDebt() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#3300FF' }}>
                Take Control
                <br />
                <span className="text-foreground">of Your Debt</span>
                <br />
                <span style={{ color: '#3300FF' }}>Today</span>
              </h1>
              
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Consolidate multiple debts into one payment</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Reduce your monthly payments and interest rates</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Get personalized debt relief solutions</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="text-white font-semibold px-8 py-4 text-lg rounded-lg"
                style={{ backgroundColor: '#3300FF' }}
              >
                Get Your Free Debt Analysis
              </Button>

              {/* Trustpilot Rating */}
              <div className="flex items-center justify-start mt-4">
                <img 
                  src={trustpilotStrip} 
                  alt="Trustpilot Reviews" 
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Debt management success"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
            Make your next step your best step
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#3300FF20' }}>
                <TrendingDown className="w-8 h-8" style={{ color: '#3300FF' }} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Reduce your debt & stress</h3>
              <p className="text-muted-foreground">Feel less stress as you lower your high-interest debt.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Free up cash</h3>
              <p className="text-muted-foreground">Decrease monthly payments, increase cash on hand so you could get ahead.</p>
            </div>
            <div className="text-center">
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
              className="text-white font-bold text-lg px-8 py-3 rounded-lg"
              style={{ backgroundColor: '#3300FF' }}
            >
              Get debt help now
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <div className="mt-16">
        <div className="bg-white border-t border-b flex items-center justify-center divide-x divide-gray-200 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          {/* BBB Section */}
          <div className="flex-1 py-8 flex flex-col items-center justify-center">
            <img 
              src={bbbLogo} 
              alt="BBB A+ Rating" 
              className="h-12 w-auto mb-1"
            />
            <div className="text-sm text-gray-600">4.8 TrustPilot reviews</div>
          </div>
          
          {/* $20 Billion Section */}
          <div className="flex-1 py-8 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">$20 Billion+</div>
            <div className="text-sm text-gray-600">in debt resolved</div>
          </div>
          
          {/* $13 Billion Section */}
          <div className="flex-1 py-8 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">$13 Billion+</div>
            <div className="text-sm text-gray-600">in loans funded¹</div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
