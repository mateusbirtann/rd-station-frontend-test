"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Typography from "@/components/Typography";
import { useSpring, animated } from "@react-spring/web";
import AccordionNavMenu from "./AccordionNavMenu";
import { NavMenuProps } from "@/types";
import Button from "@/components/Button";
import Image from "next/image"

interface MobileNavMenuProps {
  menuData: NavMenuProps[];
}

const MobileNavMenu = ({ menuData }: MobileNavMenuProps) => {
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
        aria-label="mostrar menu"
        className="rounded-full w-[35px] h-[35px] flex justify-center items-center text-cyan"
      >
        <Menu />
      </button>

      {isMenuOpen && (
        <animated.div
          style={menuAnimation}
          className="absolute w-full left-0 top-20 px-4 shadow-lg bg-white z-30"
        >
          {menuData.map((item, index) => (
            <div key={index}>
              {!item.content ? (
                <div className="flex border-b-gray-lighter border-b py-4 outline-none cursor-pointer">
                  <Typography variant="body-md" className="font-bold">
                    {item.title}
                  </Typography>
                </div>
              ) : (
                <AccordionNavMenu
                  item={item}
                  isOpen={isAccordionOpen[index]}
                  onToggle={() => onAccordionToggle(index)}
                />
              )}
            </div>
          ))}
      <div className="flex gap-2 justify-center my-4">
        <Button type="secondary">BUTTON</Button>
        <Button
          size={"custom"}
          className="h-10 w-[122px]"
          icon={
            <Image
              src="/arrow-right.svg"
              className="w-6 h-6"
              alt="arrow-right"
              width={20}
              height={20}
            />
          }
        >
          BUTTON
        </Button>
      </div>
        </animated.div>
      )}
    </div>
  );
};

export default MobileNavMenu;
