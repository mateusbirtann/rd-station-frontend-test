import Logo from "./Logo";
import Typography from "./Typography";
import socialMediaData from "@/data/SocialMediaData";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-[221px] xl:h-[181px] bg-cyan flex items-center">
      <div className="flex flex-col w-full xs:w-[328px] xl:w-full mx-auto max-w-[1224px] gap-6">
        <div className="flex flex-col xl:flex-row w-full justify-between items-center gap-6">
          <Logo />
          <div className="xl:hidden rounded-full h-[1px] bg-[#6EF7FB] w-full"></div>
          <div className="flex gap-4">
            {socialMediaData.map((socialMediaItem, index) => {
              return (
                <a key={index} href={socialMediaItem.href} target="_blank">
                  <Image
                    width={32}
                    height={32}
                    alt="icon"
                    src={socialMediaItem.icon}
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="hidden xl:block rounded-full h-[1px] bg-[#6EF7FB] w-full"></div>

        <div className="flex w-full xl:justify-end justify-center">
          <Typography variant="body-sm">
            © 2021 RD Station. Política de Privacidade.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
