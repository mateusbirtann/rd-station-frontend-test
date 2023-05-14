import Image from "next/image";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import integrationsData from "@/data/IntegrationsData";

const MarketingIntegrationCTASection = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full xs:w-[328px] px-4 xl:px-0 xl:w-full mx-auto max-w-[1224px] xl:my-32 my-10 gap-10 xl:gap-11 xl:justify-between">
      <div className="flex flex-col xl:gap-6 gap-4 xl:w-[600px]">
        <Typography variant="heading-md">
          Torne sua operação de Marketing ainda mais poderosa
        </Typography>
        <Typography variant="subtitle-sm">
          O RD Station Marketing se conecta as principais ferramentas nacionais
          e internacionais
        </Typography>
        <div className="flex justify-center xl:justify-start">
          <Button type="primary" size="custom" className="w-[257px] h-10">
            CRIAR CONTA GRATUITA
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-5 xl:gap-x-4 xl:gap-y-6 gap-y-10 xl:h-[160px]">
        {integrationsData.map((integration, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-2 h-[68px]"
            >
              <Image width={40} height={40} alt="icon" src={integration.icon} />
              <Typography variant="body-sm">{integration.text}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketingIntegrationCTASection;
