import Image from 'next/image'
import Typography from "@/components/Typography";
import benefitsCardsData from "@/data/BenefitsCardsData";
import Slider from '@/components/Slider';

const ProductBenefitsCards = () => {
  return (
    <div className="w-full xs:w-[328px] px-4 xl:px-0 xl:w-full mx-auto max-w-[1224px]">
    <Typography variant="heading-md" className="xl:w-[600px]">
      A ferramenta de Automação de Marketing líder na América Latina
    </Typography>
    <div className="xl:grid xl:grid-cols-3 justify-items-center gap-6 xl:mt-16 hidden">
      {benefitsCardsData.map((card, index) => {
        return (
          <div
            key={index}
            className="flex flex-col xl:p-6 xl:w-[392px] xl:h-[393px] shadow-[0px_4px_12px_rgba(33,36,41,0.14)] xl:gap-4"
          >
            <Image width={64} height={64} alt={"icon"} src={card.icon} />
            <Typography variant="heading-sm">{card.title}</Typography>
            <Typography variant="body-md">{card.subtitle}</Typography>
          </div>
        );
      })}
    </div>
    <div className="xl:hidden relative">
      <Slider cards={benefitsCardsData} />
    </div>
  </div>
  )
}

export default ProductBenefitsCards