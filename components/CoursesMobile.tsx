import { menuItems } from "@/data/courses";
import Link from "next/link";
import { FC } from "react";

interface CoursesMobileProps {}

const CoursesMobile: FC<CoursesMobileProps> = ({}) => {
  return (
    <div>
      {menuItems.map((item, index) => (
        <div key={index} className="mt-2 space-y-2" id="disclosure-1">
          <Link
            href={item.link}
            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-200"
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CoursesMobile;
