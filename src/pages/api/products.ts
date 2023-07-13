// // import { menuItems } from "../../data/courses";
import { NextApiRequest, NextApiResponse } from "next";
// // import { produkty } from "../../data/products"; // Załóżmy, że dane produktów znajdują się w osobnym pliku

import { menuItems } from "@/data/courses";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, sort, language } = req.query;

  const filteredItems = filterItems(category, sort, language);

  res.status(200).json({ aa: "sa" });
}

// Funkcja do filtrowania i sortowania produktów
const filterItems = (
  category: string | string[] | undefined,
  sort: string | string[] | undefined,
  language: string | string[] | undefined
) => {
  let filteredItems = [...menuItems];

  if (category) {
    filteredItems = filteredItems.filter((item) => item.category === category);
  }
  // if (language) {
  // filteredItems = filteredItems.filter((cat) => cat.title === language);
  // }
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
