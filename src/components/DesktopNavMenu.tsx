"use client";

import * as React from "react";
import { useState } from "react";
import NavMenuData from "@/data/NavMenuData";
import { ChevronDown } from "lucide-react";
import Typography from "./Typography";
import { useSpring, animated } from "@react-spring/web";
import Button from "./Button";

interface NavMenuProps {
  title: string;
  content?: { subTitle: string; links: { text: string; href: string }[] }[];
}

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  subTitle: string;
  links: { text: string; href: string }[];
}

const buildNavigationMenuTrigger = (
  item: NavMenuProps,
  index: number,
  openIndex: number | null,
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>
) => {
  const isOpen = index === openIndex;
  return (
    <button
      onClick={() => setOpenIndex(isOpen ? null : index)}
      className="flex justify-center items-center gap-1"
    >
      <Typography variant="body-md" className="font-bold">
        {item.title}
      </Typography>
      {item.content && (
        <ChevronDown
          className={`${
            isOpen ? "rotate-180" : ""
          } w-4 h-4 transition-transform duration-[250] ease-in`}
        />
      )}
    </button>
  );
};

const buildNavigationMenuContentItems = (
  contentItems: { subTitle: string; links: { text: string; href: string }[] }[]
) => {
  return contentItems.map((contentItem, index) => (
    <ListItem
      key={index}
      subTitle={contentItem.subTitle}
      links={contentItem.links}
    />
  ));
};

interface NavContentProps {
  item: NavMenuProps;
  isOpen: boolean;
}

const NavContent: React.FC<NavContentProps> = ({ item, isOpen }) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0)` : `translateY(-20px)`,
  });

  if (!item.content) {
    return null;
  }

  return (
    item.content && (
      <animated.div
        style={animation}
        className={`${
          isOpen ? "block" : "hidden"
        } absolute left-0 top-20 mx-auto flex gap-10 w-full px-container p-4 bg-white shadow-lg z-30`}
      >
        {buildNavigationMenuContentItems(item.content)}
      </animated.div>
    )
  );
};

const ListItem = ({ subTitle, links }: ListItemProps) => (
  <div className="flex flex-col gap-4">
    <h2 className="font-darker text-cyan font-extrabold text-lg heading-110">
      {subTitle}
    </h2>
    <div className="rounded-full w-full h-[1px] bg-gray-lighter"></div>
    {links.map((link, index) => (
      <ul key={index}>
        <li>
          <a href={link.href}>{link.text}</a>
        </li>
      </ul>
    ))}
  </div>
);

const DesktopNavMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="flex items-center gap-16">
      <ul className="flex gap-16">
        {NavMenuData.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <li key={index} className="group">
              {buildNavigationMenuTrigger(item, index, openIndex, setOpenIndex)}
              <NavContent item={item} isOpen={isOpen} />
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
