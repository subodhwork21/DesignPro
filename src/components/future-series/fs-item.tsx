import Image from "next/image";
import Link from "next/link";
import { FutureSeriesItemProps } from "@/types/future-series";

const FutureSeriesItem = ({
  title,
  subheading,
  slug,
  teaserPhoto,
}: FutureSeriesItemProps) => {
  return (
    <div className="lg:w-[300px] flex justify-center items-center relative w-full">
      <Image
        width={300}
        height={280}
        className="md:h-[280px] h-full w-full object-cover"
        src={teaserPhoto || "/images/placeholder.jpg"}
        alt={title}
      />
      <Link
        href={"/work/" + slug}
        className="absolute opacity-0 top-0 left-0 pl-8 pb-8 flex flex-col justify-end items-left hover:opacity-100 bg-tc-primary h-full w-full duration-700"
      >
        <div className="mb-8">
          <p className="text-franklin_thin text-[20px] text-white font-franklin_thin">
            {title}
          </p>
          <p className="text-white text-[13.5px]">{subheading}</p>
        </div>
        <div>
          <p className="group inline-block pr-0 text-white text-[13.5px] font-franklin_thin cursor-pointer">
            {" "}
            <span className="font-tap text-[10px] inline-block w-[54px] group-hover:pl-[14px] duration-500">
              
            </span>
            View report
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FutureSeriesItem;
