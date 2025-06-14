import Link from "next/link";
import Image from "next/image";
import { LatestNewsProps } from "@/types/news";

const LatestNews = ({
  title,
  shortIntro,
  photo,
  date,
  slug,
}: LatestNewsProps) => {
  const maxLength = 150; // Length of the intro text
  const truncatedIntro =
    shortIntro.length > maxLength
      ? `${shortIntro.substring(0, maxLength)}...`
      : shortIntro;

  return (
    <Link href={"/news/" + slug} className="block h-full">
      <div className="w-[100%] bg-tc-dark_gray/10 p-[20px] flex flex-col h-full">
        <div className="flex-shrink-0">
          <Image
            width={300}
            height={300}
            className="lg:w-[300px] w-[100%]"
            src={photo}
            alt=""
          />
        </div>
        <div className="text-tc-dark_gray flex flex-col flex-grow">
          <p className="text-xs font-franklin_thin mt-4 mb-[4px]">
            {new Date(date).getDate() +
              "." +
              (new Date(date).getMonth() + 1) +
              "." +
              new Date(date).getFullYear()}
          </p>
          <div className="h-[60px] overflow-hidden">
            <p className="text-[18px] font-franklin_regular font-bold text-tc-dark_gray line-clamp-2">
              {title}
            </p>
          </div>
          <div className="mt-4 font-tap text-[19px] leading-[21.6px] w-[90%] word-spacing-neg-5">
            <span>{truncatedIntro}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LatestNews;
