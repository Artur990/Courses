"use client";

import { useState } from "react";
import { buttonVariants } from "./ui/Button";
import Link from "next/link";
import SignOutButton from "./ui/SignOutButton";
import SingInButton from "./ui/SignInButton";
import { AiFillGithub } from "react-icons/ai";
// import NavbarMobile from "./NavbarMobile";
// import Courses from "./CoursesMenu";
import CoursesMobile from "./CoursesMobile";
import CoursesMenu from "./CoursesMenu";
import { useSession } from "next-auth/react";

interface NavProps {}

const Navbar = () => {
  // const session = await getServerSession(authOptions);
  const { data: session } = useSession();
  // const { data: session } = useSession();
  console.log(session);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMyCourses, setIsOpenMyCourses] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  // const session = await getServerSession(authOptions);
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };
  const toggleMenuMyCourses = () => {
    setIsOpenMyCourses(!isOpenMyCourses);
  };
  const toggleMenuMobile = () => {
    setIsOpenMobile(!isOpenMobile);
  };
  return (
    <header className="fixed z-50 top-0 left-0 right-0">
      <nav
        className="mx-auto flex  backdrop-blur-sm  border-b border-white dark:border-slate-700 shadow-sm bg-white/80 max-w-8xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className={buttonVariants({ variant: "link", size: "lg" })}
          >
            Dev kursy{""} {session && <span> ,witaj {session?.user.name}</span>}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMenuMobile}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            Menu
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5 flex-none text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0)",
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
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              onClick={toggleMenu}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
              aria-expanded="false"
            >
              Kursy
              <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0)",
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
            {isOpen && <CoursesMenu toggleMenu={toggleMenu} />}
          </div>
          <Link
            href="blog"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Blog
          </Link>
          <Link
            href="nowosci"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Nowości
          </Link>
        </div>
        {session ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center lg:gap-x-8">
            <div className="relative">
              <button
                type="button"
                onClick={toggleMenuMyCourses}
                className={buttonVariants({ variant: "ghost", size: "sm" })}
                aria-expanded="false"
              >
                Moje Szkolnia
                <svg
                  className="h-5 w-5 flex-none text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  style={{
                    transform: isOpenMyCourses ? "rotate(180deg)" : "rotate(0)",
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
              {isOpenMyCourses && (
                <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-0">
                    <div className="group relative flex items-start flex-col gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-300">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                          <AiFillGithub className="h-10 w-10" />
                        </div>
                        <div className="flex-auto">
                          <Link
                            href="github"
                            className="block font-semibold text-gray-900"
                          >
                            GitHub
                          </Link>
                          <p className="mt-1 text-gray-600">Ukończono 2/10</p>
                        </div>
                      </div>

                      {/* <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-300"> */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-300">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                          <AiFillGithub className="h-10 w-10" />
                        </div>
                        <div className="flex-auto">
                          <Link
                            href="github"
                            className="block font-semibold text-gray-900"
                          >
                            GitHub
                          </Link>
                          <p className="mt-1 text-gray-600">Ukończono 2/10</p>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <SignOutButton />
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            <SingInButton />
          </div>
        )}
      </nav>

      {/* <!-- Mobile menu --> */}
      <div className="lg:hidden" role="dialog" aria-modal="true">
        {isOpenMobile && (
          <div className="fixed inset-0 z-10">
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className={buttonVariants({ variant: "link", size: "lg" })}
                >
                  Dev kursy
                </Link>
                <button
                  onClick={toggleMenuMobile}
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-2">
                    <div className="-mx-3">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="flex items-center gap-x-1 pl-2 text-lg font-semibold leading-6 text-gray-900"
                        aria-expanded="false"
                      >
                        Kursy
                        <svg
                          className="h-5 w-5 flex-none text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
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

                      {isOpen && <CoursesMobile />}
                    </div>
                    <Link
                      href="/blog"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/nowosci"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    >
                      Nowości
                    </Link>
                  </div>

                  <div className="py-2">
                    {true ? <SignOutButton /> : <SingInButton />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Navbar;
