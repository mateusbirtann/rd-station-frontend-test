import Typography from "@/components/Typography";
import { IntegrationItemProps } from "@/types";
import Image from 'next/image';


const IntegrationItem = ({icon, text}: IntegrationItemProps) => {
  return (
    <div className="flex flex-col items-center gap-2 h-[68px]">
      <Image width={40} height={40} alt="icon" src={icon} />
      <Typography variant="body-sm">{text}</Typography>
    </div>
  );
};

export default IntegrationItem