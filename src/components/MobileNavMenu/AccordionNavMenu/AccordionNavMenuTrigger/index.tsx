import Typography from "@/components/Typography";
import { ChevronDown } from "lucide-react";

type MenuItem = {
  title: string;
  content?: {
    subTitle: string;
    links: { href: string; text: string }[];
  }[];
};

type AccordionNavMenuTriggerProps = {
  item: MenuItem;
  onToggle: () => void;
};

const AccordionNavMenuTrigger = ({
  item,
  onToggle,
}: AccordionNavMenuTriggerProps) => {
  return (
    <div onClick={onToggle}>
      <div className="group flex w-full border-b-gray-lighter border-b py-4 outline-none cursor-pointer">
        <div className="flex w-full justify-between items-center gap-1">
          <Typography variant="body-md" className="font-bold">
            {item.title}
          </Typography>
          {item.content && (
            <ChevronDown className="w-4 h-4 transition-transform duration-[250] ease-in group-data-[state=open]:rotate-180" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AccordionNavMenuTrigger;
