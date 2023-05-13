"use client";

import { useState } from "react";
import NavMenuData from "@/data/NavMenuData";
import { ChevronDown, Menu } from "lucide-react";
import Typography from "@/components/Typography";
import { useSpring, animated } from "@react-spring/web";

type MenuItem = {
  title: string;
  content?: {
    subTitle: string;
    links: { href: string; text: string }[];
  }[];
};

type NavMenuData = MenuItem[];

const Accordion = ({
  item,
  isOpen,
  onToggle,
}: {
  item: MenuItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0)` : `translateY(-20px)`,
  });

  return (
    <div>
      <div onClick={onToggle}>
        <div className="group flex w-full border-b-gray-300 border-b py-4 outline-none cursor-pointer">
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

      {isOpen && (
        <animated.div
          style={animation}
          className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
        >
          <div className="flex flex-col gap-2 my-2">
            {item.content?.map((itemContent, index) => (
              <div key={index}>
                <div className="flex flex-col gap-2 p-4">
                  <h2 className="font-darker text-cyan font-extrabold text-base heading-110">
                    {itemContent.subTitle}
                  </h2>
                  {itemContent.links.map((link, index) => (
                    <ul key={index}>
                      <li>
                        <a href={link.href}>{link.text}</a>
                      </li>
                    </ul>
                  ))}
                </div>
                <div className="rounded-full w-full h-[1px] bg-gray-lighter"></div>
              </div>
            ))}
          </div>
        </animated.div>
      )}
    </div>
  );
};

const MobileNavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState<
    Record<number, boolean>
  >({});

  const menuAnimation = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? `translateY(0)` : `translateY(-20px)`,
  });

  const onMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const onAccordionToggle = (id: number) =>
    setIsAccordionOpen({ ...isAccordionOpen, [id]: !isAccordionOpen[id] });

  return (
    <div>
      <button
        onClick={onMenuToggle}
        className="rounded-full w-[35px] h-[35px] flex justify-center items-center"
      >
        <Menu />
      </button>

      {isMenuOpen && (
        <animated.div
          style={menuAnimation}
          className="absolute w-full left-0 top-19 px-4 sm:px-container shadow-lg bg-white z-30"
        >
          {(NavMenuData as NavMenuData).map((item, index) => (
            <div key={index}>
              {!item.content ? (
                <div className="flex border-b-gray-300 border-b py-4 outline-none cursor-pointer">
                  <Typography variant="body-md" className="font-bold">
                    {item.title}
                  </Typography>
                </div>
              ) : (
                <Accordion
                  item={item}
                  isOpen={isAccordionOpen[index]}
                  onToggle={() => onAccordionToggle(index)}
                />
              )}
            </div>
          ))}
        </animated.div>
      )}
    </div>
  );
};

export default MobileNavMenu;
