"use client";
import React, { useState, useEffect } from "react";

import { propNewsClientTypes } from "@/types/news";
import LatestNews from "../global/latest-news";
import { latestNewsData } from "@/constants/news-data";
const NewsClient = ({
  dataProcessed = latestNewsData,
  category,
}: propNewsClientTypes) => {
  const [length, setLength] = useState([dataProcessed.length, 24]);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(0);
  const [totalItemsFinal, setTotalItemsFinal] = useState<React.ReactNode[]>([]);

  const fetchItems = () => {
    setLength([dataProcessed.length, length[1] + 24]);
  };

  useEffect(() => {
    const totalItems = dataProcessed
      .map((item, id) => {
        if (category === "Latest") {
          return (
            <LatestNews
              key={id}
              title={item?.fields?.title?.text}
              shortIntro={item?.teaser_text ?? ""}
              photo={item?.fields?.image?.assets[0]?.asset?.url ?? ""}
              date={item?.created_at}
              slug={item?.slug}
            />
          );
        }
        let cat: string[] = [];
        item?.fields?.news_category?.content_links?.forEach(
          (element: { content_link: { name: string } }, i: number) => {
            cat.push(element?.content_link?.name);
          }
        );
        if (cat.indexOf(category) !== -1) {
          return (
            <LatestNews
              key={id}
              title={item?.fields?.title?.text}
              shortIntro={item?.teaser_text ?? ""}
              photo={item?.fields?.image?.assets[0]?.asset?.url ?? ""}
              date={item?.created_at}
              slug={item?.slug}
            />
          );
        }
        return null;
      })
      .filter((item) => item !== null);

    const filteredItems = totalItems.filter((_, id) => id < length[1]);

    setTotalItemsFinal(filteredItems);
    setItems(totalItems.length);
    setLoading(false);
  }, [dataProcessed, category, length]);

  useEffect(() => {
    setLength([dataProcessed.length, 24]);
  }, [category, dataProcessed.length]);

  return (
    <>
      <div className="mt-8 grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 auto-cols-min gap-4 w-full">
        {totalItemsFinal}
      </div>
      {items > length[1] ? (
        <div className="w-full flex justify-center items-center">
          <div
            onClick={() => fetchItems()}
            className="mt-16 text-[1rem] font-bold text-center bg-tc-primary w-[160px] text-white rounded-sm py-2.5 cursor-pointer uppercase duration-200 hover:bg-tc-Light_Grey"
          >
            Show more
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default NewsClient;
