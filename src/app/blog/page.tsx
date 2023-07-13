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
  const Fun = async () => {
    const res = await fetch(
      "http://localhost:3000/api/products/1?category=Bazydanych&sort=priceDesc&language=SQL"
      // "http://localhost:3000/api/products/1"
    );
    const data = await res.json();
    console.log(data);
  };
  Fun();
  return (
    <div className="mt-0 bg-[#0e141b]">
      <div className="bg-[#0e141b] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap">
            <div className="w-auto h-auto">
              <a
                className="categoryCard_category__F66vD text-2xl bg-[#182431] rounded-lg text-[#7f90a4] no-underline py-5 px-6 inline-block mr-8 mb-6 w-auto"
                href="/kategorie/javascript"
              >
                JavaScript
              </a>
            </div>
            <div className="w-auto h-auto">
              <a
                className="categoryCard_category__F66vD text-2xl bg-[#182431] rounded-lg text-[#7f90a4] no-underline py-5 px-6 inline-block mr-8 mb-6 w-auto"
                href="/kategorie/javascript"
              >
                Git
              </a>
            </div>
            <div className="w-auto h-auto">
              <a
                className="categoryCard_category__F66vD text-2xl bg-[#182431] rounded-lg text-[#7f90a4] no-underline py-5 px-6 inline-block mr-8 mb-6 w-auto"
                href="/kategorie/javascript"
              >
                React
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn new language with our blog.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between bg-white p-6 rounded-md hover:opacity-90">
              <div className="flex items-center gap-x-4 text-xs">
                <time
                  // datetime="2020-03-16"
                  className="text-gray-500"
                >
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  JavaScript
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Promise{"'"}y można łączyć
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Składnia jest łatwa i przyjemna, więc teraz wyobraźmy sobie,
                  że chcemy wykonać kilka zadań asynchronicznych jedno po
                  drugim. Moglibyśmy się pokusić o napisanie takiego kodu:
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 bg">
                A
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900 ">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Artur
                    </a>
                  </p>
                  <p className="text-gray-600">Frontend</p>
                </div>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between  bg-white p-6 rounded-md hover:opacity-90">
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">Mar 16, 2020</time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  React
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Elastyczność komponentów w React - kompozycja vs
                    konfiguracja
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Podczas nauki React skupiamy się przede wszystkim na
                  szczegółach technicznych, nic w tym złego. Poznajemy
                  założenia, API biblioteki i cały ekosystem. W tym wszystkim
                  często zapominamy o jednej, bardzo ważnej rzeczy - odpowiednim
                  projektowaniu komponentów.
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                A
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Artur
                    </a>
                  </p>
                  <p className="text-gray-600">Frontend</p>
                </div>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between  bg-white p-6 rounded-md hover:opacity-90  ">
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">Mar 16, 2020</time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Css
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Flexbox CSS - wizualny poradnik dla początkujących
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Flexbox to narzędzie, które każdy Frontend Developer powinien
                  znać. Dzięki niemu możemy tworzyć nowoczesne layouty bez
                  wspomagania się przestarzałymi sztuczkami w stylu float: left.
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                A
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Artr
                    </a>
                  </p>
                  <p className="text-gray-600">Frontend</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;

// export async function getServerSideProps(context: any) {
//   const { categorySlug } = context.params;

//   // Wywołaj endpoint API, przekazując parametry filtrowania i sortowania
//   const res = await fetch(
//     // `/api/products?category=${category}&sort=${sort}&page=${page}`
//     http://localhost:3000/api/products?category=${buty}&sort=${sort}&page=${page}`
//   );
//   const data = await res.json();

//   // Zwróć dane produktów jako props
//   return {
//     props: {
//       products: data,
//     },
//   };
// }
