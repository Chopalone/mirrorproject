import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Melissa",
    type: "Debt Relief",
    title: "Melissa reduced $25k in debt",
    benefits: [
      "Negotiated down her total debt",
      "Freed up monthly cash flow"
    ],
    quote: "Achieve helped me build freedom to live again.",
    role: "Achieve Debt Relief Member",
    image: "https://images.unsplash.com/photo-1494790108755-2616b2b2e1b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 2,
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
    badgeColor: "bg-green-100 text-green-800"
  },
  {
    id: 3,
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
    badgeColor: "bg-purple-100 text-purple-800"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24" data-testid="hero-carousel">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="carousel-container">
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${currentSlide * (100 / testimonials.length)}%)` }}
            data-testid="carousel-track"
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="carousel-slide" data-testid={`carousel-slide-${index}`}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <span className={`${testimonial.badgeColor} px-3 py-1 rounded-full text-sm font-medium`} data-testid={`badge-${testimonial.type.toLowerCase().replace(' ', '-')}`}>
                        {testimonial.type}
                      </span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid={`title-${testimonial.name.toLowerCase()}`}>
                      {testimonial.title}
                    </h1>
                    <ul className="space-y-3 mb-8">
                      {testimonial.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-lg text-muted-foreground" data-testid={`benefit-${testimonial.name.toLowerCase()}-${benefitIndex}`}>
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      size="lg" 
                      className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3"
                      data-testid="button-get-rate"
                    >
                      Get my rate
                    </Button>
                    <div className="mt-6">
                      <div className="flex items-center space-x-2" data-testid="trustpilot-rating">
                        <span className="text-green-600 font-bold">★</span>
                        <span className="text-sm text-muted-foreground">Trustscore 4.8 | 11,000+ reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name} success story`}
                      className="rounded-xl shadow-lg w-full h-auto"
                      data-testid={`image-${testimonial.name.toLowerCase()}`}
                    />
                    <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs" data-testid={`quote-${testimonial.name.toLowerCase()}`}>
                      <p className="text-sm font-medium text-foreground mb-1">"{testimonial.quote}"</p>
                      <p className="text-xs text-muted-foreground">{testimonial.name}, {testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
