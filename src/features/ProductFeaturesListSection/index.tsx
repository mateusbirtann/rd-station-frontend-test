import Image from "next/image";
import FeatureList from "./components/FeatureList";

const ProductFeaturesListSection = () => {
  return (
    <div className="bg-gray-lightest w-full relative px-4 xl:px-0 pt-10 xl:py-10">
      <div className="flex flex-col relative z-10 w-full max-w-[1224px]  xs:w-[328px] xl:justify-between xl:flex-row xl:w-full mx-auto">
        <Image
          width={600}
          height={600}
          src={"/result-section-img.png"}
          alt="Resultados previsíveis e mais clientes para sua empresa"
          className="order-2 xl:order-1 mt-10 xl:mt-0"
        />
        <FeatureList />
      </div>
    </div>
  );
};

export default ProductFeaturesListSection;
