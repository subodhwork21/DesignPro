"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeHeader from "../homepage/home-header";
import NavItems from "./nav-items";

const Header = () => {
  const pathname: string | null = usePathname();
  const [toggleHam, setToggleHam] = useState(false);
  const [endAnimate, setEndAnimate] = useState<boolean | null>(null);

  const toggleNav = () => {
    if (toggleHam === true) {
      setEndAnimate(false);
    } else {
      setToggleHam(true);
      setEndAnimate(true);
    }
  };

  useEffect(() => {
    if (endAnimate === false) {
      setTimeout(() => {
        setToggleHam(false);
        setEndAnimate(null);
      }, 900);
    }
  }, [endAnimate]);

  let animateString = "";
  if (endAnimate === true) {
    animateString = "TAPmenu-enter-active";
  } else if (endAnimate === false) {
    animateString = "TAPmenu-leave-active";
  }
  let backgroundColor = "bg-tc-primary";
  let textColor = "text-tc-dark_gray";
  let logoColor = "text-tc-dark_gray";
  let invert = "invert-0";
  let routeType = "normal";
  let height = "custom";
  let headerToggle = false;

  if (pathname === "/work") {
    backgroundColor = "bg-tc-secondary";
    textColor = "text-white";
    logoColor = "text-tc-primary";
    invert = "invert";
  } else if (pathname === "/about") {
    backgroundColor = "bg-tc-secondary";
    textColor = "text-white";
    logoColor = "text-tc-primary";
    invert = "invert";
  } else if (pathname === "/news") {
    backgroundColor = "bg-white";
    textColor = "text-black";
    logoColor = "text-black";
    invert = "invert-0";
  } else if (pathname === "/brand-experience") {
    backgroundColor = "bg-tc-secondary";
    textColor = "text-white";
    logoColor = "text-tc-primary";
    invert = "invert";
  } else if (pathname === "/future-series") {
    backgroundColor = "bg-tc-secondary";
    textColor = "text-white";
    logoColor = "text-tc-primary";
    invert = "invert";
  } else if (
    (pathname?.includes("/work") && pathname.length > 5) ||
    (pathname?.includes("/news") && pathname.length > 5)
  ) {
    backgroundColor = "bg-tc-white";
    textColor = "text-black";
    logoColor = "text-black";
    invert = "invert";
    routeType = "slug";
    height = "auto";
    headerToggle = true;
  }

  return (
    <header
      className={`z-99 w-full ${backgroundColor} md:pb-6 pb-0 pt-10 ${
        routeType === "slug" ? "h-[240px]" : "h-auto"
      }`}
    >
      <div className="max-w-[1000px] mx-auto flex justify-center items-center sm:px-8 px-[24px]">
        <nav className="w-[100%] flex justify-between items-center">
          <p
            className={`font-tap z-20 w-auto logo-size ${
              toggleHam != false && (endAnimate != false) === true
                ? "text-tc-dark_gray"
                : logoColor
            } `}
            onClick={() => {
              setToggleHam(false);
            }}
          >
            <Link href={"/"}></Link>
          </p>
          <ul
            className={`${
              toggleHam === true ? "flex " : "hidden"
            } md:flex ${animateString} font-light md:flex-row text-fc-dark_gray flex-col md:text-nav text-nav_lg md:justify-center fixed top-0 w-full md:bg-none bg-tc-primary md:bg-transparent md:w-auto z-10 left-0 h-screen md:h-auto md:relative md-p-0 md:pt-0 md:px-0 pt-28 sm:px-8 px-[24px] md:gap-x-0`}
          >
            <NavItems
              collapseNavbar={() => {
                setToggleHam(false);
              }}
              color={toggleHam === true ? "text-tc-dark_gray" : textColor}
            />
          </ul>
          <div
            onClick={(e) => {
              toggleNav();
            }}
            className="icons flex md:hidden"
          >
            <img
              className={`md:hidden ${
                toggleHam === true ? "hidden" : "block"
              } w-[30px] h-auto ${invert}`}
              src="/navigation/hamb.svg"
              alt=""
            />
            <img
              className={`md-hidden ${
                toggleHam === true ? "block relative z-[22]" : "hidden"
              } w-[20px] h-auto`}
              src="/navigation/cross.svg"
              alt=""
            />
          </div>
        </nav>
      </div>
      {<HomeHeader />}
    </header>
  );
};

export default Header;
