"use client";
import Courses from "@/components/Courses";
// import { menuItem } from "../../../../data/courses";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { menuItems } from "../../../../data/courses";

const Page = ({ params }: any) => {
  const router = useRouter();
  console.log(params.name);

  // function to writte first letter uppercase
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  console.log(capitalizeFirstLetter(params.name));

  let menuItem1 = menuItems.find(
    (item) => item.title === capitalizeFirstLetter(params.name)
  );
  console.log(menuItem1);
  return (
    <>
      {/* {menuItems.map((item, i) => {
        return (
          <div key={i}> */}
      <Courses {...menuItem1} />
      {/* </div> */}
      {/* ); */}
      {/* })} */}
    </>
  );
};

export default Page;
