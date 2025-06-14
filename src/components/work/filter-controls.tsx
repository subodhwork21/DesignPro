"use client";
import { FilterControlsProps } from "@/types/work";
import React from "react";

const FilterControls = ({
  catType,
  expertise,
  industry,
  catExpertiseHolder,
  catIndustryHolder,
  handleFilterTypeChange,
  handleCategorySelect,
}: FilterControlsProps) => {
  return (
    <div className="max-w-[1000px] mx-auto px-8 pt-12">
      {/* Main Category Filter */}
      <p className="text-[1.2rem] flex justify-start items-center gap-4 text-white font-franklin_thin">
        <span
          onClick={() => handleFilterTypeChange("all")}
          className={`${
            catType === "all" ? "font-franklin_bold" : ""
          } inline-block cursor-pointer`}
        >
          All
        </span>
        <span
          onClick={() => handleFilterTypeChange("expertise")}
          className={`${
            catType === "expertise" ? "font-franklin_bold" : ""
          } inline-block cursor-pointer`}
        >
          Expertise
        </span>
        <span
          onClick={() => handleFilterTypeChange("industry")}
          className={`${
            catType === "industry" ? "font-franklin_bold" : ""
          } inline-block cursor-pointer`}
        >
          Industry
        </span>
      </p>

      {/* Subcategory Filter */}
      <p className="mt-2 md:text-[1.1rem] text-[1.1rem] flex justify-start md:items-center md:gap-4 text-white font-franklin_thin md:flex-row md:flex-wrap flex-col items-start gap-0">
        {catType !== "all" && catType === "expertise"
          ? expertise?.map((cat: string, id: number) => (
              <span
                key={id}
                onClick={() => handleCategorySelect(cat)}
                className={`${
                  catExpertiseHolder === cat ? "font-franklin_bold" : ""
                } inline-block cursor-pointer`}
              >
                {cat}
              </span>
            ))
          : catType === "industry"
            ? industry?.map((cat: string, id: number) => (
                <span
                  key={id}
                  onClick={() => handleCategorySelect(cat)}
                  className={`${
                    catIndustryHolder === cat ? "font-franklin_bold" : ""
                  } inline-block cursor-pointer`}
                >
                  {cat}
                </span>
              ))
            : null}
      </p>

      {/* Description text (only shown when "All" is selected) */}
      <p
        className={`${
          catType === "all" ? "block" : "hidden"
        } mt-6 text-[20px] max-w-[600px] text-white font-franklin_thin`}
      >
        Check out some of our work across brand strategy, brand identity,
        physical and digital design.
      </p>
    </div>
  );
};

export default FilterControls;
