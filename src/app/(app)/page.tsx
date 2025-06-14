"use client";
import { useEffect, useState } from "react";
import LatestNews from "@/components/global/latest-news";
import FeaturedWork from "@/components/homepage/featured-work";
import { featuredWorkData } from "@/constants/featured-work-data";
import { latestNewsData } from "@/constants/news-data";
import { carouselItems } from "@/constants/home-carousel-photo-data";
import LargeCarousel from "@/components/homepage/carousel";
import DownloadForm from "@/components/global/popup-download-form";
import Link from "next/link";

export default function Home() {
  const worksToDisplay = featuredWorkData;
  const newsToDisplay = latestNewsData;

  const [contenLoad, setContentLoad] = useState<boolean>(false);
  useEffect(() => {
    if (contenLoad === false)
      setTimeout(() => {
        setContentLoad(true);
      }, 6000);
    return () =>
      clearTimeout(
        setTimeout(() => {
          setContentLoad(true);
        }, 6000)
      );
  }, []);
  const [modal, setModal] = useState<boolean>(true);

  return (
    <section className="text-tc-dark_gray font-franklin_regular">
      {contenLoad === true && modal ? (
        <DownloadForm modal={modal} setModal={setModal} />
      ) : null}
      <div className="max-w-full mx-auto">
        <LargeCarousel photoItems={carouselItems} />
      </div>
      <div className="max-w-[1000px] mx-auto pt-12">
        <div className="px-8">
          <div className="flex justify-between items-center">
            <p className="text-lg">Featured work</p>
            <Link
              href="/work"
              className="text-sm_new group font-franklin_thin cursor-pointer flex items-center"
            >
              See all projects
            </Link>
          </div>
          <div className="mt-4 grid place-content-center grid-cols-1 md:grid-cols-2 auto-cols-min gap-4">
            {worksToDisplay.map((item: any, id: number) => (
              <FeaturedWork
                key={id}
                title={item?.name}
                slug={item?.slug}
                subheading={item?.fields?.sub_heading?.text}
                teaserPhoto={item?.fields?.image?.assets?.[0]?.url}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto py-20">
        <div className="px-8">
          <div className="flex justify-between items-center">
            <p className="text-lg">Latest news</p>
            <Link
              href="/news"
              className="text-sm_new group font-franklin_thin cursor-pointer flex items-center"
            >
              See all news
            </Link>
          </div>
          <div className="mt-4 grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 auto-cols-min gap-4">
            {newsToDisplay.map((item: any, id: number) => (
              <LatestNews
                key={id}
                title={item?.fields?.title?.text}
                shortIntro={item?.teaser_text ?? ""}
                photo={item?.fields?.image?.assets[0]?.asset?.url ?? ""}
                date={item?.created_at}
                slug={item?.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
