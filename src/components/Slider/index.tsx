"use client";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typography from "@/components/Typography";

const Slider = (cards: any) => {
  return (
    <Carousel
      className="mt-6"
      showStatus={false}
      showThumbs={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              className="rounded-full bg-cyan h-6 w-6"
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            className="rounded-full border text-gray h-6 w-6"
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {cards.cards.map((card: any, index: any) => {
        return (
          <div key={index} className="flex flex-col p-6 w-full gap-4">
            <Image
              width={64}
              height={64}
              alt={"icon"}
              src={card.icon}
              className="w-16 h-16"
            />
            <Typography variant="heading-sm">{card.title}</Typography>
            <Typography variant="body-md">{card.subtitle}</Typography>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
