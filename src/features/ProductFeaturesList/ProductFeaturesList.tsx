import Typography from "@/components/Typography";
import { Check } from "lucide-react";
import Image from "next/image";

const ProductFeaturesList = () => {
  return (
    <div className="bg-gray-lightest w-full relative px-4 xl:px-0 pt-10 xl:py-10">
      {/* <div className="bg-triangle-b"></div> */}
      <div className="flex flex-col relative z-10 w-full max-w-[1224px]  xs:w-[328px]  xl:justify-between xl:flex-row xl:w-full mx-auto">
        <Image
          width={600}
          height={600}
          src={"/result-section-img.png"}
          alt="Resultados previsíveis
e mais clientes para sua empresa"
          className="order-2 xl:order-1 mt-10 xl:mt-0"
        />
        <div className="xl:w-[496px] order-1 xl:order-2">
          <div className="gap-2 flex flex-col xl:gap-6">
            <Typography variant="heading-sm">
              Resultados previsíveis e mais clientes para sua empresa
            </Typography>
            <Typography variant="body-lg">
              Torne sua atuação no Marketing Digital mais eficaz
            </Typography>
          </div>
          <div className="flex flex-col gap-6 xl:mt-10 mt-6">
            <div className="flex gap-4">
              <Check className="w-6 h-6" />
              <Typography variant="body-md">
                Ferramentas intuitivas e com modelos prontos, vídeos
                explicativos e passo a passo guiado
              </Typography>
            </div>
            <div className="flex gap-4">
              <Check className="w-6 h-6" />
              <Typography variant="body-md">
                Ferramentas intuitivas e com modelos prontos, vídeos
                explicativos e passo a passo guiado
              </Typography>
            </div>
            <div className="flex gap-4">
              <Check className="w-6 h-6" />
              <Typography variant="body-md">
                Ferramentas intuitivas e com modelos prontos, vídeos
                explicativos e passo a passo guiado
              </Typography>
            </div>
            <div className="flex gap-4">
              <Check className="w-6 h-6" />
              <Typography variant="body-md">
                Ferramentas intuitivas e com modelos prontos, vídeos
                explicativos e passo a passo guiado
              </Typography>
            </div>
            <div className="flex gap-4">
              <Check className="w-6 h-6" />
              <Typography variant="body-md">
                Ferramentas intuitivas e com modelos prontos, vídeos
                explicativos e passo a passo guiado
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeaturesList;
