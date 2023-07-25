export type Tparams = {
  params: {
    page?: any;
  };
  searchParams: {
    category?: string;
    sort?: string;
    language?: string;
    page?: string;
  };
};

export type TselectedOptions = {
  category?: string;
  sort?: string;
  language?: string;
  page?: string;
  view?: string;
};

export type Titems = {
  items?: {
    category: string;
    dataPremiery: string;
    description: string;
    descriptionCourses: string;
    details: string;
    feature: string[];
    icon: string;
    link: string;
    name: string;
    price: number;
    review: number;
    stars: number;
    title: string;
  }[];
  itemsToFilter: {
    category: string;
    dataPremiery: string;
    description: string;
    descriptionCourses: string;
    details: string;
    feature: string[];
    icon: string;
    link: string;
    name: string;
    price: number;
    review: number;
    stars: number;
    title: string;
  }[];
  pageCount?: number;
};
export type TCourses = {
  icon: string;
  title: string;
  name: string;
  feature: string[];
  link: string;
  description: string;
  descriptionCourses?: string;
  details: string;
  price: number;
  review: number;
  stars: number;
  category: string;
  dataPremiery: any;
};
export type Content = {
  topis: string; // zmienione z 'topic' na 'topis'
  nr: number;
  index: number;
  content: string;
};

export type Topic = {
  nr: number;
  index: number;
  topic: string;
  content: Content[];
};

export type Question = {
  title: string;
  index: number;
  content: Topic[];
};
