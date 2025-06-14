import Link from "next/link";

interface propsType {
  title: string;
  subheading: string;
  slug: string;
  teaserPhoto: string;
}

const FeaturedWork = ({ title, subheading, slug, teaserPhoto }: propsType) => {
  return (
    <div className="lg:w-[463px] h-[280px] flex justify-center items-center relative overflow-hidden lg:mb-0 w-full">
      <Link href={"/work/" + slug} className="w-full h-full">
        <img className="object-fit:cover h-auto" src={teaserPhoto} alt="" />
      </Link>

      <Link
        href={"/work/" + slug}
        className="w-full overflow-hidden absolute left-0 top-0 h-full bg-tc-primary duration-700 ease-in-out flex flex-col justify-start pl-8 pt-8 text-tc-dark_gray opacity-0 hover:opacity-100"
      >
        <p className="text-xl"> {title}</p>
        <p className="text-[15px] font-tap word-spacing-neg-4">{subheading}</p>
      </Link>
    </div>
  );
};

export default FeaturedWork;
