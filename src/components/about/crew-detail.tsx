"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CrewDetail({ crewData }: { crewData: any }) {
  const [crewIndex, setCrewIndex] = useState(0);
  const [boldCrewToggle, setBoldCrewToggle] = useState([false, 0]);
  const crewsdata = crewData;
  const imageRender = (ref: string) => {
    return ref;
  };

  return (
    <div className="max-w-[1000px] mx-auto px-8 py-8 text-white">
      <p className="text-[1.4rem] md:text-[1.4rem]">The crew behind it all</p>
      <div className="md:grid hidden lg:grid-cols-6 grid-cols-5 mt-6 gap-32 max-w-[1000px]">
        <div className="lg:col-span-2 col-span-2">
          <div
            style={{
              backgroundColor: `${
                crewsdata && crewsdata[crewIndex].crew_settings.color.hex
              }`,
            }}
            className="w-[290px] relative h-[300px] flex justify-center items-center overflow-hidden"
          >
            <img
              className="h-[300px] mt-[50px]"
              src={
                crewsdata &&
                imageRender(crewsdata[crewIndex].crew_settings.photo.asset._ref)
              }
              alt=""
            />
            <div className="absolute top-0 right-0 p-4">
              <Link
                className="bg-white w-10 h-10 rounded-full flex justify-center items-center"
                href={
                  crewsdata === null
                    ? ""
                    : crewsdata[crewIndex].crew_settings.linkedin
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-4 text-[0.8rem] flex flex-col gap-1">
            <span
              style={{
                color:
                  crewsdata && crewsdata[crewIndex].crew_settings?.color.hex,
              }}
            >
              {crewsdata && crewsdata[crewIndex].crew_settings?.email}
            </span>
            <span
              style={{
                color:
                  crewsdata && crewsdata[crewIndex].crew_settings?.color.hex,
              }}
            >
              {crewsdata && crewsdata[crewIndex].crew_settings?.mobile}
            </span>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-4">
          {crewsdata &&
            crewsdata.map((info: any, id: number) => {
              return (
                <div
                  key={id}
                  onMouseMove={() => setCrewIndex(id)}
                  className={`${
                    id === crewIndex ? "bg-gray-500 group" : ""
                  }  flex text-[13.2px] justify-between items-center border border-l-0 border-r-0 border-b-0 border-white/40 py-3.5 px-3 font-franklin_thin cursor-pointer`}
                >
                  <p className="group-hover:font-franklin_bold">
                    {crewsdata && info?.title}
                  </p>
                  <p className="w-[200px] group-hover:font-franklin_bold">
                    {crewsdata && info.crew_settings?.position}
                  </p>
                </div>
              );
            })}
          <div></div>
        </div>
      </div>

      {/* Mobile View with Shadcn Carousel replacing Swiper */}
      <div className="md:hidden relative mt-8">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {crewsdata &&
              crewsdata.map((c: any, id: number) => (
                <CarouselItem key={id} className="pl-4 basis-[280px]">
                  <div className="flex flex-col items-start gap-0">
                    <div
                      style={{
                        backgroundColor: `${c.crew_settings?.color.hex}`,
                      }}
                      className="w-[280px] flex justify-center items-end h-[300px] relative"
                    >
                      <div className="absolute pt-2 top-0 right-2 text-white">
                        <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                          <Link
                            className="font-tap text-[1.2rem] absolute"
                            href={c.crew_settings?.linkedin}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19"
                              height="19"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-linkedin"
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                      <img
                        className="h-[280px]"
                        src={imageRender(c.crew_settings?.photo.asset._ref)}
                        alt=""
                      />
                    </div>
                    <div className="text-white mt-4">
                      <p className="text-[1.1rem]">{c.title}</p>
                      <p className="font-franklin_thin text-xs">
                        {c.crew_settings?.email}
                        <span>&nbsp; &nbsp; | &nbsp; &nbsp;</span>
                        {c.crew_settings?.mobile}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
