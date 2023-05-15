import Button from "@/components/Button";
import Typography from "@/components/Typography";
import integrationsData from "@/data/IntegrationsData";
import IntegrationItem from "./components/IntegrationItem";
import { IntegrationItemProps } from "@/types";

const MarketingIntegrationCTASection: React.FC = () => {
  return (
    <div className="flex flex-col w-full my-10 gap-10 max-w-[1224px] xs:w-[328px] px-4 xl:px-0 xl:w-full mx-auto m xl:my-32 xl:flex-row  xl:gap-11 xl:justify-between">
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
            <a
              href="https://app.rdstation.com.br/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              CRIAR CONTA GRATUITA
            </a>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-5 xl:gap-x-4 xl:gap-y-6 gap-y-10 xl:h-[160px]">
        {integrationsData.map(
          (integration: IntegrationItemProps, index: number) => (
            <IntegrationItem
              key={index}
              icon={integration.icon}
              text={integration.text}
            />
          )
        )}
      </div>
    </div>
  );
};

export default MarketingIntegrationCTASection;
