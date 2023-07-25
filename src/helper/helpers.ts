import { TselectedOptions } from "@/types/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export const getUniqueCategories = (menuItems: any[]) => {
  const uniqueCategories = menuItems.reduce((categories, course) => {
    if (!categories.includes(course.category)) {
      categories.push(course.category);
    }
    return categories;
  }, []);
  return uniqueCategories;
};

export const getUniqueTitles = (menuItems: any[]) => {
  const uniqueTitles = menuItems.reduce((titles, course) => {
    if (!titles.includes(course.title)) {
      titles.push(course.title);
    }
    return titles;
  }, []);
  return uniqueTitles;
};

export const createAndPushUrl = (
  selectedOptions: TselectedOptions,
  router: AppRouterInstance
) => {
  const urlParams = new URLSearchParams();
  Object.entries(selectedOptions).forEach(([key, value]) => {
    if (value) {
      urlParams.set(key, value);
    }
  });
  const url = `?${urlParams.toString()}`;
  router.push(url);
};
export const fetchData = async (
  sort: string | undefined,
  language: string | undefined,
  category: string | undefined,
  page: string | undefined,
  setSortedItems: Function
) => {
  const queryParams = new URLSearchParams();
  if (sort) {
    queryParams.set("sort", sort);
  }
  if (language) {
    queryParams.set("language", language);
  }
  if (category) {
    queryParams.set("category", category);
  }
  if (page) {
    queryParams.set("page", page);
  }
  const queryString = queryParams.toString();
  const url = `http://localhost:3000/api/products${
    queryString ? `?${queryString}` : ""
  }`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(` HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    setSortedItems(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
export const calculateReadingTime = (text: any) => {
  const wordsPerMinute = 200;
  const readingTime = text / wordsPerMinute;
  return Math.ceil(readingTime);
};
