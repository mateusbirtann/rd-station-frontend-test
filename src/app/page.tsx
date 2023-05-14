import HeroFormSection from "@/features/HeroFormSection";
import ProductFeaturesListSection from "@/features/ProductFeaturesListSection";
import ProductBenefitsCardsSection from "@/features/ProductBenefitsCardsSection";
import CreateAccountCTASection from "@/features/CreateAccountCTASection";
import VideoDemoSection from "@/features/VideoDemoSection";
import MarketingIntegrationCTASection from "@/features/MarketingIntegrationCTASection";

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
