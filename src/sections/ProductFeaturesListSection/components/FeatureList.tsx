import Typography from "@/components/Typography";
import featuresList from "@/data/featuresListData";
import { FeatureItemProps } from "@/types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const FeatureItem = ({ text }: FeatureItemProps) => (
  <div className="flex gap-4">
    <Image
      src="/checkmark.svg"
      width={24}
      height={24}
      alt="checkmark"
      className="w-6 h-6"
    />
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
  </div>
);

const FeatureList = () => {
  return (
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
        {featuresList.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
