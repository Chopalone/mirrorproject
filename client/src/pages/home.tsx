import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import TrustIndicators from "@/components/TrustIndicators";
import BenefitsSection from "@/components/BenefitsSection";
import DebtCalculator from "@/components/DebtCalculator";
import ProductsSection from "@/components/ProductsSection";
import MemberStoriesSection from "@/components/MemberStoriesSection";
import Footer from "@/components/Footer";
import CookieNotice from "@/components/CookieNotice";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="home-page">
      <Header />
      <HeroCarousel />
      <TrustIndicators />
      <BenefitsSection />
      <DebtCalculator />
      <ProductsSection />
      <MemberStoriesSection />
      <Footer />
      <CookieNotice />
    </div>
  );
}
