import { NewsContent, NewsCategory } from "@/types/news";

export const newsCategories: NewsCategory[] = [
  {
    id: "category-1",
    name: "Brand",
  },
  {
    id: "category-2",
    name: "Healthcare",
  },
  {
    id: "category-3",
    name: "Retial",
  },
  {
    id: "category-4",
    name: "Insights",
  },
];

export const latestNewsData: NewsContent[] = [
  {
    id: "news-1",
    slug: "tap-creative-wins-design-award",
    created_at: "2024-06-10T15:30:00Z",
    updated_at: "2024-06-10T15:30:00Z",
    teaser_text:
      "TAP Creative's work for Petmania has been recognized with a prestigious design award at this year's Irish Design Awards.",
    fields: {
      title: {
        text: "TAP Creative Wins Design Award",
      },
      image: {
        assets: [
          {
            asset: {
              url: "https://tapcreative.ie/wp-content/uploads/2024/07/Petmania_Athlone_31A5212-scaled.jpg",
            },
          },
        ],
      },
      news_category: {
        content_links: [
          {
            content_link: {
              name: "Insights",
            },
          },
          {
            content_link: {
              name: "Brand",
            },
          },
        ],
      },
    },
  },
  {
    id: "news-2",
    slug: "new-office-opening-in-dublin",
    created_at: "2024-05-22T09:15:00Z",
    updated_at: "2024-05-22T09:15:00Z",
    teaser_text:
      "Rebrands should be more than just a new logo, they should signal real transformation. But when a brand keeps its core business model, ethics, and values unchanged, does a rebrand really mean anything? PrettyLittleThing and Boohoo have both unveiled bold new identities, but are these true shifts or just cosmetic updates? At TapCreative, we believe a rebrand should be a manifestation of change, not just a change in visuals. Read our full take on when a rebrand is evolution vs. revolution and why real brand change starts from the inside out.",
    fields: {
      title: {
        text: "New Office Opening in Dublin",
      },
      image: {
        assets: [
          {
            asset: {
              url: "https://tapcreative.ie/wp-content/uploads/2024/07/Petmania_Athlone_31A5463-scaled.jpg",
            },
          },
        ],
      },
      news_category: {
        content_links: [
          {
            content_link: {
              name: "Insights",
            },
          },
        ],
      },
    },
  },
  {
    id: "news-3",
    slug: "tap-creative-partners-with-tech-startup",
    created_at: "2024-04-15T11:45:00Z",
    updated_at: "2024-04-15T11:45:00Z",
    teaser_text:
      "TAP Creative announces a strategic partnership with leading Irish tech startup to develop innovative digital solutions.",
    fields: {
      title: {
        text: "TAP Creative Partners with Tech Startup",
      },
      image: {
        assets: [
          {
            asset: {
              url: "https://tapcreative.ie/wp-content/uploads/2024/07/Petmania_Athlone_31A5510-scaled.jpg",
            },
          },
        ],
      },
      news_category: {
        content_links: [
          {
            content_link: {
              name: "Healthcare",
            },
          },
          {
            content_link: {
              name: "Retial",
            },
          },
        ],
      },
    },
  },
];
