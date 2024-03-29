"use client";

import React, { useEffect } from "react";
import Paragraph from "@/components/ui/Paragraph";
import { useState } from "react";
import { courses } from "../../data/courses";
import CoursesPage from "@/components/CoursesPage";
import { buttonVariants } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { AiOutlineCheck } from "react-icons/ai";
import {
  createAndPushUrl,
  getUniqueCategories,
  getUniqueTitles,
} from "@/helper/helpers";
import { Titems, Tparams, TselectedOptions } from "@/types/types";
import { Checkbox } from "@/components/ui/Checkbox";
import { useCourses } from "@/hooks/hooks";
import { CheckedState } from "@radix-ui/react-checkbox";

export default function Home(params: Tparams) {
  const router = useRouter();

  const [selectedOptions, setSelectedOptions] = useState<TselectedOptions>({});
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [sortType, setSortType] = useState("forYou");
  const [checkedTitle, setCheckedTitle] = useState("");
  const [checkedCategory, setCheckedCategory] = useState("");
  const [vieww, setView] = useState("");

  const toggleIsOpenMenu = () => setIsOpenMenu(!isOpenMenu);
  const toggleIsOpenLanguage = () => setIsOpenLanguage(!isOpenLanguage);
  const toggleIsOpenCategory = () => setIsOpenCategory(!isOpenCategory);
  const toggleIsOpenSort = () => setIsOpenSort(!isOpenSort);
  const toggleGrid = () => {
    setView(vieww === "grid" ? "list" : "grid");
    handleOptionClick("view", vieww);
  };
  // parameters from the url will be updated to the state
  const { sort, language, category, page, view } =
    params.searchParams as TselectedOptions;
  useEffect(() => {
    setSelectedOptions({
      category: category || undefined,
      sort: sort || undefined,
      language: language || undefined,
      page: page || undefined,
      view: view || undefined,
    });
    setSortType(sort || "forYou");

    // add  checkboxa from URL
    if (language) {
      setCheckedTitle(language);
      toggleIsOpenLanguage();
    } else {
      setCheckedTitle("");
    }
    if (category) {
      setCheckedCategory(category);
      toggleIsOpenCategory();
    } else {
      setCheckedCategory("");
    }

    if (sort) {
      setSortType(sort);
    } else {
      setSortType("forYou");
    }
    if (view) {
      toggleGrid();
    }
  }, []);

  //  if in selectOption it changes value then url with this parameter is set
  useEffect(() => {
    const urlParams = new URLSearchParams();
    Object.entries(selectedOptions).forEach(([key, value]) => {
      if (value) {
        urlParams.set(key, value);
      }
    });
    const url = `?${urlParams.toString()}`;
    router.replace(url);
  }, [selectedOptions]);

  const { data, isLoading, isError } = useCourses(
    sort,
    language,
    category,
    page
  );

  const handleSort: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const sortType = event.currentTarget.name;
    setSortType(sortType);
    handleOptionClick("sort", sortType);
  };
  const handleFilter = (
    event: React.ChangeEvent<HTMLInputElement>,
    checkedValue: string,
    setChecked: Function,
    handleOptionClick: Function,
    optionName: string
  ) => {
    const isChecked = event.target.checked;
    const selectedValue = event.target.value;

    if (isChecked) {
      setChecked(selectedValue);
      handleOptionClick(optionName, selectedValue);
    } else {
      setChecked("");
      handleOptionClick(optionName, "");
    }
  };
  const handleTitleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const selectedTitle = event.target.value;

    if (isChecked) {
      setCheckedTitle(selectedTitle);
      handleOptionClick("language", selectedTitle);
    } else {
      setCheckedTitle("");
      handleOptionClick("language", "");
    }
  };

  const handleTitleCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const selectedCategory = event.target.value;

    if (isChecked) {
      setCheckedCategory(selectedCategory);
      handleOptionClick("category", selectedCategory);
    } else {
      setCheckedCategory("");
      handleOptionClick("category", "");
    }
  };
  // end  input  function

  // funkacja która ustawai stan selectOpction
  const handleOptionClick = (
    optionName: string,
    optionValue: string | number
  ) => {
    setSelectedOptions((prevOptions) => {
      const newOptions = { ...prevOptions, [optionName]: optionValue };

      return newOptions;
    });
  };

  const clearFunction = () => {
    setCheckedCategory("");
    setCheckedTitle("");
    router.push("/");
  };

  // start  nev page
  const handlePageClickNext = () => {
    if (selectedOptions.page === undefined || selectedOptions.page === "0") {
      handleOptionClick("page", "2");
    }

    if (selectedOptions.page) {
      handleOptionClick("page", (Number(selectedOptions.page) + 1).toString());
    }
    if (selectedOptions.page === data?.pageCount) {
      if (selectedOptions.page) handleOptionClick("page", selectedOptions.page);
    }
    createAndPushUrl(selectedOptions, router);
  };

  const handlePageClickPrevious = () => {
    if (selectedOptions.page === "1") {
      handleOptionClick("page", 1);
    }
    if (selectedOptions.page) {
      if (typeof selectedOptions.page === "number") {
        handleOptionClick("page", selectedOptions.page - 1);
      }
    }
    createAndPushUrl(selectedOptions, router);
  };

  const generatePageLinks = (pageCount: number) => {
    const urlParams = new URLSearchParams();
    Object.entries(selectedOptions).forEach(([key, value]) => {
      if (value) {
        urlParams.set(key, value);
      }
    });
    const links = [];
    for (let i = 0; i < pageCount; i++) {
      links.push(
        <button
          key={i}
          onClick={() => {
            handleOptionClick("page", (i + 1).toString());
            router.push(`/?${urlParams.toString()}`);
          }}
          className={`relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-300
       hover:bg-gray-50 focus:z-20 focus:outline-offset-0  ${
         Number(selectedOptions.page) === i + 1 ||
         (i === 0 && !selectedOptions.page)
           ? " text-gray-900 font-extrabold bg-gray-200 "
           : ""
       }`}
        >
          {i + 1}
        </button>
      );
    }

    return links;
  };

  // end nav page

  const uniqueCategories = getUniqueCategories(courses);
  const uniqueTitles = getUniqueTitles(courses);

  const [checkboxState, setCheckboxState] = React.useState<any>("unchecked");
  console.log(checkboxState);
  const handleChange = (event: any) => {
    console.log(event.target.checked);
  };
  return (
    <main className="flex flex-col min-h-screen mt-2 items-center justify-between p-2  ">
      <div className="bg-white container">
        {/* Mobile filter dialog */}
        <div
          className="relative z-40 top-10  mt-1 right-3   lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative inset-0 z-40 flex">
            {isOpenMenu && (
              <div className="mt-10  fixed z-50 top-20 right-0 ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-gray-200 py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Flitruj</h2>
                  <button
                    type="button"
                    onClick={toggleIsOpenMenu}
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Zamknij menu </span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* <!-- Filters  mobile--> */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">kategorie</h3>
                  <ul
                    role="list"
                    className="px-2 py-3 font-medium text-gray-900"
                  >
                    <li>
                      <button
                        className={buttonVariants({
                          size: "sm",
                          variant: "outline",
                        })}
                        onClick={clearFunction}
                      >
                        Wyczyść
                      </button>
                    </li>
                  </ul>

                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <button
                        type="button"
                        onClick={toggleIsOpenLanguage}
                        className="flex w-full itereplacenoems-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-0"
                        aria-expanded="false"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 text-start">
                            Języki Programowania
                          </span>
                        </div>
                        <span className="ml-6 flex items-center">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* Filter section, show/hide based on section language   */}
                    {isOpenLanguage && (
                      <div className="pt-6" id="filter-section-mobile-0">
                        <div className="space-y-6">
                          {uniqueTitles.map((title: any, index: any) => {
                            return (
                              <div key={index} className="flex items-center">
                                <input
                                  id={`filter-mobile-color-${index}`}
                                  name="title[]"
                                  value={title}
                                  type="checkbox"
                                  checked={title === checkedTitle}
                                  onChange={handleTitleFilter}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-color-${index}`}
                                  className="ml-3 min-w-0 flex-1 text-gray-500"
                                >
                                  {title}
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    <Checkbox
                      checked={checkboxState}
                      onCheckedChange={setCheckboxState}
                    />
                  </div>
                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <button
                        type="button"
                        onClick={toggleIsOpenCategory}
                        className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-0"
                        aria-expanded="false"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 text-start">
                            Kategorie
                          </span>
                        </div>
                        <span className="ml-6 flex items-center">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/*  Filter section, show/hide based on section category */}
                    {isOpenCategory && (
                      <div className="pt-6" id="filter-section-mobile-0">
                        <div className="space-y-6">
                          {uniqueCategories.map((category: any, index: any) => (
                            <div key={index} className="flex items-center">
                              <input
                                id={`filter-category-${index}`}
                                name="category[]"
                                value={category}
                                type="checkbox"
                                checked={category === checkedCategory}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                onChange={handleTitleCategory}
                              />
                              <label
                                htmlFor={`filter-category-${index}`}
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {category}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* sorting panel */}
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 mt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Nowe kursy
            </h1>

            <div className="flex items-center">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    onClick={toggleIsOpenSort}
                    type="button"
                    className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                    id="menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    Sort
                    <svg
                      className="h-5 w-5 flex-none text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      style={{
                        transform: isOpenSort ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {isOpenSort && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div
                      onClick={toggleIsOpenSort}
                      className="py-1 bg-gray-200"
                      role="none"
                    >
                      <button
                        name="popular"
                        className="text-gray-500 flex justify-between px-4 py-2 w-full text-start text-sm hover:bg-slate-300 hover:text-gray-900"
                        role="menuitem"
                        onClick={handleSort}
                      >
                        <span>Njabradziej Popularne</span>
                        {sortType === "popular" && (
                          <AiOutlineCheck className="text-gray-700 w-6 h-6" />
                        )}
                      </button>
                      <button
                        name="rated"
                        className=" text-gray-500 flex justify-between px-4 w-full text-start py-2 text-sm hover:bg-slate-300 hover:text-gray-900"
                        role="menuitem"
                        onClick={handleSort}
                      >
                        <span>Najwyżej Oceniane</span>
                        {sortType === "rated" && (
                          <AiOutlineCheck className="text-gray-700 w-6 h-6" />
                        )}
                      </button>
                      <button
                        name="newest"
                        className="text-gray-500 flex justify-between px-4 w-full text-start py-2 text-sm hover:bg-slate-300 hover:text-gray-900"
                        role="menuitem"
                        onClick={handleSort}
                      >
                        <span>Najnowższe</span>
                        {sortType === "newest" && (
                          <AiOutlineCheck className="text-gray-700 w-6 h-6" />
                        )}
                      </button>
                      <button
                        name="priceAsc"
                        className="text-gray-500 flex justify-between px-4 w-full text-start py-2 text-sm hover:bg-slate-300 hover:text-gray-900"
                        role="menuitem"
                        onClick={handleSort}
                      >
                        <span>Cena: rosnąca</span>
                        {sortType === "priceAsc" && (
                          <AiOutlineCheck className="text-gray-700 w-6 h-6" />
                        )}
                      </button>
                      <button
                        name="priceDesc"
                        className="text-gray-500 w-full text-start  flex justify-between px-4 py-2 text-sm hover:bg-slate-300 hover:text-gray-900"
                        role="menuitem"
                        onClick={handleSort}
                      >
                        <span>Cena: malejąca</span>
                        {sortType === "priceDesc" && (
                          <AiOutlineCheck className="text-gray-700 w-6 h-6" />
                        )}
                      </button>
                      <button
                        name="forYou"
                        className="text-gray-500 w-full text-start  flex justify-between px-4 py-2 text-sm hover:bg-slate-300 hover:text-gray-900"
                        role="menuitem"
                        onClick={handleSort}
                      >
                        <span>Wybrane dla Ciebie</span>
                        {sortType === "forYou" && (
                          <AiOutlineCheck className="text-gray-700 w-6 h-6" />
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={toggleGrid}
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={toggleIsOpenMenu}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* end sorting panel*/}

          {/* paneel */}
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <aside className="hidden lg:block">
                <h3 className="sr-only">kategorie</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  <li>
                    <button
                      className={buttonVariants({
                        size: "sm",
                        variant: "outline",
                      })}
                      onClick={clearFunction}
                    >
                      Wyczyść
                    </button>
                  </li>
                </ul>
                {/* Start languages */}
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <button
                      onClick={toggleIsOpenLanguage}
                      type="button"
                      className="flex w-full items-center  justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-0"
                      aria-expanded="false"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900 text-start">
                          Języki Programowania
                        </span>
                      </div>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* Filter section, show/hide based on section language   */}
                  {isOpenLanguage && (
                    <div className="pt-6" id="filter-section-mobile-0">
                      <div className="space-y-6">
                        {uniqueTitles.map((title: any, index: any) => {
                          return (
                            <div key={index} className="flex items-center">
                              <input
                                id={`filter-mobile-color-${index}`}
                                name="title[]"
                                value={title}
                                type="checkbox"
                                checked={title === checkedTitle}
                                onChange={(event) =>
                                  handleFilter(
                                    event,
                                    checkedTitle,
                                    setCheckedTitle,
                                    handleOptionClick,
                                    "language"
                                  )
                                }
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-mobile-color-${index}`}
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {title}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Start Category  */}
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <button
                      type="button"
                      onClick={toggleIsOpenCategory}
                      className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-1"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-gray-900">
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 text-start">
                            Kategorie
                          </span>
                        </div>
                      </span>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/*  Filter section, show/hide based on section category */}
                  {isOpenCategory && (
                    <div className="pt-6" id="filter-section-1">
                      <div className="space-y-4">
                        {uniqueCategories.map((category: any, index: any) => (
                          <div key={index} className="flex items-center">
                            <input
                              id={`filter-category-${index}`}
                              name="category[]"
                              value={category}
                              type="checkbox"
                              checked={category === checkedCategory}
                              onChange={(event) =>
                                handleFilter(
                                  event,
                                  checkedCategory,
                                  setCheckedCategory,
                                  handleOptionClick,
                                  "category"
                                )
                              }
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-category-${index}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </aside>
              {/* display products  */}
              <CoursesPage menuItems={data?.items} view={view} />
              {isLoading && <p>Ładowanie...</p>}
              {isError && <p>Nie znaleziono to czego szukasz.. :(</p>}
            </div>
          </section>
        </main>
        <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          {/* nav page */}
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm text-black border-black"
              aria-label="Pagination"
            >
              {/* Previous page */}
              <button
                onClick={handlePageClickPrevious}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
              >
                <span className="sr-only">poprzednia</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* page number button */}
              {generatePageLinks(data?.pageCount ? data.pageCount : 1)}

              {/* next page */}
              <button
                onClick={handlePageClickNext}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
