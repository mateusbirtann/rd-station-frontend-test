import HeroFormSection from "@/features/HeroFormSection/HeroFormSection";
import ProductFeaturesList from "@/features/ProductFeaturesList/ProductFeaturesList";
import ProductBenefitsCards from "@/features/ProductBenefitsCards/ProductBenefitsCards";
import CreateAccountCTASection from "@/features/CreateAccountCTASection/CreateAccountCTASection";
import VideoDemoSection from "@/features/VideoDemoSection/VideoDemoSection";
import MarketingIntegrationCTASection from "@/features/MarketingIntegrationCTASection/MarketingIntegrationCTASection";

export default function Page() {
  return (
    <>
      <HeroFormSection />
      <ProductFeaturesList />
      <ProductBenefitsCards />
      <CreateAccountCTASection />
      <VideoDemoSection />
      <MarketingIntegrationCTASection />
    </>
  );
}
