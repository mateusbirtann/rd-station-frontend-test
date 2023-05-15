import Button from "@/components/Button";
import Typography from "@/components/Typography";

const CreateAccountCTASection = () => {
  return (
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
            Combinamos nossos produtos de Marketing e Vendas com pessoas que se
            importam com seus resultados e um ecossistema que apoia o seu
            negócio do planejamento à prática.
          </Typography>
        </div>
        <Button
          type="highlight"
          size="custom"
          className="w-full h-10 mt-6 xs:w-[215px] text-sm xl:text-base xl:w-[257px]"
        >
          <a href="https://app.rdstation.com.br/signup" target="_blank" rel="noopener noreferrer">
            CRIAR CONTA GRATUITA
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CreateAccountCTASection;
