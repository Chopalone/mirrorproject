import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const AchieveLogo = () => (
  <svg className="h-8 w-auto" viewBox="0 0 120 30" fill="none">
    <circle cx="15" cy="15" r="10" fill="#3300FF"/>
    <text x="35" y="20" fill="#3300FF" fontFamily="Arial" fontSize="14" fontWeight="bold">achieve</text>
  </svg>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-40" data-testid="header">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0" data-testid="logo">
            <Link href="/" onClick={closeMobileMenu}>
              <AchieveLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" data-testid="nav-menu">
            <Link 
              href="/manage-debt" 
              className="text-foreground transition-colors font-bold"
              style={{ '--hover-color': '#3300FF' } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = '#3300FF'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
              data-testid="nav-manage-debt"
            >
              Manage Debt
            </Link>
            <Link 
              href="/find-loans" 
              className="text-foreground transition-colors font-bold"
              style={{ '--hover-color': '#3300FF' } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = '#3300FF'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
              data-testid="nav-find-loans"
            >
              Find Loans
            </Link>
            <Link 
              href="/be-savvy" 
              className="text-foreground transition-colors font-bold"
              style={{ '--hover-color': '#3300FF' } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = '#3300FF'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
              data-testid="nav-be-savvy"
            >
              Be Savvy
            </Link>
            <Link 
              href="/meet-us" 
              className="text-foreground transition-colors font-bold"
              style={{ '--hover-color': '#3300FF' } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = '#3300FF'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
              data-testid="nav-meet-us"
            >
              Meet Us
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6 mr-2">
            <Button 
              className="text-white font-semibold"
              style={{ backgroundColor: '#3300FF' }}
              data-testid="button-get-started"
            >
              Get Started
            </Button>
            <Button 
              variant="ghost" 
              className="text-foreground transition-colors"
              style={{ '--hover-color': '#3300FF' } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = '#3300FF'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
              data-testid="button-sign-in"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-foreground transition-colors"
              style={{ '--hover-color': '#3300FF' } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = '#3300FF'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg z-50">
            <nav className="px-4 py-6 space-y-4" data-testid="mobile-nav-menu">
              <Link 
                href="/manage-debt" 
                className="block text-foreground transition-colors font-bold py-2"
                style={{ '--hover-color': '#3300FF' } as React.CSSProperties}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3300FF'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                data-testid="mobile-nav-manage-debt"
                onClick={closeMobileMenu}
              >
                Manage Debt
              </Link>
              <Link 
                href="/find-loans" 
                className="block text-foreground transition-colors font-bold py-2"
                style={{ '--hover-color': '#3300FF' } as React.CSSProperties}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3300FF'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                data-testid="mobile-nav-find-loans"
                onClick={closeMobileMenu}
              >
                Find Loans
              </Link>
              <Link 
                href="/be-savvy" 
                className="block text-foreground transition-colors font-bold py-2"
                style={{ '--hover-color': '#3300FF' } as React.CSSProperties}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3300FF'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                data-testid="mobile-nav-be-savvy"
                onClick={closeMobileMenu}
              >
                Be Savvy
              </Link>
              <Link 
                href="/meet-us" 
                className="block text-foreground transition-colors font-bold py-2"
                style={{ '--hover-color': '#3300FF' } as React.CSSProperties}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3300FF'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                data-testid="mobile-nav-meet-us"
                onClick={closeMobileMenu}
              >
                Meet Us
              </Link>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-border">
                <Button 
                  className="w-full text-white font-semibold"
                  style={{ backgroundColor: '#3300FF' }}
                  data-testid="mobile-button-get-started"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full text-foreground transition-colors"
                  style={{ '--hover-color': '#3300FF' } as React.CSSProperties}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#3300FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  data-testid="mobile-button-sign-in"
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
