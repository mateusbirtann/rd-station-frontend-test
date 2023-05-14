import Typography from "@/components/Typography";
import { HeroHeaderProps } from "@/types";

const HeroHeader = ({ title, description }: HeroHeaderProps) => (
  <div className="w-full gap-8 mt-10 flex flex-col xs:w-[328px] xl:w-[600px] xl:gap-10 xl:mt-32">
    <Typography variant="heading-lg">{title}</Typography>
    <Typography variant="body-lg">{description}</Typography>
  </div>
);

export default HeroHeader;
