import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import bbbLogo from "@/assets/bbb-logo.svg";
import trustpilotStrip from "@/assets/tp-strip__1_-cropped.svg";

const testimonials = [
  {
    id: 0,
    name: "Jeremy",
    type: "Home Loans",
    title: "Jeremy paid down $21k in debt",
    benefits: [
      "Consolidated his debt and saved on interest",
      "Paid for a dream vacation with his family"
    ],
    quote: "I had all this equity sitting there like a gold mine.",
    role: "Achieve Home Loans Member",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tabId: "home-loans"
  },
  {
    id: 1,
    name: "Tamara",
    type: "Personal Loans", 
    title: "Tamara consolidated $20k in debt",
    benefits: [
      "Paid off her husband's medical debt",
      "Saved thousands on interest"
    ],
    quote: "I'm so proud of what my husband and I have accomplished.",
    role: "Achieve Personal Loans Member",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tabId: "personal-loans"
  },
  {
    id: 2,
    name: "Melissa",
    type: "Debt Relief",
    title: "Melissa reduced $25k in debt",
    benefits: [
      "Negotiated down her total debt",
      "Freed up monthly cash flow"
    ],
    quote: "Achieve helped me build freedom to live again.",
    role: "Achieve Debt Relief Member",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    tabId: "debt-relief"
  }
];

const tabs = [
  { id: "home-loans", label: "Home Loans" },
  { id: "personal-loans", label: "Personal Loans" },
  { id: "debt-relief", label: "Debt Relief" }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with Personal Loans (Tamara)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % testimonials.length;
        console.log(`Carousel rotating from slide ${prev} to ${next}`);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[currentSlide];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 lg:py-16" data-testid="hero-carousel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex justify-start mb-8">
          <div className="flex space-x-8">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setCurrentSlide(index)}
                className={`pb-2 text-lg font-medium transition-all border-b-2 ${
                  activeTestimonial.tabId === tab.id
                    ? "border-[#3300FF]"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
                style={activeTestimonial.tabId === tab.id ? { color: '#3300FF' } : {}}
                data-testid={`tab-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#3300FF' }}>
              {activeTestimonial.name}
              <br />
              <span className="text-gray-900">{activeTestimonial.title.split(' ').slice(1, -2).join(' ')}</span>
              <br />
              <span style={{ color: '#3300FF' }}>{activeTestimonial.title.split(' ').slice(-2).join(' ')}</span>
            </h1>
            
            <div className="space-y-3">
              {activeTestimonial.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="text-white font-semibold px-8 py-4 text-lg rounded-lg"
              style={{ backgroundColor: '#3300FF' }}
              data-testid="get-my-rate-button"
            >
              Get my rate
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

          {/* Right Content - Image with Quote */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={activeTestimonial.image}
                alt={`${activeTestimonial.name} success story`}
                className="w-full h-auto object-cover"
                data-testid="hero-image"
              />
            </div>
            
            {/* Quote Overlay */}
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-sm">
              <div className="text-2xl mb-2" style={{ color: '#3300FF' }}>"</div>
              <p className="text-gray-900 font-medium mb-2">
                {activeTestimonial.quote}
              </p>
              <p className="text-sm text-gray-600">
                {activeTestimonial.name}, {activeTestimonial.role}
              </p>
            </div>
          </div>
        </div>

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
      </div>
    </section>
  );
}
