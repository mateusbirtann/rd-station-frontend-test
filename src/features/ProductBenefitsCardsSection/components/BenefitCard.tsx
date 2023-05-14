import Typography from '@/components/Typography';
import { BenefitCardProps } from '@/types';
import Image from 'next/image';

const BenefitCard = ({ icon, title, subtitle }: BenefitCardProps) => (
  <div className="flex flex-col xl:p-6 xl:w-[392px] xl:h-[393px] shadow-[0px_4px_12px_rgba(33,36,41,0.14)] xl:gap-4">
    <Image width={64} height={64} alt={"icon"} src={icon} />
    <Typography variant="heading-sm">{title}</Typography>
    <Typography variant="body-md">{subtitle}</Typography>
  </div>
);

export default BenefitCard;