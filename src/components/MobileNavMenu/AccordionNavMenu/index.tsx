import AccordionNavMenuTrigger from './AccordionNavMenuTrigger';
import AccordionNavMenuContent from './AccordionNavMenuContent';

type MenuItem = {
  title: string;
  content?: {
    subTitle: string;
    links: { href: string; text: string }[];
  }[];
};

type AccordionNavMenuProps = {
  item: MenuItem;
  isOpen: boolean;
  onToggle: () => void;
};

const AccordionNavMenu = ({
  item,
  isOpen,
  onToggle,
}: AccordionNavMenuProps) => {
  return (
    <div>
      <AccordionNavMenuTrigger item={item} onToggle={onToggle} />
      <AccordionNavMenuContent item={item} isOpen={isOpen} />
    </div>
  );
};

export default AccordionNavMenu;
