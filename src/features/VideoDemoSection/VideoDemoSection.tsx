import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Typography from "@/components/Typography";

const VideoDemoSection = () => {
  return (
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
  );
};

export default VideoDemoSection;
