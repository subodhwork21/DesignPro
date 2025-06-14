export interface ContentLink {
  name: string;
}

export interface CategoryLink {
  content_link: ContentLink;
}

export interface Category {
  content_links: CategoryLink[];
}

export interface WorkFields {
  sub_heading: {
    text: string;
  };
  image: {
    assets: {
      url: string;
    }[];
    photo_banner?: {
      assets: {
        url: string;
      }[];
    };
  };
  expertise_category?: Category;
  industry_category?: Category;
}

export interface WorkItemsPropsType {
  title: string;
  subheading: string;
  slug: string;
  teaserPhoto: string;
  category?: string;
}
export interface WorkContent {
  id: string;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  fields: WorkFields;
}

export interface WorkGridProps {
  projects: WorkContent[];
  shouldDisplayProject: (project: WorkContent) => boolean;
  getTeaserPhoto: (project: WorkContent) => string;
}

export interface FilterControlsProps {
  catType: string;
  expertise: string[];
  industry: string[];
  catExpertiseHolder: string;
  catIndustryHolder: string;
  handleFilterTypeChange: (type: string) => void;
  handleCategorySelect: (categoryName: string) => void;
}
