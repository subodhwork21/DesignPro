"use client";
import React, { useEffect, useState } from "react";
import { WorkContent } from "@/types/work";
import { allWorkData } from "@/constants/work-data";
import FilterControls from "@/components/work/filter-controls";
import WorkGrid from "@/components/work/work-grid";

const Work = () => {
  const [projects, expertiseCategories, industryCategories] = allWorkData;

  const [expertise, setExpertise] = useState<string[]>([]);
  const [industry, setIndustry] = useState<string[]>([]);
  const [catType, setCatType] = useState<string>("all");
  const [catIndustryHolder, setCatIndustryHolder] = useState<string>("");
  const [catExpertiseHolder, setCatExpertiseHolder] = useState<string>("");

  useEffect(() => {
    if (expertiseCategories?.length > 0) {
      const expertiseNames = expertiseCategories.map(
        (category) => category.name
      );
      setExpertise(expertiseNames);
    }

    if (industryCategories?.length > 0) {
      const industryNames = industryCategories.map((category) => category.name);
      setIndustry(industryNames);
    }
  }, [expertiseCategories, industryCategories]);

  const handleFilterTypeChange = (type: string) => {
    if (type === "expertise") {
      setCatType("expertise");
      if (expertise.length > 0 && !catExpertiseHolder) {
        setCatExpertiseHolder(expertise[0]);
      }
    } else if (type === "industry") {
      setCatType("industry");
      if (industry.length > 0 && !catIndustryHolder) {
        setCatIndustryHolder(industry[0]);
      }
    } else {
      setCatType("all");
    }
  };

  const handleCategorySelect = (categoryName: string) => {
    if (catType === "industry") {
      setCatIndustryHolder(categoryName);
    } else {
      setCatExpertiseHolder(categoryName);
    }
  };

  const shouldDisplayProject = (project: WorkContent) => {
    if (catType === "all") {
      return true;
    }

    const categories: string[] = [];
    if (catType === "industry") {
      project.fields.industry_category?.content_links?.forEach((element) => {
        categories.push(element.content_link.name);
      });
      return categories.includes(catIndustryHolder);
    } else {
      project.fields.expertise_category?.content_links?.forEach((element) => {
        categories.push(element.content_link.name);
      });
      return categories.includes(catExpertiseHolder);
    }
  };

  const getTeaserPhoto = (project: WorkContent): string => {
    return (
      project.fields.image?.assets?.[0]?.url ||
      project.fields.image?.photo_banner?.assets?.[0]?.url ||
      "/images/placeholder.jpg"
    );
  };

  useEffect(() => {
    if (
      expertise.length > 0 &&
      catType === "expertise" &&
      !catExpertiseHolder
    ) {
      setCatExpertiseHolder(expertise[0]);
    }
  }, [expertise, catType, catExpertiseHolder]);

  useEffect(() => {
    if (industry.length > 0 && catType === "industry" && !catIndustryHolder) {
      setCatIndustryHolder(industry[0]);
    }
  }, [industry, catType, catIndustryHolder]);

  if (!projects || projects.length === 0) {
    return (
      <div className="text-white text-center py-20">Loading work data...</div>
    );
  }

  return (
    <section className="bg-tc-secondary w-full pb-32">
      <FilterControls
        catType={catType}
        expertise={expertise}
        industry={industry}
        catExpertiseHolder={catExpertiseHolder}
        catIndustryHolder={catIndustryHolder}
        handleFilterTypeChange={handleFilterTypeChange}
        handleCategorySelect={handleCategorySelect}
      />

      <WorkGrid
        projects={projects}
        shouldDisplayProject={shouldDisplayProject}
        getTeaserPhoto={getTeaserPhoto}
      />
    </section>
  );
};

export default Work;
