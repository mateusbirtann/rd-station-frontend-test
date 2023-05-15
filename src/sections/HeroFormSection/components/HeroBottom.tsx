import Typography from "@/components/Typography";
import { HeroBottomProps } from "@/types";

const HeroBottom = ({ title, descriptionList }: HeroBottomProps) => {
  return (
    <div className="relative bg-blue-dark w-full mt-10 xl:mt-0 xl:absolute xl:top-[650px] xl:left-0 xl:h-[331px]">
      <div className="bg-triangle-sm rotate-90"></div>
      <div className="container justify-center mx-auto py-12 px-4 xs:px-0 xl:py-20 xl:gap-6 xl:w-[1224px] xs:w-[328px]">
        <div className="flex flex-col gap-4 xl:w-[600px]">
          <Typography variant="heading-sm" className="text-white">
            {title}
          </Typography>
          {descriptionList.map((description, index) => (
            <Typography key={index} variant="body-md" className="text-white">
              {description}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
