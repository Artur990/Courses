import { FC } from "react";
import ProgressCircle from "./ui/ProgressCircle";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface NavbarCourseProps {}

const NavbarCourse: FC<NavbarCourseProps> = ({ page }: any) => {
  const percentage = 66;

  return (
    <nav className="mt-24 w-full h-20 bg-slate-800 flex justify-between  items-center  p-6">
      {/* NavbarCourse */}
      <h2 className="text-2xl text-white">Witamy w kursie React!</h2>
      {/* <CircularProgressbar value={percentage} text={`${percentage}%`} />; */}
      <div style={{ width: 200, height: 200 }}>
        {/* <CircularProgressbar value={66} /> */}
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </nav>
  );
};

export default NavbarCourse;
