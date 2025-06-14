"use client";
import { usePathname } from "next/navigation";
const HomeHeader = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    return (
      <>
        <h1 className="max-w-[1000px] mx-auto text-liquid_h md:mt-8 mt-0 md:pt-10 pt-10 sm:px-8 px-[24px] text-tc-dark_gray font-franklin_regular leading-tight home-header-h1">
          Experience is the ultimate brand differentiator
        </h1>
        <div className="max-w-[1000px] mx-auto py-8 pt-4 sm:px-8 px-[24px]">
          <p className="text-left font-franklin_thin font-semibold md:text-[28px] text-[16px] md:leading-[33.6px] leading-[24px]">
            We imagine, engineer and elevate brands <br />
            for the age of experience.
          </p>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default HomeHeader;
