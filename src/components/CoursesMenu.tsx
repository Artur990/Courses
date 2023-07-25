import { TCourses } from "@/types/types";
import { courses } from "../data/courses";
import Link from "next/link";
import { FC } from "react";

type CoursesProps = {
  toggleMenu: () => void;
};

const CoursesMenu: FC<CoursesProps> = ({ toggleMenu }: CoursesProps) => {
  function getUniqueItems(menuItems: TCourses[]) {
    const uniqueItems = [];
    const titles = new Set();

    for (const menuItem of menuItems) {
      if (!titles.has(menuItem.title)) {
        titles.add(menuItem.title);
        uniqueItems.push(menuItem);
      }
    }

    return uniqueItems;
  }
  const uniqueItems = getUniqueItems(courses);
  return (
    <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
      <div className="p-4">
        {uniqueItems.map((item, index) => (
          <Link
            href={`/?language=${item.title}`}
            onClick={() => toggleMenu()}
            key={index}
            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-300"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
              {item.icon}
            </div>
            <div className="flex-auto">
              <h3 className="block font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoursesMenu;
