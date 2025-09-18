const AchieveFooterLogo = () => (
  <svg className="h-8 w-auto" viewBox="0 0 120 30" fill="none">
    <circle cx="15" cy="15" r="10" fill="white"/>
    <text x="35" y="20" fill="white" fontFamily="Arial" fontSize="14" fontWeight="bold">achieve</text>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div data-testid="footer-company-info">
            <div className="flex items-center mb-4">
              <AchieveFooterLogo />
            </div>
            <p className="text-gray-300 text-sm">Life after debt starts here. Get control of your debt with consolidation loans or debt relief.</p>
          </div>
          
          <div data-testid="footer-products">
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-debt-relief">Debt Relief</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-personal-loans">Personal Loans</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-home-equity">Home Equity Loans</a></li>
            </ul>
          </div>
          
          <div data-testid="footer-company">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-about">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-contact">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-careers">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-press">Press</a></li>
            </ul>
          </div>
          
          <div data-testid="footer-legal">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-privacy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-terms">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-disclosures">Disclosures</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-licenses">Licenses</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300" data-testid="footer-copyright">
          <p>© 2024 Achieve. All rights reserved.</p>
          <p className="mt-2" data-testid="footer-disclaimers">
            ¹ Based on prior results. Individual results will vary. ² Example based on $25k enrolled debt. 
            ³ Example rates for qualified borrowers. Your rate may differ.
          </p>
        </div>
      </div>
    </footer>
  );
}
