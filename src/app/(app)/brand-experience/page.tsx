import { Button } from "@/components/ui/button";
import React from "react";
import Script from "next/script";

const BrandExperience = () => {
  return (
    <>
      <Script
        src="https://muse.ai/static/js/embed-player.min.js"
        strategy="afterInteractive"
      />
      <section className="w-full bg-tc-secondary">
        <div className="max-w-[1000px] mx-auto px-8 py-14 text-white">
          <h1 className="text-[2rem] mb-5">Brand Experience (BX)</h1>
          <h2 className="text-[2rem] mb-8 font-franklin_thin leading-10">
            We live in an experience economy. From the screens in our hands to
            the screens and connected spaces in our cars, homes, office,
            airports or local shops. The interface is a defining touch point in
            how brand value is created and delivered to people.
          </h2>
          <p className="text-[2rem] mb-16 font-franklin_thin leading-10">
            Fusing innovation with human insight, we create brand experiences
            that people want to engage with and help brands grow.
          </p>
          <div className="max-w-full h-auto mb-16">
            <div
              className="muse-video-player"
              data-video="zz8VjF7"
              data-search="0"
              data-links="0"
              data-logo="0"
              data-title="0"
              data-autoplay="1"
              data-width="100%"
              data-style="minimal"
            ></div>
          </div>
          <div className="w-full flex flex-col items-center">
            <h3 className="text-center text-lg">
              See how BX can drive your brand growth
            </h3>
            <p className="mb-4 text-center text-lg font-franklin_thin">
              We'd love to chat about how we can transform your brand
            </p>
            <Button className="font-franklin_thin text-base" variant={"ghost"}>
              Book your slot
            </Button>
          </div>
          <div className="grid md:grid-cols-4 mt-16 grid-rows-2 md:grid-rows-1 gap-8 items-center mb-12">
            <div className="md:col-span-3 row-span-2 mb-4 md:mb-0 ">
              <h3 className="text-2xl font-franklin_thin mb-8">
                Brand experience design in practice:
              </h3>
              <p className="text-2xl font-franklin_thin mb-8 leading-7">
                Designing the brand experience must transcend marketing, and
                recognise the combined impact of brand identity and
                communication, CX and the workplace experience.
              </p>
            </div>
            <div className="md:flex hidden flex-row justify-left items-center gap-4 col-span-1">
              <div className="text-tc-primary cursor-pointer">
                <div className="inline-block align-middle">
                  <div className="text-sm">'Drive Brand Growth With BX'</div>
                  <span className="text-sm font-franklin_thin">
                    Read the article here
                  </span>
                </div>
              </div>
              <img
                className="w-[100px] h-[142px]"
                src="https://tapcreative.ie/wp-content/uploads/2023/01/Article-BX.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandExperience;
