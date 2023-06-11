import { menuItems } from "../../data/courses";
import { FC } from "react";

type CoursesPageProps = typeof menuItems;

const CoursesPage = ({ menuItems }: any) => {
  return (
    <div className="lg:col-span-3">
      <div className="container ">
        <div className="mx-auto  px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Dostępne kursy:
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {menuItems.map((course: any, index: any) => (
              <div key={index} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full h-80 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 flex justify-center items-center">
                  <h1 className="text-6xl font-extrabold">{course.icon}</h1>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={`courses/${course.link}`}>
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
  );
};

export default CoursesPage;
