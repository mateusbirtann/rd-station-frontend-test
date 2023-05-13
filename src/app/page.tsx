import Form from "@/components/Form";
import Typography from "@/components/Typography";
import Image from "next/image";
import { Check } from "lucide-react";
import Slider from "@/components/Slider";
import benefitsCardsData from "@/data/BenefitsCardsData";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import integrationsData from "@/data/IntegrationsData";

export default function Home() {
  return (
    <>
      <div className="bg-gray-lightest w-full relative">
        <div className="relative z-10 w-full">
          <div className="flex flex-col items-center mx-auto max-w-[1224px] px-4 xl:px-0 xl:flex-row xl:items-start xl:justify-between">
            <div className="w-full gap-8 mt-10 flex flex-col xl:mt-32 xs:w-[328px] xl:w-[600px] xl:gap-10">
              <Typography variant="heading-lg">
                Gere mais <span className="text-cyan">oportunidades </span>
                para seu negócio
              </Typography>

              <Typography variant="body-lg">
                O RD Station Marketing é um software para sua empresa fazer
                campanhas melhores, nutrir Leads, gerar oportunidades comerciais
                qualificadas e alcançar mais resultados.
              </Typography>
            </div>

            <div className="mt-10 z-10 w-full xl:w-[496px] bg-white relative shadow-[0px_4px_12px_rgba(33,36,41,0.14)] rounded-sm px-6 py-10 xs:w-[328px]">
              <div className="flex flex-col gap-4">
                <Typography variant="heading-xs" className="text-center">
                  Comece seus 10 dias de teste grátis do RD Station Marketing!
                </Typography>
                <Typography
                  variant="subtitle-xs"
                  className="text-center text-gray"
                >
                  Não precisa cadastrar cartão de crédito. 😉
                </Typography>
              </div>
              <div className="rounded-full bg-gray-lighter w-full h-[1px] my-6"></div>
              <div className="relative z-10">
                <Form />
              </div>
            </div>
          </div>

          <div className="relative bg-blue-dark w-full mt-10 xl:mt-0 xl:absolute xl:top-[650px] xl:left-0 xl:h-[331px] ">
            <div className="bg-triangle-sm rotate-90"></div>
            <div className="justify-center mx-auto py-12 px-4 xs:px-0 xs:w-[328px] xl:w-[1224px] xl:py-20 xl:gap-6">
              <div className="flex flex-col xl:w-[600px] gap-4">
                <Typography variant="heading-sm" className="text-white">
                  Estaremos juntos desde o primeiro passo!
                </Typography>
                <Typography variant="body-md" className="text-white">
                  Se você ainda não sabe como extrair o máximo das ações
                  digitais, não tem problema. O RD Station Marketing é mais que
                  uma ferramenta, nos importamos com os seus resultados.
                </Typography>

                <Typography variant="body-md" className="text-white">
                  Estaremos com você do planejamento até a prática!
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-lightest w-full relative px-4 xl:px-0 pt-10 xl:py-10">
        {/* <div className="bg-triangle-b"></div> */}
        <div className="flex flex-col relative z-10 w-full max-w-[1224px]  xs:w-[328px]  xl:justify-between xl:flex-row xl:w-full mx-auto">
          <Image
            width={600}
            height={600}
            src={"/result-section-img.png"}
            alt="Resultados previsíveis
e mais clientes para sua empresa"
            className="order-2 xl:order-1 mt-10 xl:mt-0"
          />
          <div className="xl:w-[496px] order-1 xl:order-2">
            <div className="gap-2 flex flex-col xl:gap-6">
              <Typography variant="heading-sm">
                Resultados previsíveis e mais clientes para sua empresa
              </Typography>
              <Typography variant="body-lg">
                Torne sua atuação no Marketing Digital mais eficaz
              </Typography>
            </div>
            <div className="flex flex-col gap-6 xl:mt-10 mt-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6" />
                <Typography variant="body-md">
                  Ferramentas intuitivas e com modelos prontos, vídeos
                  explicativos e passo a passo guiado
                </Typography>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6" />
                <Typography variant="body-md">
                  Ferramentas intuitivas e com modelos prontos, vídeos
                  explicativos e passo a passo guiado
                </Typography>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6" />
                <Typography variant="body-md">
                  Ferramentas intuitivas e com modelos prontos, vídeos
                  explicativos e passo a passo guiado
                </Typography>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6" />
                <Typography variant="body-md">
                  Ferramentas intuitivas e com modelos prontos, vídeos
                  explicativos e passo a passo guiado
                </Typography>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6" />
                <Typography variant="body-md">
                  Ferramentas intuitivas e com modelos prontos, vídeos
                  explicativos e passo a passo guiado
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="xs:px-0 xl:mt-32 mt-20 flex flex-col justify-center w-full xs:w-[328px] xl:w-full mx-auto relative">
        <div className="px-4 flex-col w-full h-[408px] xl:w-[1224px] xl:h-[396px] xl:bg-cta bg-cta-mobile mx-auto flex justify-center items-center">
          <div className="flex flex-col gap-4 xl:gap-6 justify-center items-center">
            <Typography
              variant="heading-md"
              className="text-white xl:w-[600px] text-center"
            >
              Por que mais de 25.000 empresas escolheram o RD Station?
            </Typography>
            <Typography
              variant="body-md"
              className="text-white xl:w-[808px] text-center"
            >
              Combinamos nossos produtos de Marketing e Vendas com pessoas que
              se importam com seus resultados e um ecossistema que apoia o seu
              negócio do planejamento à prática.
            </Typography>
          </div>
          <Button
            type="highlight"
            size="custom"
            className="w-full xs:w-[215px] xl:w-[257px] h-10 mt-8 xl:mt-10 text-sm xl:text-base"
          >
            CRIAR CONTA GRATUITA
          </Button>
        </div>
      </div>

      <div className="bg-gray-lightest mt-0 pt-10 xl:p-0 xl:mt-20 ">
        <div className="px-4 xs:px-0 w-full xs:w-[328px] xl:w-full xl:h-[317px] flex flex-col xl:flex-row max-w-[1224px] xl:justify-between mx-auto xl:gap-10 gap-8">
          <div className="flex flex-col xl:gap-10 gap-4 justify-center items-center xl:items-start xl:w-[393px]">
            <Typography variant="heading-sm">
              Entenda melhor como o RD Station Marketing funciona na prática
            </Typography>
            <Button type="secondary" size="custom" className="w-[272px] h-10">
              ASSISTA A DEMONSTRAÇÃO
            </Button>
          </div>
          <Modal />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row w-full xs:w-[328px] px-4 xl:px-0 xl:w-full mx-auto max-w-[1224px] xl:mt-32 mt-10 gap-10 xl:gap-11 xl:justify-between">
        <div className="flex flex-col xl:gap-6 gap-4 xl:w-[600px]">
          <Typography variant="heading-md">
            Torne sua operação de Marketing ainda mais poderosa
          </Typography>
          <Typography variant="subtitle-sm">
            O RD Station Marketing se conecta as principais ferramentas
            nacionais e internacionais
          </Typography>
          <div className="flex justify-center xl:justify-start">
            <Button type="primary" size="custom" className="w-[257px] h-10">
              CRIAR CONTA GRATUITA
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-5 xl:gap-x-4 xl:gap-y-6 gap-y-10 xl:h-[160px]">
          {integrationsData.map((integration) => {
            return (
              <div className="flex flex-col items-center gap-2 h-[68px]">
                <Image
                  width={40}
                  height={40}
                  alt="icon"
                  src={integration.icon}
                />
                <Typography variant="body-sm">{integration.text}</Typography>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
