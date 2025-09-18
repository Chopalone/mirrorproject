import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const products = [
  {
    id: "debt-relief",
    title: "DEBT RELIEF",
    subtitle: "A clear way to reduce debt",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    exampleTitle: "Debt relief plan (example)²",
    exampleData: [
      { label: "Est. program deposit", value: "$334/mo" },
      { label: "Est. total enrolled debt", value: "$25,288" },
      { label: "Est. program cost (includes fees)", value: "$17,218" },
      { label: "Est. program savings", value: "$8,069 🙌", highlight: true }
    ],
    benefits: [
      "Experts negotiate your debt for you",
      "Pay down debt in 2-4 years on avg",
      "No loan, good credit not required"
    ],
    primaryCta: "Get your debt plan",
    secondaryCta: "Learn more",
    bgColor: "bg-blue-100"
  },
  {
    id: "personal-loans",
    title: "PERSONAL LOANS",
    subtitle: "Dream first. Fund now",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    exampleTitle: "Personal loans plan (example)³",
    exampleData: [
      { label: "Monthly payment", value: "$562" },
      { label: "Loan amount", value: "$20,000" },
      { label: "APR", value: "19.54%" },
      { label: "Pay down debt sooner", value: "4 years 🙌", highlight: true }
    ],
    benefits: [
      "Consolidate debt, fund major purchases, home improvements",
      "Loans between $5k-50k",
      "Custom discounts, funds in 24-72 hrs"
    ],
    primaryCta: "Explore custom rates",
    secondaryCta: "Learn more",
    bgColor: "bg-green-100"
  },
  {
    id: "home-equity-loans",
    title: "HOME EQUITY LOANS",
    subtitle: "Make your home work for you",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    exampleTitle: "Home loans plan (example)³",
    exampleData: [
      { label: "Monthly payment", value: "$951" },
      { label: "Loan amount", value: "$57,150" },
      { label: "Term length", value: "15 Years" },
      { label: "Est. total savings", value: "$10,000 avg 🙌", highlight: true }
    ],
    benefits: [
      "Turn home equity into cash, simplify debt",
      "Loans between $15k-$150k",
      "Save $10k avg/year, funds in 15 days"
    ],
    primaryCta: "Access your equity",
    secondaryCta: "Learn more",
    bgColor: "bg-purple-100"
  }
];

export default function ProductsSection() {
  return (
    <section className="bg-white py-16" data-testid="products-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12" data-testid="products-title">
          3 ways to control your debt
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-border rounded-xl shadow-lg overflow-hidden" data-testid={`product-${product.id}`}>
              <img 
                src={product.image} 
                alt={`${product.title.toLowerCase()} visual representation`}
                className="w-full h-48 object-cover"
                data-testid={`product-image-${product.id}`}
              />
              <div className="p-6">
                <div className={`${product.bgColor} rounded-lg p-4 mb-6`} data-testid={`product-example-${product.id}`}>
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground mb-2">{product.exampleTitle}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {product.exampleData.map((item, index) => (
                        <div key={index} data-testid={`product-data-${product.id}-${index}`}>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className={`font-bold ${item.highlight ? 'text-green-600' : ''}`}>{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2" data-testid={`product-title-${product.id}`}>
                  {product.title}
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-4" data-testid={`product-subtitle-${product.id}`}>
                  {product.subtitle}
                </h4>
                
                <ul className="space-y-2 mb-6">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm" data-testid={`product-benefit-${product.id}-${index}`}>
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    data-testid={`button-primary-${product.id}`}
                  >
                    {product.primaryCta}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-border text-foreground hover:bg-gray-50"
                    data-testid={`button-secondary-${product.id}`}
                  >
                    {product.secondaryCta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
