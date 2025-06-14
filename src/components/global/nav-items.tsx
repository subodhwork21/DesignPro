import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/utils/routes";

interface NavItemsProps {
  collapseNavbar: () => void;
  color: string;
  textColor?: string | null;
}

const navLinks = routes;

const NavItems: React.FC<NavItemsProps> = ({
  collapseNavbar,
  color,
  textColor = null, // Not currently used but kept for API compatibility
}) => {
  const pathname = usePathname();

  const getLinkClasses = (path: string) => ({
    listItemClass: `${color} hover:ml-12 md:hover:ml-0 duration-700  ${
      pathname === path ? "ml-12 md:ml-0" : ""
    }`,
    linkClass: `font-franklin_thin md:px-[10px] nav-item-size ${
      pathname === path ? "md:font-franklin_bold" : "md:font-franklin_regular"
    }`,
  });

  const handleContactClick = (path: string) => {
    collapseNavbar();

    if (path.includes("/contact")) {
      setTimeout(() => {
        const footer = document.querySelector("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      {navLinks.map(({ path, label }) => {
        const classes = getLinkClasses(path);
        const isContactLink = path.includes("/contact");

        return (
          <li
            key={path}
            onClick={() => handleContactClick(path)}
            className={classes.listItemClass}
          >
            {isContactLink ? (
              <a
                className={classes.linkClass}
                href={path}
                onClick={(e) => {
                  e.preventDefault();
                  handleContactClick(path);
                }}
              >
                {label}
              </a>
            ) : (
              <Link className={classes.linkClass} href={path}>
                {label}
              </Link>
            )}
          </li>
        );
      })}
    </>
  );
};

export default NavItems;
