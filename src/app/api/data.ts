import { menuItems } from "../../../data/courses"; // Zaimportuj dane menuItems

export default function handler(req: any, res: any) {
  const { sortType, titleFilter, categoryFilter } = req.query;

  let filteredItems = [...menuItems];

  if (categoryFilter) {
    filteredItems = filteredItems.filter(
      (cat) => cat.category === categoryFilter
    );
  }

  if (titleFilter) {
    filteredItems = filteredItems.filter((cat) => cat.title === titleFilter);
  }

  switch (sortType) {
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
    // No sorting
  }

  res.status(200).json(filteredItems);
}
