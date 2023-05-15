// components/Logo.tsx
import Image from "next/image";
import React from "react";

type LogoProps = {
  variant?: "bw" | "default";
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ variant = "default", className }) => {
  const logoPath = variant === "bw" ? "/logo-bw.svg" : "/logo-default.png";

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={logoPath}
        alt="RD Station logo"
        className="w-44 h-8"
        width={522}
        height={96}
      />
    </div>
  );
};

export default Logo;
