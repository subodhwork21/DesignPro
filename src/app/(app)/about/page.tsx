"use client";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import ExpertiseSection from "@/components/about/expertise-section";
import CrewDetail from "@/components/about/crew-detail";
import SliderSection from "@/components/about/slider-section";
import { crewData } from "@/constants/crew-data";
import { brandsData } from "@/constants/brands-data";

const About = () => {
  const [boldCrewToggle, setBoldCrewToggle] = useState([false, 0]);

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <section className="w-full bg-tc-secondary">
      <div className="max-w-[1000px] mx-auto px-8 py-14 text-white">
        <h1 className="text-[45px] mb-6">Experience is everything</h1>
        <p className="text-[2rem] font-franklin_thin mb-6 leading-10">
          That's why we're a passionate team of brand experience architects -
          strategists, designers, and innovators who create compelling
          interactions between people, places and brands.
        </p>
        <p className="text-[2rem] font-franklin_thin mb-6 leading-10">
          We understand that brand value and growth are increasingly driven by
          the quality of the brand experience people have across all
          touchpoints: live, on screen, in-store, or in-hand.
        </p>
        <p className="text-[2rem] font-franklin_thin mb-6 leading-10">
          But great experiences don't just happen by chance. We imagine,
          engineer and elevate them.
        </p>
        <p className="text-[2rem] mb-12 leading-10">
          We are TapCreative. Architects of Experience.
        </p>
      </div>
      <ExpertiseSection />
      <CrewDetail crewData={crewData} />

      {/* slider starts */}
      <SliderSection />
      <div className="max-w-[1000px] mx-auto px-8 py-8 text-white">
        <div className="text-[1.35rem] md:text-[1.4rem] mb-12">
          <p>Brands who trust us..</p>
          <div className="grid md:grid-cols-4 mt-12 grid-cols-2">
            {brandsData.map((brand) => (
              <img
                key={brand.id}
                className="w-[70%] h-[50px] mb-16"
                src={brand.src}
                alt={brand.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
