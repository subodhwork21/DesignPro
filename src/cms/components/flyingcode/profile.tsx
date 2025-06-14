"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import fcIconOrg from "@/cms/assets/logo/fc-icon-org.svg";
import fcIcon from "@/cms/assets/logo/fc-icon.svg";

export default function FlyingcodeProfile() {
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

  return (
    <div
      className="tap2025-logo-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? fcIconOrg : fcIcon}
        alt="Flyingcode Logo"
        width={40}
        height={40}
        className={isDarkTheme && !isHovered ? "invert" : ""}
        style={{
          filter: isDarkTheme && !isHovered ? "invert(1)" : "none",
          transition: "all 0.3s ease",
        }}
      />
    </div>
  );
}
