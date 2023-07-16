import { NextApiRequest, NextApiResponse } from "next";
import { courses } from "@/data/courses";

interface Query {
  category?: string;
  sort?: string;
  language?: string;
  page?: string;
}

const filterItems = (
  category: string | undefined,
  sort: string | undefined,
  language: string | undefined
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
      filteredItems.sort((a, b) =>
        b.dataPremiery.localeCompare(a.dataPremiery)
      );
      break;
    case "priceAsc":
      filteredItems.sort((a, b) => a.price - b.price);
      break;
    case "priceDesc":
      filteredItems.sort((a, b) => b.price - a.price);
      break;
    default:
      filteredItems.sort((a, b) => b.review - a.review);
  }
  return filteredItems;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, sort, language, page = "1" } = req.query as Query;

  // if (isNaN(Number(page)) || Number(page) < 1) {
  //   res.status(400).json({ error: "Invalid page number" });
  //   return;
  // }

  const filteredItems = filterItems(category, sort, language);

  const productsPerPage = 3; // Ilość produktów na stronę
  const offset = (parseInt(page as string) - 1) * productsPerPage;
  const currentPageProducts = filteredItems.slice(
    offset,
    offset + productsPerPage
  );

  // if (!currentPageProducts.length) {
  //   res.status(404).json({ error: "Page not found" });
  //   return;
  // }

  res.status(200).json({
    // itemsToFilter: courses,
    items: currentPageProducts,
    pageCount: Math.ceil(filteredItems.length / productsPerPage),
  });
}

// // // import { menuItems } from "../../data/courses";
// import { NextApiRequest, NextApiResponse } from "next";
// // // import { produkty } from "../../data/products"; // Załóżmy, że dane produktów znajdują się w osobnym pliku

// import { courses } from "@/data/courses";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { category, sort, language } = req.query;

//   const filteredItems = filterItems(category, sort, language);

//   res.status(200).json({ aa: "sa" });
// }

// // Funkcja do filtrowania i sortowania produktów
// const filterItems = (
//   category: string | string[] | undefined,
//   sort: string | string[] | undefined,
//   language: string | string[] | undefined
// ) => {
//   let filteredItems = [...courses];

//   if (category) {
//     filteredItems = filteredItems.filter((item) => item.category === category);
//   }
//   // if (language) {
//   // filteredItems = filteredItems.filter((cat) => cat.title === language);
//   // }
//   switch (sort) {
//     case "popular":
//       filteredItems.sort((a, b) => b.review - a.review);
//       break;
//     case "rated":
//       filteredItems.sort((a, b) => b.stars - a.stars);
//       break;
//     case "newest":
//       filteredItems.sort((a, b) => b.dataPremiery - a.dataPremiery);
//       break;
//     case "priceAsc":
//       filteredItems.sort((a, b) => a.price - b.price);
//       break;
//     case "priceDesc":
//       filteredItems.sort((a, b) => b.price - a.price);
//       break;
//     default:
//       filteredItems;
//   }

//   return filteredItems;
// };
