export interface NewsContent {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  teaser_text: string;
  fields: {
    title: {
      text: string;
    };
    image: {
      assets: {
        asset: {
          url: string;
        };
      }[];
    };
    news_category?: {
      content_links: {
        content_link: {
          name: string;
        };
      }[];
    };
  };
}

export interface LatestNewsProps {
  title: string;
  shortIntro: string;
  photo: string;
  date: string;
  slug: string;
}
export interface NewsCategory {
  id: string;
  name: string;
}

export interface propNewsClientTypes {
  dataProcessed: NewsContent[];
  category: string;
}
