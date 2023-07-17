"use client";
import Courses from "@/components/Courses";
import { courses } from "../../../data/courses";

const Page = ({ params }: any) => {
  // function to writte first letter uppercase
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let menuItem1 = courses.find(
    (item) => item.title === capitalizeFirstLetter(params.name)
  );
  return (
    <section className="mt-20">
      <Courses {...menuItem1} />
    </section>
  );
};

export default Page;
