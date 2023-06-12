import { useState, useEffect } from "react";

export const useFilterOptions = () => {
  const [filterOptions, setFilterOptions] = useState({
    sortType: "",
    titleFilter: "",
    categoryFilter: "",
  });

  const setSortType = (sortType: string) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      sortType: sortType,
    }));
  };

  const setTitleFilter = (titleFilter: string) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      titleFilter: titleFilter,
    }));
  };

  const setCategoryFilter = (categoryFilter: string) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      categoryFilter: categoryFilter,
    }));
  };

  return {
    setFilterOptions,
    filterOptions,
    setSortType,
    setTitleFilter,
    setCategoryFilter,
  };
};

export const useSortedItems = (menuItems: any[], filterOptions: any) => {
  const [sortedItems, setSortedItems] = useState(menuItems);

  useEffect(() => {
    const { sortType, titleFilter, categoryFilter } = filterOptions;

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

    setSortedItems(filteredItems);
  }, [filterOptions, menuItems]);

  return sortedItems;
};
