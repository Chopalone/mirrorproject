import { Button } from "@/components/ui/button";

const AchieveLogo = () => (
  <svg className="h-8 w-auto" viewBox="0 0 120 30" fill="none">
    <circle cx="15" cy="15" r="10" fill="#4F46E5"/>
    <text x="35" y="20" fill="#4F46E5" fontFamily="Arial" fontSize="14" fontWeight="bold">achieve</text>
  </svg>
);

export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-40" data-testid="header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0" data-testid="logo">
            <AchieveLogo />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8" data-testid="nav-menu">
            <a 
              href="#" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-manage-debt"
            >
              Manage Debt
            </a>
            <a 
              href="#" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-find-loans"
            >
              Find Loans
            </a>
            <a 
              href="#" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-be-savvy"
            >
              Be Savvy
            </a>
            <a 
              href="#" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-meet-us"
            >
              Meet Us
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-primary"
              data-testid="button-sign-in"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
