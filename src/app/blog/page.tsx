"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { ro } from "date-fns/locale";
interface pagesProps {}

const Pages = (params: any) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("");
  console.log(params.searchParams.category);
  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
    updateUrl();
  };

  const handleSortClick = (sortOption: any) => {
    setSelectedSortOption(sortOption);
    updateUrl();
  };

  const updateUrl = () => {
    let url = "/blog";

    if (selectedCategory) {
      url += `?category=${selectedCategory}`;
    }

    if (selectedSortOption) {
      url += `&sort=${selectedSortOption}`;
    }

    router.push(url);
  };

  return (
    <div className="mt-28">
      <p>Wybierz kategorię:</p>
      <h1>{params.searchParams.category}</h1>
      <h1>{params.searchParams.sort}</h1>
      <div className="flex flex-col">
        <button
          onClick={() => handleCategoryClick("rowery")}
          className={selectedCategory === "rowery" ? "active" : ""}
        >
          Rowery
        </button>
        <button
          onClick={() => handleCategoryClick("wrotki")}
          className={selectedCategory === "wrotki" ? "active" : ""}
        >
          Wrotki
        </button>

        <button
          onClick={() => handleSortClick("popularne")}
          className={selectedSortOption === "popularne" ? "active" : ""}
        >
          Najbardziej Popularne
        </button>
        <button
          onClick={() => handleSortClick("oceniane")}
          className={selectedSortOption === "oceniane" ? "active" : ""}
        >
          Najwyżej Oceniane
        </button>
        <button
          onClick={() => handleSortClick("najnowsze")}
          className={selectedSortOption === "najnowsze" ? "active" : ""}
        >
          Najnowsze
        </button>
        <button
          onClick={() => handleSortClick("cena-rosnaca")}
          className={selectedSortOption === "cena-rosnaca" ? "active" : ""}
        >
          Cena: rosnąca
        </button>
        <button
          onClick={() => handleSortClick("cena-malejaca")}
          className={selectedSortOption === "cena-malejaca" ? "active" : ""}
        >
          Cena: malejąca
        </button>
      </div>
    </div>
  );
};

export default Pages;
