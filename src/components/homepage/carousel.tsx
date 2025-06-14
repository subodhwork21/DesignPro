"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function LargeCarousel({ photoItems }: { photoItems: any }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const updateCount = () => {
      setCount(api.scrollSnapList().length);
      console.log("Carousel count:", api.scrollSnapList().length);
    };

    updateCount();
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      console.log("Current slide:", api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="max-w-full">
      <Carousel setApi={setApi} className="w-full max-w-full">
        <CarouselContent className="gap-0 p-0">
          {photoItems?.map((item: { image: string }, index: number) => (
            <CarouselItem key={index} className="w-full p-0 h-[800px] relative">
              <Image
                src={item.image}
                alt={`photo ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === index
                ? "bg-tc-secondary"
                : "bg-white border-[1px] border-black"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center mt-12 mb-12 mx-auto max-w-[450px]">
        <p className="text-tc-secondary mb-2 text-xl">
          {photoItems && photoItems[current]
            ? photoItems[current].text
            : "Defining 'The home of pet care' experience for Ireland's leading pet retailer, Petmania"}
        </p>
        <Link
          href={
            photoItems && photoItems[current]
              ? photoItems[current].link
              : "/work"
          }
          className="font-franklin_thin cursor-pointer"
        >
          View project
        </Link>
      </div>
    </div>
  );
}
