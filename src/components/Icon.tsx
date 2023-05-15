import React from "react";

interface IconProps {
  src: string;
  alt?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt = "", className = "" }) => {
  return (
    <img
      className={`w-6 h-6 ${className}`} // Defina o tamanho do ícone aqui ou na propriedade className
      src={process.env.PUBLIC_URL + "/" + src}
      alt={alt}
    />
  );
};

export default Icon;
