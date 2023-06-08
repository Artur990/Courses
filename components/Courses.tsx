import { MenuItem, menuItems } from "@/data/courses";
import { tr } from "date-fns/locale";
import Link from "next/link";
import { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
interface CoursesProps {
  category: string[];
}

const Courses: FC<MenuItem> = ({
  icon,
  title,
  name,
  future,
  link,
  description,
  descriptionCourses,
  details,
  price,
  review,
  stars,
  category,
}) => {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {category.map((item) => {
              return (
                <li key={item}>
                  <div className="flex items-center">
                    <Link
                      href="#"
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {item}
                    </Link>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              );
            })}
            <li>
              <div className="flex items-center">
                <Link
                  href="JavaScript"
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {title}
                </Link>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          </ol>
        </nav>

        {/*  Courses info  */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {name}
            </h1>
          </div>

          {/*  Options  */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <TbBrandJavascript className="h-full w-full object-cover object-center lg:h-1/2 lg:w-full" />
            <p className="text-3xl tracking-tight text-gray-900">{price}</p>
            {/*  Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => {
                    const starColor =
                      index < stars ? "text-gray-900" : "text-gray-200";
                    return (
                      <svg
                        key={index}
                        className={`h-5 w-5 flex-shrink-0 ${starColor}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    );
                  })}
                </div>
                <p className="sr-only">{stars} gwiazdek </p>
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {review} recenzji
                </a>
              </div>
            </div>

            <form className="mt-10">
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Dodaj do koszyka
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Opis</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{descriptionCourses}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">cechy</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {future?.map((item) => {
                    return (
                      <li key={item} className="text-gray-400">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">
                co jeszcze ?
              </h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
