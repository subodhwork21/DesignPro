export interface Asset {
  url: string;
}

export interface SubHeading {
  text: string;
}

export interface Image {
  assets: Asset[];
}

export interface Fields {
  sub_heading: SubHeading;
  image: Image;
}

export interface FSContent {
  id: string;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  fields: Fields;
}

export interface FutureSeriesProps {
  fsData?: FSContent[] | null;
}

export interface FutureSeriesItemProps {
  title: string;
  subheading: string;
  slug: string;
  teaserPhoto: string;
}

export interface FutureSeriesGridProps {
  projects: FSContent[];
  shouldDisplayProject: (project: FSContent) => boolean;
  getTeaserPhoto: (project: FSContent) => string;
}
