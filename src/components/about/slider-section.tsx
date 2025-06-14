import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { designForGood } from "@/constants/design-for-good-date";

export default function SliderSection() {
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
    <div className="max-w-[1000px] mx-auto px-8 py-8 text-white">
      <p className="text-[1.4rem] md:text-[1.4rem] mb-12">Design For Good</p>
      <div className="relative grid md:grid-cols-2 gap-8 mb-32 grid-cols-1 lg:items-start items-center">
        <div>
          <Carousel setApi={setApi} className="h-[320px]">
            <CarouselContent>
              {designForGood.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={image.className}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center gap-2 mt-0">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index
                    ? "bg-white"
                    : "bg-tc-secondary border-[1px] border-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-[1.5rem] font-franklin_thin leading-7">
          <p className="mb-6">
            Using our skills as creatives to create positive change in our
            communities is one of our core missions. Each year, we work with a
            number of charitable organisations for social causes that are
            important to us.
          </p>
          <p>
            We've created identities, store designs, branded environments,
            websites, whatever they need to make a difference.
          </p>
        </div>
      </div>
    </div>
  );
}
