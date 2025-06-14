"use client";
import React from "react";
import { FSContent } from "@/types/future-series";
import { futureSeriesData } from "@/constants/future-series-data";
import FutureSeriesGrid from "@/components/future-series/fs-grid";

const FutureSeries: React.FC = () => {
  const projects: FSContent[] = futureSeriesData;

  const getTeaserPhoto = (project: FSContent): string => {
    return project.fields.image?.assets?.[0]?.url || "/images/placeholder.jpg";
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="text-white text-center py-20">
        Loading future series data...
      </div>
    );
  }

  return (
    <section className="bg-tc-secondary w-full pb-32">
      <div className="max-w-[1000px] mx-auto pt-16 px-8">
        <h1 className="text-5xl text-white mb-6">Future Series</h1>
        <h2 className="text-3xl text-white font-franklin_thin leading-10">
          Welcome to our future series in which we explore a range of industry
          sectors, including forecourts to healthcare and everything inbetween.
          How social habits to technology are transforming the way consumers
          engage with brands. This is our glimpse into the future.
        </h2>
      </div>

      <FutureSeriesGrid
        projects={projects}
        shouldDisplayProject={() => true}
        getTeaserPhoto={getTeaserPhoto}
      />
    </section>
  );
};

export default FutureSeries;
