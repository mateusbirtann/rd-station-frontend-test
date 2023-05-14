import * as React from "react";
import { ChevronDown } from "lucide-react";
import Typography from "@/components/Typography";
import { NavMenuTriggerProps } from "@/types";

const NavMenuTrigger = ({
  item,
  index,
  openIndex,
  setOpenIndex,
}: NavMenuTriggerProps) => {
  const isOpen = index === openIndex;

  const handleToggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <button
      data-testid="nav-menu-trigger"
      onClick={handleToggle}
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

export default NavMenuTrigger;
