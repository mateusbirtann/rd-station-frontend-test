import HeroHeader from "./components/HeroHeader";
import HeroBottom from "./components/HeroBottom";
import { HeroBottomProps, HeroHeaderProps } from "@/types";
import CreateAccountForm from "./components/CreateAccountForm";

const HeroFormSection = () => {
  const headerContent: HeroHeaderProps = {
    title: (
      <span>
        Gere mais <span className="text-cyan">oportunidades </span> para seu
        negócio
      </span>
    ),
    description:
      "O RD Station Marketing é um software para sua empresa fazer campanhas melhores, nutrir Leads, gerar oportunidades comerciais qualificadas e alcançar mais resultados.",
  };

  const bottomContent: HeroBottomProps = {
    title: "Estaremos juntos desde o primeiro passo!",
    descriptionList: [
      "Se você ainda não sabe como extrair o máximo das ações digitais, não tem problema. O RD Station Marketing é mais que uma ferramenta, nos importamos com os seus resultados.",
      "Estaremos com você do planejamento até a prática!",
    ],
  };

  return (
    <div className="bg-gray-lightest w-full relative">
      <div className="relative z-10 w-full">
        <div className="flex flex-col items-center mx-auto max-w-[1224px] px-4 xl:px-0 xl:flex-row xl:items-start xl:justify-between">
          <HeroHeader
            title={headerContent.title}
            description={headerContent.description}
          />
          <CreateAccountForm />
        </div>
        <HeroBottom
          title={bottomContent.title}
          descriptionList={bottomContent.descriptionList}
        />
      </div>
    </div>
  );
};

export default HeroFormSection;
