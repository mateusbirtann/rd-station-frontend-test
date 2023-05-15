import HeroFormSection from "@/sections/HeroFormSection";
import ProductFeaturesListSection from "@/sections/ProductFeaturesListSection";
import ProductBenefitsCardsSection from "@/sections/ProductBenefitsCardsSection";
import CreateAccountCTASection from "@/sections/CreateAccountCTASection";
import VideoDemoSection from "@/sections/VideoDemoSection";
import MarketingIntegrationCTASection from "@/sections/MarketingIntegrationCTASection";

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
