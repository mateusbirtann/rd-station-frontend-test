type ButtonProps = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "highlight";
  onClick?: () => void;
};

const Button = ({ children, type = "primary", onClick }: ButtonProps) => {
  const buttonStyles = {
    primary: {
      bgColor: "bg-primary-600",
      hoverBgColor: "hover:bg-primary-500",
      size: "w-sm h-sm",
      shadowSize: "w-sm h-1",
      border: "border-none"
    },
    secondary: {
      bgColor: "bg-secondary-50",
      hoverBgColor: "hover:bg-secondary-500",
      size: "w-sm h-sm",
      shadowSize: "w-sm h-2",
      border: "border-[3px] border-black"
    },
    highlight: {
      bgColor: "bg-highlight-600",
      hoverBgColor: "hover:bg-highlight-500",
      size: "w-md h-md",
      shadowSize: "w-md h-1",
      border: "border-none"
    },
  };

  const { bgColor, hoverBgColor, size, shadowSize,border } = buttonStyles[type];

  return (
    <>
      <div>
        <button
          className={`font-bold text-black ${size} ${bgColor} ${hoverBgColor} ${border} border-4 transition-colors duration-200`}
          onClick={onClick}
        >
          {children}
        </button>
        <div
          className={`border-b-black ${shadowSize} border-b-[4px] border-r-[8px] border-l-[8px] border-r-transparent border-l-transparent rotate-180 opacity-90`}
        ></div>
      </div>
    </>
  );
};

export default Button;
