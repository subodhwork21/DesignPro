"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import darkHoverLogo from "@/cms/assets/logo/dark-hover-logo.svg";
import darkLogo from "@/cms/assets/logo/dark-logo.svg";
import lightHoverLogo from "@/cms/assets/logo/light-hover-logo.svg";
import lightLogo from "@/cms/assets/logo/light-logo.svg";

export default function FlyingcodeLogo() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  const logoSrc = isDarkTheme
    ? isHovered
      ? darkHoverLogo
      : darkLogo
    : isHovered
      ? lightHoverLogo
      : lightLogo;

  return (
    <Image
      src={logoSrc}
      alt="Flyingcode Logo"
      width={300}
      height={200}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}
