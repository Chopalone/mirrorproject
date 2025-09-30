import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import bbbLogo from "../assets/bbb-logo.svg";
import trustpilotStrip from "../assets/tp-strip__1_-cropped.svg";
import housingLogo from "../assets/housing-logo.webp";

const AchieveFooterLogo = () => (
  <svg className="h-8 w-auto" viewBox="0 0 120 30" fill="none">
    <circle cx="15" cy="15" r="10" fill="white"/>
    <text x="35" y="20" fill="white" fontFamily="Arial" fontSize="14" fontWeight="bold">achieve</text>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
          {/* Manage Debt */}
          <div data-testid="footer-manage-debt">
            <h4 className="font-semibold mb-4 text-sm">Manage Debt</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Debt Relief</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Personal Loans</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Achieve a GOOD Job</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Debt Payoff Calculator</Link></li>
            </ul>
          </div>

          {/* Find Loans */}
          <div data-testid="footer-find-loans">
            <h4 className="font-semibold mb-4 text-sm">Find Loans</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Personal Loans</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Home Equity Loans</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Credit Builder Loan</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">HEL Calculator</Link></li>
            </ul>
          </div>

          {/* Be Savvy */}
          <div data-testid="footer-be-savvy">
            <h4 className="font-semibold mb-4 text-sm">Be Savvy</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Learning Center</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Achieve's Blog</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Achieve's Podcast</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Financial Wellness</Link></li>
            </ul>
          </div>

          {/* Meet Us */}
          <div data-testid="footer-meet-us">
            <h4 className="font-semibold mb-4 text-sm">Meet Us</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="#" className="hover:text-gray-800 transition-colors">About Achieve</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Leadership</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Member Stories</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Personal Stories</Link></li>
            </ul>
          </div>

          {/* Support & Info */}
          <div data-testid="footer-support">
            <h4 className="font-semibold mb-4 text-sm">Support & Info</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Reviews</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Policies</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">CA Privacy</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Licensing</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Sitemap</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Trust Badges & Social */}
          <div data-testid="footer-trust-social" className="flex flex-col items-start">
            {/* reCAPTCHA badge placeholder */}
            <div className="mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                reCAPTCHA
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mb-4">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col space-y-2">
              {/* Trustpilot Badge */}
              <div className="w-24 h-8">
                <img src={trustpilotStrip} alt="Trustpilot 5 stars" className="w-full h-full object-contain" />
              </div>
              
              {/* BBB A+ Badge and Housing Logo - Side by Side */}
              <div className="flex items-center space-x-3">
                <div className="w-16 h-10">
                  <img src={bbbLogo} alt="BBB A+ Rating" className="w-full h-full object-contain" />
                </div>
                
                {/* Housing Logo */}
                <div className="w-16 h-10">
                  <img src={housingLogo} alt="Housing Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Norton Security Badge */}
              <div className="w-16 h-8 bg-yellow-500 rounded flex items-center justify-center">
                <svg viewBox="0 0 60 30" className="w-full h-full p-1" fill="black">
                  <path d="M8 5 L15 5 L15 25 L8 25 Z M8 5 L22 20 L22 5 Z"/>
                  <text x="28" y="18" fontSize="6" fontWeight="bold" fill="black">NORTON</text>
                  <text x="28" y="24" fontSize="3" fill="black">SECURED</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="border-t border-gray-200 pt-8 text-xs text-gray-600 leading-relaxed">
          <p className="mb-4">
            Our Achieve personal loans are unsecured installment loans that range from $5,000 to $50,000, with repayment terms from 24 to 60 months. Interest rates for personal loans range from 7.99% to 35.99% APR. Your actual rate will be within this range and will depend on your creditworthiness and other factors. For example, if you receive a $25,000 loan with a 36-month term and a 15.99% APR, you would pay 36 monthly payments of $875.
          </p>
          
          <p className="mb-4">
            Debt consolidation loans are personal loans used to pay off other debts. Consolidation may not be right for everyone and may not save you money. Consider all your options before deciding. Loan proceeds cannot be used to pay off other Achieve loans.
          </p>

          <p className="mb-4">
            Home equity loans and lines of credit are secured by your home. If you default on payments, you could lose your home. Interest may be tax deductible. Consult your tax advisor. Rates shown are for informational purposes only and are subject to change without notice. Your actual rate may be different and will be based on your creditworthiness and other factors. Rates shown assume a loan-to-value of 80% or less.
          </p>

          <p className="mb-4">
            To check your rate online with us, Achieve may perform a soft credit inquiry that will not affect your credit score. If you accept your rate and proceed with your application, we will perform a hard credit inquiry that may impact your credit score.
          </p>

          <p className="mb-4">
            Residents of some states may not be eligible for some or all products. Not all applicants will be approved. Loan approval and actual loan terms depend on your ability to meet our credit standards (including a responsible credit history, sufficient application income, and acceptable debt-to-income ratio), and our verification of your application information. Applications are subject to additional terms and conditions.
          </p>

          <p className="mb-4">
            Debt relief services are provided through our affiliate company Achieve Resolution. Debt relief may not be right for everyone and may not save you money. Consider all your options before deciding. Debt relief services are not available in all states. Fees apply. Enrolled debts must be settled within 12 to 48 months. Not all debts are eligible for enrollment. Not all clients complete our debt relief program for various reasons, including their ability to save sufficient funds. Estimates based on prior results, which will vary depending on your specific enrollment terms. Achieve Resolution does not assume or pay any debt, nor does it provide tax, bankruptcy, accounting or legal advice or credit repair services.
          </p>

          <p className="mb-6">
            CCPA Notice: Residents of California have certain rights with respect to the collection, use and sharing of their personal information under the California Consumer Privacy Act ("CCPA"). To learn more about these rights and how to exercise them, see our Privacy Policy.
          </p>

          <div className="border-t border-gray-200 pt-6 text-center">
            <p>© 2024 Achieve. All rights reserved. NMLS # 1810501</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
