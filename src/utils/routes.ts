import { Route } from "@/types/global";
import { NextMiddleware } from "next/server";
export const routes: Route[] = [
  {
    path: "/work",
    label: "Work",
    metadata: {
      title: "Our Work | Company Name",
      description: "Explore our portfolio of projects and case studies.",
    },
  },
  {
    path: "/about",
    label: "About",
    metadata: {
      title: "About Us | Company Name",
      description: "Learn about our team, mission, and values.",
    },
  },
  {
    path: "/news",
    label: "News",
    metadata: {
      title: "Latest News | Company Name",
      description:
        "Stay updated with our latest announcements and industry insights.",
    },
  },
  {
    path: "/brand-experience",
    label: "Brand Experience",
    metadata: {
      title: "Brand Experience | Company Name",
      description:
        "Discover our approach to creating memorable brand experiences.",
    },
  },
  {
    path: "/future-series",
    label: "Future Series",
  },
  {
    path: "/contact",
    label: "Contact",
    metadata: {
      title: "Contact Us | Company Name",
      description:
        "Get in touch with our team for inquiries and collaborations.",
    },
  },
];

export const getRouteByPath = (path: string): Route | undefined => {
  return routes.find((route) => route.path === path);
};

export const getRouteMetadata = (path: string) => {
  const route = getRouteByPath(path);
  return (
    route?.metadata || {
      title: "Company Name",
      description: "Welcome to our website",
    }
  );
};
export const routeMiddleware: NextMiddleware = async (request) => {
  return;
};

export default routes;
