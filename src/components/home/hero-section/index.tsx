"use client"

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Galaxy-S24",
    image: "https://i.ibb.co/YyRRcNC/Galaxy-S24-Series.webp",
  },
  {
    id: 2,
    name: "Galaxy-S24",
    image: "https://i.ibb.co/71MFXG9/Pixel-8-Series.webp",
  },
  {
    id: 3,
    name: "Galaxy-S24",
    image: "https://i.ibb.co/FX0CY25/i-Phone-15-Series.webp",
  },
];

const HeroSection = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div data-aos="fade-up" className="relative">
      <Carousel
        plugins={[plugin.current]}
        // className="w-full min-h-screen mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <div>
                <Card>
                  <CardContent className="p-0 bg-cover lg:h-screen h-fit w-full">
                    <Image src={product.image} alt={product.name} layout="responsive" width={400} height={400}/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 " />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 " />
      </Carousel>
    </div>
  );
};

export default HeroSection;
