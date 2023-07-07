// import { menuItems } from "../../data/courses";
import { NextApiRequest, NextApiResponse } from "next";
// import { produkty } from "../../data/products"; // Załóżmy, że dane produktów znajdują się w osobnym pliku

import { menuItems } from "@/data/courses";
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { category, sort } = req.query;

//   // Wywołaj funkcję do filtrowania i sortowania produktów
//   const filteredProducts = filterAndSortProducts(category, sort);

//   // Zwróć wynik jako odpowiedź na zapytanie
//   res.status(200).json(filteredProducts);
// }

// // Funkcja do filtrowania i sortowania produktów
// const filterAndSortProducts = (category: any, sort: any) => {
//   const filtered = produkty.filter(
//     (produkt: any) => produkt.kategoria === category
//   );

//   // Sortowanie po cenie - rosnąco lub malejąco
//   const sorted = filtered.sort((a: any, b: any) => a.cena - b.cena); // Domyślnie rosnąco

//   if (sort === "price-desc") {
//     sorted.reverse(); // Sortowanie malejąco
//   }

//   return sorted;
// };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, sort, page } = req.query;

  const filteredItems = filterItems(category, sort);

  res.status(200).json({ filteredItems, page });
}

// Funkcja do filtrowania i sortowania produktów
const filterItems = (
  category: string | string[] | undefined,
  sort: string | string[] | undefined
) => {
  let filteredItems = [...menuItems];

  if (category) {
    filteredItems = filteredItems.filter((item) => item.category === category);
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
