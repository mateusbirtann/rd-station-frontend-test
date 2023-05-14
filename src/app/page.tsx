import HeroFormSection from "@/features/HeroFormSection/HeroFormSection";
import ProductFeaturesListSection from "@/features/ProductFeaturesListSection/ProductFeaturesListSection";
import ProductBenefitsCardsSection from "@/features/ProductBenefitsCardsSection/ProductBenefitsCardsSection";
import CreateAccountCTASection from "@/features/CreateAccountCTASection/CreateAccountCTASection";
import VideoDemoSection from "@/features/VideoDemoSection/VideoDemoSection";
import MarketingIntegrationCTASection from "@/features/MarketingIntegrationCTASection/MarketingIntegrationCTASection";

export default function Page() {
  return (
    <>
      <HeroFormSection />
      <ProductFeaturesListSection />
      <ProductBenefitsCardsSection />
      <CreateAccountCTASection />
      <VideoDemoSection />
      <MarketingIntegrationCTASection />
    </>
  );
}
