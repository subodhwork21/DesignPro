import { WorkContent } from "@/types/work";
export const workData: WorkContent[] = [
  {
    id: "work-1",
    name: "Petmania Rebrand",
    slug: "petmania-rebrand",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z",
    fields: {
      sub_heading: {
        text: "A fresh look for Ireland's leading pet retailer",
      },
      image: {
        assets: [
          {
            url: "https://tapcreative.ie/wp-content/uploads/2024/07/Petmania_Athlone_31A5212-scaled.jpg",
          },
        ],
      },
      expertise_category: {
        content_links: [
          {
            content_link: {
              name: "Brand Strategy",
            },
          },
          {
            content_link: {
              name: "Brand Identity",
            },
          },
        ],
      },
      industry_category: {
        content_links: [
          {
            content_link: {
              name: "Retail",
            },
          },
        ],
      },
    },
  },
  {
    id: "work-2",
    name: "Kilkenny Design",
    slug: "kilkenny-design",
    created_at: "2024-02-20T14:15:00Z",
    updated_at: "2024-02-20T14:15:00Z",
    fields: {
      sub_heading: {
        text: "Crafting a digital experience for Irish artisans",
      },
      image: {
        assets: [
          {
            url: "https://tapcreative.ie/wp-content/uploads/2024/07/Petmania_Athlone_31A5463-scaled.jpg",
          },
        ],
      },
      expertise_category: {
        content_links: [
          {
            content_link: {
              name: "Digital Design",
            },
          },
          {
            content_link: {
              name: "UX/UI",
            },
          },
        ],
      },
      industry_category: {
        content_links: [
          {
            content_link: {
              name: "Craft & Design",
            },
          },
        ],
      },
    },
  },
  {
    id: "work-3",
    name: "Dublin City Council",
    slug: "dublin-city-council",
    created_at: "2024-03-10T09:45:00Z",
    updated_at: "2024-03-10T09:45:00Z",
    fields: {
      sub_heading: {
        text: "Reimagining public service digital interfaces",
      },
      image: {
        assets: [
          {
            url: "https://tapcreative.ie/wp-content/uploads/2024/07/Petmania_Athlone_31A5510-scaled.jpg",
          },
        ],
      },
      expertise_category: {
        content_links: [
          {
            content_link: {
              name: "Digital Design",
            },
          },
          {
            content_link: {
              name: "UX/UI",
            },
          },
        ],
      },
      industry_category: {
        content_links: [
          {
            content_link: {
              name: "Public Sector",
            },
          },
        ],
      },
    },
  },
  {
    id: "work-4",
    name: "Avoca Handweavers",
    slug: "avoca-handweavers",
    created_at: "2024-04-05T11:20:00Z",
    updated_at: "2024-04-05T11:20:00Z",
    fields: {
      sub_heading: {
        text: "Weaving tradition with modern digital presence",
      },
      image: {
        assets: [
          {
            url: "https://tapcreative.ie/wp-content/uploads/2024/07/Petmania_Athlone_31A5092-scaled.jpg",
          },
        ],
      },
      expertise_category: {
        content_links: [
          {
            content_link: {
              name: "Brand Identity",
            },
          },
          {
            content_link: {
              name: "Digital Design",
            },
          },
        ],
      },
      industry_category: {
        content_links: [
          {
            content_link: {
              name: "Craft & Design",
            },
          },
          {
            content_link: {
              name: "Retail",
            },
          },
        ],
      },
    },
  },
];

// Define the type for category items
export interface CategoryItem {
  name: string;
}

// Expertise categories
export const expertiseCategories: CategoryItem[] = [
  {
    name: "Brand Strategy",
  },
  {
    name: "Brand Identity",
  },
  {
    name: "Digital Design",
  },
  {
    name: "UX/UI",
  },
  {
    name: "Physical Design",
  },
];

// Industry categories
export const industryCategories: CategoryItem[] = [
  {
    name: "Retail",
  },
  {
    name: "Craft & Design",
  },
  {
    name: "Public Sector",
  },
  {
    name: "Healthcare",
  },
  {
    name: "Technology",
  },
];

export const allWorkData: [WorkContent[], CategoryItem[], CategoryItem[]] = [
  workData,
  expertiseCategories,
  industryCategories,
];
