"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import iconSrc from "@/cms/assets/logo/fc-icon.svg";
export default function FlyingcodeIcon() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDarkTheme(theme === "dark");
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          checkTheme();
        }
      });
    });

    checkTheme();
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Image
        src={iconSrc}
        alt="Flyingcode Logo"
        width={100}
        height={100}
        className={isDarkTheme ? "invert" : ""}
        style={{ filter: isDarkTheme ? "invert(1)" : "none" }}
      />
    </>
  );
}
