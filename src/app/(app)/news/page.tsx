"use client";
import React, { useState } from "react";
import { latestNewsData, newsCategories } from "@/constants/news-data";
import NewsClient from "@/components/news/news-client";

const News: React.FC = () => {
  const [news] = useState(latestNewsData);
  const [newsCategory] = useState(newsCategories);
  const [selectedCategory, setSelectedCategory] = useState("Latest");
  const [category] = useState<string[]>([
    "Latest",
    ...newsCategory.map((item) => item.name),
  ]);

  const handleClickNews = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full">
      <div className="max-w-[1000px] mx-auto px-8 md:py-16 py-8 text-tc-dark_gray">
        <h1 className="md:mb-20 mb-12 md:w-[530px] text-[31.984px] leading-9">
          Our ideas, insights, news, for good. You'll find them here.
        </h1>
        <ul className="flex lg:gap-6 md:gap-4 gap-0 justify-start md:items-center items-start md:flex-row md:flex-wrap flex-col">
          {category.map((item, index) => (
            <li
              onClick={() => handleClickNews(item)}
              key={index}
              data-cat={item}
              className={`md:text-[1.3rem] text-[1.2rem] cursor-pointer ${
                selectedCategory === item
                  ? "font-franklin_bold"
                  : "font-franklin_thin"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div>
          <NewsClient dataProcessed={news} category={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default News;
