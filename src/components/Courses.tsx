"use client";
import { MenuItem, menuItems } from "../../data/courses";
import { tr } from "date-fns/locale";
import Link from "next/link";
import { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import { buttonVariants } from "./ui/Button";
import { useRouter } from "next/navigation";

const Courses: FC<any> = ({
  icon,
  title,
  name,
  feature,
  link,
  description,
  descriptionCourses,
  details,
  price,
  review,
  stars,
  category,
}) => {
  const route = useRouter();
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-0 px-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {/* {category.map((item) => {
              return ( */}
            <li>
              <div className="flex items-center">
                <Link href="#" className={buttonVariants({ variant: "link" })}>
                  {category}
                </Link>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-600"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            {/* ); */}
            {/* })} */}
            <li>
              <div className="flex items-center">
                <Link
                  href="JavaScript"
                  className={buttonVariants({ variant: "link" })}
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
            <LargeHeading size="lg" className="tracking-tight text-gray-900">
              {name}
            </LargeHeading>
          </div>

          {/*  Options  */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <LargeHeading className="sr-only">Product information</LargeHeading>
            <div className="flex h-full w-full justify-center items-center lg:h-1/2 lg:w-full">
              <h1 className="h-full text-center w-full object-cover object-center text-7xl lg:h-1/2 lg:w-full">
                {icon}
              </h1>
            </div>
            {/* // ???? */}
            <Paragraph size="xl" className="text-start tracking-tight ">
              {price} zł
            </Paragraph>
            {/*  Reviews */}
            <div className="mt-6">
              <LargeHeading className="sr-only">Reviews</LargeHeading>
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
                <Paragraph className="sr-only">{stars} gwiazdek </Paragraph>
                <Link
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {review} recenzji
                </Link>
              </div>
            </div>

            <form className="mt-10">
              <Link
                href={`/course/${title}`}
                type="submit"
                className={buttonVariants({
                  variant: "outline",
                  size: "full",
                })}
                // onClick={() => route.push(`/course/${title}`)}
              >
                Przejdz do kursu
              </Link>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <LargeHeading className="sr-only">Opis</LargeHeading>

              <div className="space-y-6">
                <Paragraph className="text-start">
                  {descriptionCourses}
                </Paragraph>
              </div>
            </div>

            <div className="mt-10">
              <LargeHeading size="sm" className=" text-gray-900">
                cechy
              </LargeHeading>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {/* {feature.map((item: any) => { */}
                  {/* return ( */}
                  <li className="text-gray-400">
                    <Paragraph className="text-start">{feature}</Paragraph>
                  </li>
                  {/* ); */}
                  {/* })} */}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <LargeHeading size="sm" className="f text-gray-900">
                co jeszcze ?
              </LargeHeading>
              <div className="mt-4 space-y-6">
                <Paragraph className="text-sm text-start text-gray-600">
                  {details}
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
