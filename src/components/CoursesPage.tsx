import { TCourses } from "@/types/types";
import Link from "next/link";

type CoursesPageProps = {
  menuItems: TCourses[] | undefined;
  view?: string;
};

const CoursesPage = ({ menuItems, view }: CoursesPageProps) => {
  return (
    <div className="lg:col-span-3">
      <div className="container ">
        <div className="mx-auto  px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Dostępne kursy:
          </h2>
          {menuItems?.length === 0 && (
            <p className="text-black">Nie znaleziono to czego szukasz.. :(</p>
          )}
          {view === "grid" ? (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {menuItems?.map((course: any, index: any) => (
                <div key={index} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full h-80 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 flex justify-center items-center">
                    <h1 className="text-6xl font-extrabold text-center text-black">
                      {course.icon}
                    </h1>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium  ">
                        <Link href={`courses/${course.link}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          ></span>
                          {course.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {course.category}
                      </p>
                    </div>
                    <p className="text-lgfont-medium text-gray-900">
                      {course.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-y-10">
              {menuItems?.map((course: any, index: any) => (
                <div
                  key={index}
                  className="group relative flex flex-col sm:flex-row items-center justify-between"
                >
                  <div className="w-full sm:w-1/3 h-56 overflow-hidden rounded-md bg-gray-200 flex justify-center items-center">
                    <h1 className="w-[90%] text-6xl text-center font-extrabold whitespace-nowrap text-black">
                      {course.icon}
                    </h1>
                  </div>
                  <div className="w-full sm:w-1/3 h-full mt-4 sm:mt-0">
                    <h3 className="text-lg font-medium ml-6">
                      <Link href={`courses/${course.link}`}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {course.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm ml-6 text-gray-500">
                      {course.category}
                    </p>
                  </div>
                  <div className="w-full sm:w-1/3 h-full flex items-start justify-end">
                    <p className="text-lg font-medium text-gray-900">
                      {course.price} zł
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
