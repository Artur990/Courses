"use client";
import Paragraph from "@/components/ui/Paragraph";

import { useState } from "react";
import Image from "next/image";
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { tr } from "date-fns/locale";
export default function Home() {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  const toggleIsOpenMenu = () => setIsOpenMenu(!isOpenMenu);
  const toggleIsOpenLanguage = () => setIsOpenLanguage(!isOpenLanguage);
  const toggleIsOpenCategory = () => setIsOpenCategory(!isOpenCategory);
  const toggleIsOpenSort = () => setIsOpenSort(!isOpenSort);
  const courses = [
    {
      icon: (
        <AiFillGithub className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      ),
      title: "Courses GitHub",
      category: "Programming",
      price: "$35",
    },
    {
      icon: (
        <TbBrandJavascript className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      ),
      title: "Courses JavaScript",
      category: "Programming",
      price: "$35",
    },
    {
      icon: (
        <GrReactjs className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      ),
      title: "Courses React",
      category: "Programming",
      price: "$35",
    },
    {
      icon: (
        <GrReactjs className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      ),
      title: "Courses React",
      category: "Programming",
      price: "$35",
    },
    {
      icon: (
        <GrReactjs className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      ),
      title: "Courses React",
      category: "Programming",
      price: "$35",
    },
    {
      icon: (
        <GrReactjs className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      ),
      title: "Courses React",
      category: "Programming",
      price: "$35",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen mt-2 items-center justify-between p-2  ">
      {/* start  */}
      <div className="bg-white container">
        <div>
          {/* <!--
      Mobile filter dialog
      
      Off-canvas filters htmlFor mobile, show/hide based on off-canvas filters state.
    --> */}

          <div
            className="relative z-40 top-10  mt-1 right-3   lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
            {/* <div className="fixed inset-0 bg-black bg-opacity-25"></div>s */}

            <div className="relative inset-0 z-40 flex">
              {/* <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transhtmlForm"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transhtmlForm"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}
              {isOpenMenu && (
                <div className="mt-10  fixed z-50 top-20 right-0 ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-gray-200 py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Flitruj
                    </h2>
                    <button
                      type="button"
                      onClick={toggleIsOpenMenu}
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    >
                      <span className="sr-only">Close menu</span>
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

                  {/* <!-- Filters --> */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">kategorie</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      <li>
                        <a href="#" className="block px-2 py-3">
                          Programowanie
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-2 py-3">
                          Inne
                        </a>
                      </li>
                      {/* <li></li> */}
                    </ul>

                    <div className="border-t border-gray-200 px-4 py-6">
                      <h3 className="-mx-2 -my-3 flow-root">
                        {/* <!-- Expand/collapse section button --> */}
                        <button
                          type="button"
                          onClick={toggleIsOpenLanguage}
                          className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                          aria-controls="filter-section-mobile-0"
                          aria-expanded="false"
                        >
                          <span className="font-medium text-gray-900">
                            Język
                          </span>
                          <span className="ml-6 flex items-center">
                            {/* <!-- Expand icon, show/hide based on section open state. --> */}
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                            {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      {/* <!-- Filter section, show/hide based on section state. -->  */}
                      {isOpenLanguage && (
                        <div className="pt-6" id="filter-section-mobile-0">
                          <div className="space-y-6">
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-color-0"
                                name="color[]"
                                value="white"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-color-0"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Java Script
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-color-1"
                                name="color[]"
                                value="beige"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-color-1"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Java
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-color-2"
                                name="color[]"
                                value="blue"
                                type="checkbox"
                                checked
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-color-2"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Puthon
                              </label>
                            </div>
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
            {/* panel start  */}
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
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {isOpenSort && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        {/* <!--
                  Active: "bg-gray-100", Not Active: ""

                  Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                --> */}
                        <a
                          href="#"
                          className="font-medium text-gray-900 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-0"
                        >
                          Njabradziej Popularne
                        </a>
                        <a
                          href="#"
                          className="text-gray-500 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-1"
                        >
                          Najwyżej Oceniane
                        </a>
                        <a
                          href="#"
                          className="text-gray-500 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-2"
                        >
                          Najnowsze
                        </a>
                        <a
                          href="#"
                          className="text-gray-500 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-3"
                        >
                          Cena: rosnąca
                        </a>
                        <a
                          href="#"
                          className="text-gray-500 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-4"
                        >
                          Cena: malejąca
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="button"
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
                      fill-rule="evenodd"
                      d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                      clip-rule="evenodd"
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
                      fill-rule="evenodd"
                      d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* paneel */}
            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* <!-- Filters --> */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    <li>
                      <a href="#">Prgramowanie</a>
                    </li>
                    <li>
                      <a href="#">inne</a>
                    </li>
                  </ul>
                  {/* Start Opinions */}
                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      {/* <!-- Expand/collapse section button --> */}
                      <button
                        onClick={toggleIsOpenLanguage}
                        type="button"
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-0"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Języki Programowania
                        </span>
                        <span className="ml-6 flex items-center">
                          {/* <!-- Expand icon, show/hide based on section open state. --> */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* <!-- Filter section, show/hide based on section state. --> */}
                    {isOpenLanguage && (
                      <div className="pt-6" id="filter-section-0">
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <input
                              id="filter-color-0"
                              name="color[]"
                              value="white"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-color-0"
                              className="ml-3 text-sm text-gray-600"
                            >
                              JavaScript
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-color-1"
                              name="color[]"
                              value="beige"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-color-1"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Java
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-color-1"
                              name="color[]"
                              value="beige"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-color-1"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Python
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-color-1"
                              name="color[]"
                              value="beige"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-color-1"
                              className="ml-3 text-sm text-gray-600"
                            >
                              C++
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Start Category  */}
                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      {/* <!-- Expand/collapse section button --> */}
                      <button
                        type="button"
                        onClick={toggleIsOpenCategory}
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-1"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Category
                        </span>
                        <span className="ml-6 flex items-center">
                          {/* <!-- Expand icon, show/hide based on section open state. --> */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {isOpenCategory && (
                      <div className="pt-6" id="filter-section-1">
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <input
                              id="filter-category-0"
                              name="category[]"
                              value="new-arrivals"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-0"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Forntend
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-category-1"
                              name="category[]"
                              value="sale"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-1"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Backend
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-category-2"
                              name="category[]"
                              value="travel"
                              type="checkbox"
                              checked
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-2"
                              className="ml-3 text-sm text-gray-600"
                            >
                              System kontroli wersji
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-category-3"
                              name="category[]"
                              value="organization"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-3"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Bazy danych
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </form>

                {/* <!-- Product grid --> */}
                <div className="lg:col-span-3">
                  <div className="container ">
                    <div className="mx-auto  px-4 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Dostępne kursy:
                      </h2>
                      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {courses.map((course, index) => (
                          <div key={index} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                              {course.icon}
                            </div>
                            <div className="mt-4 flex justify-between">
                              <div>
                                <h3 className="text-sm text-gray-700">
                                  <a href="#">
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0"
                                    ></span>
                                    {course.title}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                  {course.category}
                                </p>
                              </div>
                              <p className="text-sm font-medium text-gray-900">
                                {course.price}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* products */}
              </div>
            </section>
          </main>
        </div>
      </div>
    </main>
  );
}
