type ButtonProps = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "highlight";
  onClick?: () => void;
  className?: string;
  size?: 'custom'
  icon?: React.ReactNode;
};

const Button = ({
  children,
  type = "primary",
  onClick,
  className,
  size,
  icon
}: ButtonProps) => {
  const buttonStyles = {
    primary: {
      bgColor: "bg-primary-600",
      hoverBgColor: "hover:bg-primary-500",
      defaultSize: "w-sm h-sm",
      shadowSize: "w-sm h-1",
      border: "border-none",
    },
    secondary: {
      bgColor: "bg-secondary-50",
      hoverBgColor: "hover:bg-secondary-500",
      defaultSize: "w-sm h-sm",
      shadowSize: "w-sm h-2",
      border: "border-[3px] border-black",
    },
    highlight: {
      bgColor: "bg-highlight-600",
      hoverBgColor: "hover:bg-highlight-500",
      defaultSize: "w-md h-md",
      shadowSize: "w-md h-1",
      border: "border-none",
    },
  };

  const { bgColor, hoverBgColor, shadowSize, border, defaultSize } =
    buttonStyles[type];

  return (
    <>
      <div className={`${className}`}>
        <button
          className={`flex justify-center items-center font-bold text-black ${size === 'custom' ? '' : defaultSize } ${bgColor} ${hoverBgColor} ${border} border-4 transition-colors duration-200 ${className}`}
          onClick={onClick}
        >
          {children}
          {icon && <span className="ml-2">{icon}</span>}
        </button>
        <div
          className={`border-b-black ${size === 'custom' ? '' : shadowSize } border-b-[4px] border-r-[8px] border-l-[8px] border-r-transparent border-l-transparent rotate-180 opacity-90`}
        ></div>
      </div>
    </>
  );
};

export default Button;
