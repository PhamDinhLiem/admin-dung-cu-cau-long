"use client";

import React from "react";
import { Carousel } from "@material-tailwind/react";
import { CarouselWrapper } from "./styled";
import useWindowResize from "@/hooks/use-window-resize";

interface CarouselProps {
  children: any;
  height?: number;
  className?: string;
}

const CarouselCustom = ({ children, height = 400, className = "" }: CarouselProps) => {
  const size: any = useWindowResize();

  return (
    <CarouselWrapper>
      <Carousel
        autoplayDelay={7000}
        loop
        autoplay
        style={{ height: size.width >= 786 ? height : 300, objectFit: "cover" }}
        className={className}
      >
        {children}
      </Carousel>
    </CarouselWrapper>
  );
};

export default CarouselCustom;
