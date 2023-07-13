import { FC } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressWithLabel } from "../components/ui/CircularProgress";
interface NavbarCourseProps {}

const NavbarCourse: FC<NavbarCourseProps> = ({ page }: any) => {
  const percentage = 66;

  return (
    <nav className="mt-24 w-full h-20 bg-slate-800 flex justify-between  items-center  p-6  px-16">
      {/* NavbarCourse */}
      <h2 className="text-2xl text-white">Witamy w kursie React!</h2>
      {/* <div style={{ width: 200, height: 200 }}> */}
      {/* <CircularProgressbar value={66} /> */}
      {/* <CircularProgressbar value={percentage} text={`${percentage}%`} /> */}
      <div className="flex items-center justify-center w-1/4">
        {/* <button className="text-white"></button> */}
        <CircularProgressWithLabel value={percentage} />
        <button
          type="button"
          // onClick={toggleMenuMobile}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white ml-1"
        >
          Twój postęp
          <span className="sr-only">Twój postęp</span>
          <svg
            className="h-5 w-5 flex-none text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            style={{
              // transform: isOpen ? "rotate(180deg)" : "rotate(0)",
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
    </nav>
  );
};

export default NavbarCourse;
