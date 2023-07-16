"use client";
import Courses from "@/components/Courses";
// import { menuItem } from "../../../../data/courses";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { courses } from "../../../data/courses";

const Page = ({ params }: any) => {
  const router = useRouter();
  console.log(params.name);

  // function to writte first letter uppercase
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  console.log(capitalizeFirstLetter(params.name));

  let menuItem1 = courses.find(
    (item) => item.title === capitalizeFirstLetter(params.name)
  );
  console.log(menuItem1);
  return (
    <section className="mt-20">
      <Courses {...menuItem1} />
    </section>
  );
};

export default Page;
