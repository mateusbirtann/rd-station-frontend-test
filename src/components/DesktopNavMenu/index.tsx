"use client";

import * as React from "react";
import { useState } from "react";
import Button from "@/components/Button";
import NavMenuTrigger from "./NavMenuTrigger";
import NavMenuContent from "./NavMenuContent";
import { NavMenuProps } from "@/types";

interface DesktopNavMenuProps {
  menuData: NavMenuProps[];
}

const DesktopNavMenu = ({ menuData }: DesktopNavMenuProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="flex items-center gap-16">
      <ul className="flex gap-16">
        {menuData.map((item: NavMenuProps, index) => {
          const isOpen = index === openIndex;
          return (
            <li key={index} className="group">
              <NavMenuTrigger
                item={item}
                index={index}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
              <NavMenuContent item={item} isOpen={isOpen} />
            </li>
          );
        })}
      </ul>
      <div className="flex gap-2">
        <Button type="secondary">BUTTON</Button>
        <Button>BUTTON</Button>
      </div>
    </nav>
  );
};

export default DesktopNavMenu;
