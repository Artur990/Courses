import { NextApiRequest, NextApiResponse } from "next";

import { courses } from "@/data/courses";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, sort, language, page } = req.query;

  const filteredItems = filterItems(category, sort, language);

  const productsPerPage = 3; // Ilość produktów na stronę
  const offset = (parseInt(page as any) - 1) * productsPerPage;
  const currentPageProducts = filteredItems.slice(
    offset,
    offset + productsPerPage
  );

  res.status(200).json({
    // asd: "sad", filteredItems, language, sort, category
    itemsToFilter: courses,
    items: currentPageProducts,
    pageCount: Math.ceil(filteredItems.length / productsPerPage),
  });
}

// Funkcja do filtrowania i sortowania produktów
const filterItems = (
  category: string | string[] | undefined,
  sort: string | string[] | undefined,
  language: string | string[] | undefined
) => {
  let filteredItems = [...courses];

  if (category) {
    filteredItems = filteredItems.filter((item) => item.category === category);
  }
  if (language) {
    filteredItems = filteredItems.filter((cat) => cat.title === language);
  }

  switch (sort) {
    case "popular":
      filteredItems.sort((a, b) => b.review - a.review);
      break;
    case "rated":
      filteredItems.sort((a, b) => b.stars - a.stars);
      break;
    case "newest":
      filteredItems.sort((a, b) => b.dataPremiery - a.dataPremiery);
      break;
    case "priceAsc":
      filteredItems.sort((a, b) => a.price - b.price);
      break;
    case "priceDesc":
      filteredItems.sort((a, b) => b.price - a.price);
      break;
    default:
      filteredItems;
  }

  return filteredItems;
};
