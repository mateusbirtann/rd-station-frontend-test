import Form from "@/components/Form";
import Typography from "@/components/Typography";

const HeroForm = () => (
  <div className="mt-10 z-10 w-full xl:w-[496px] bg-white relative shadow-[0px_4px_12px_rgba(33,36,41,0.14)] rounded-sm px-6 py-10 xs:w-[328px]">
    <div className="flex flex-col gap-4">
      <Typography variant="heading-xs" className="text-center">
        Comece seus 10 dias de teste grátis do RD Station Marketing!
      </Typography>
      <Typography variant="subtitle-xs" className="text-center text-gray">
        Não precisa cadastrar cartão de crédito. 😉
      </Typography>
    </div>
    <div className="rounded-full bg-gray-lighter w-full h-[1px] my-6"></div>
    <div className="relative z-10">
      <Form />
    </div>
  </div>
);

export default HeroForm;
