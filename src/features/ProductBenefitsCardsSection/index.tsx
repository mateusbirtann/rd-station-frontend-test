import Typography from "@/components/Typography";
import benefitsCardsData from "@/data/BenefitsCardsData";
import Slider from '@/components/Slider';
import BenefitCard from "./components/BenefitCard";

const ProductBenefitsCards = () => {
  return (
    <div className="w-full mx-auto px-4 max-w-[1224px] mt-10 xs:px-0 xs:w-[328px] xl:w-full xl:mt-32">
      <Typography variant="heading-md" className="xl:w-[600px]">
        A ferramenta de Automação de Marketing líder na América Latina
      </Typography>
      <div className="xl:grid xl:grid-cols-3 justify-items-center gap-6 xl:mt-16 hidden">
        {benefitsCardsData.map((card) => (
          <BenefitCard key={card.title} {...card} />
        ))}
      </div>
      <div className="xl:hidden relative">
        <Slider cards={benefitsCardsData} />
      </div>
    </div>
  )
}

export default ProductBenefitsCards;
