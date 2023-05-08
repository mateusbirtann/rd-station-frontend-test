// components/Logo.tsx
import React from "react";

type LogoProps = {
  variant?: "bw" | "default";
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ variant = "default", className }) => {
  const logoPath = variant === "bw" ? "/logo-bw.svg" : "/logo-default.svg";

  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoPath} alt="Logo" className="w-auto h-12" />
    </div>
  );
};

export default Logo;
