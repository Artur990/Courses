import { menuItems } from "@/data/courses";
import Link from "next/link";
import { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";

interface CoursesProps {}

const Courses: FC<CoursesProps> = ({}) => {
  return (
    <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
      <div className="p-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-300"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
              {item.icon}
            </div>
            <div className="flex-auto">
              <Link
                href={item.link}
                className="block font-semibold text-gray-900"
              >
                {item.title}
              </Link>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
