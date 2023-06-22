"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { ro } from "date-fns/locale";

interface pagesProps {}

interface SearchParams {
  category?: string;
  sort?: string;
  language?: string;
}

const Pages = (params: { searchParams: SearchParams }) => {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<SearchParams>({});

  const handleOptionClick = (optionName: string, optionValue: string) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: optionValue,
    }));
    updateUrl();
  };

  const updateUrl = () => {
    const urlParams = new URLSearchParams();

    if (selectedOptions.category) {
      urlParams.set("category", selectedOptions.category);
    }

    if (selectedOptions.sort) {
      urlParams.set("sort", selectedOptions.sort);
    }

    if (selectedOptions.language) {
      urlParams.set("language", selectedOptions.language);
    }

    const url = `/blog?${urlParams.toString()}`;
    router.push(url);
  };

  return (
    <div className="mt-28">
      <p>Wybierz kategorię:</p>
      <h1>{params.searchParams.category}</h1>
      <h1>{params.searchParams.sort}</h1>
      <h1>{params.searchParams.language}</h1>
      <div className="flex flex-col">
        <button
          onClick={() => handleOptionClick("category", "rowery")}
          className={selectedOptions.category === "rowery" ? "active" : ""}
        >
          Rowery
        </button>
        <button
          onClick={() => handleOptionClick("category", "wrotki")}
          className={selectedOptions.category === "wrotki" ? "active" : ""}
        >
          Wrotki
        </button>

        <button
          onClick={() => handleOptionClick("sort", "popularne")}
          className={selectedOptions.sort === "popularne" ? "active" : ""}
        >
          Najbardziej Popularne
        </button>
        <button
          onClick={() => handleOptionClick("sort", "oceniane")}
          className={selectedOptions.sort === "oceniane" ? "active" : ""}
        >
          Najwyżej Oceniane
        </button>
        <button
          onClick={() => handleOptionClick("sort", "najnowsze")}
          className={selectedOptions.sort === "najnowsze" ? "active" : ""}
        >
          Najnowsze
        </button>
        <button
          onClick={() => handleOptionClick("sort", "cena-rosnaca")}
          className={selectedOptions.sort === "cena-rosnaca" ? "active" : ""}
        >
          Cena: rosnąca
        </button>
        <button
          onClick={() => handleOptionClick("sort", "cena-malejaca")}
          className={selectedOptions.sort === "cena-malejaca" ? "active" : ""}
        >
          Cena: malejąca
        </button>
        {/* //  */}
        <button
          onClick={() => handleOptionClick("language", "JavaScript")}
          className={selectedOptions.language === "JavaScript" ? "active" : ""}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleOptionClick("language", "React")}
          className={selectedOptions.language === "React" ? "active" : ""}
        >
          React
        </button>
        <button
          onClick={() => handleOptionClick("language", "Git")}
          className={selectedOptions.language === "Git" ? "active" : ""}
        >
          Git
        </button>
      </div>
    </div>
  );
};

export default Pages;
