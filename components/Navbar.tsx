"use client";
import { tr } from "date-fns/locale";
import Image from "next/image";
import { FC, useState } from "react";
import { Button, buttonVariants } from "./ui/Button";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import SingInButton from "./SignInButton";
import { getServerSession } from "next-auth";
import { AiFillGithub } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";

interface NavProps {}

const Navbar = ({}) => {
  // const session = await getServerSession(); // Get the user's session based on the request
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMySchool, setIsOpenMySchool] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenuMySchool = () => {
    setIsOpenMySchool(!isOpenMySchool);
  };
  const toggleMenuMobile = () => {
    setIsOpenMobile(!isOpenMobile);
  };
  return (
    <header className="fixed z-50 top-0 left-0 right-0">
      <nav
        className="mx-auto flex  backdrop-blur-sm  border-b border-white dark:border-slate-700 shadow-sm bg-white/80 max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className={buttonVariants({ variant: "link", size: "lg" })}
          >
            Dev kursy
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMenuMobile}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
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
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            {/* <!--
          'Product' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
        --> */}
            {isOpen && (
              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
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
                      <p className="mt-1 text-gray-600">
                        System cotrol version
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-300">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                      <TbBrandJavascript className="h-10 w-10" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="javaScript"
                        className="block font-semibold text-gray-900"
                      >
                        JavaScript
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">Language programing</p>
                    </div>
                  </div>

                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-300">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                      <GrReactjs className="h-10 w-10" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="#"
                        className="block font-semibold text-gray-900"
                      >
                        React
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">
                        Library for building user interfaces
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <svg
                      className="h-5 w-5 flex-none text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Watch demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <svg
                      className="h-5 w-5 flex-none text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Contact sales
                  </a>
                </div> */}
              </div>
            )}
          </div>
          <Link
            href="#"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Blog
          </Link>
          <Link
            href="#"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Nowości
          </Link>
        </div>
        {true ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center lg:gap-x-8">
            <div className="relative">
              <button
                type="button"
                onClick={toggleMenuMySchool}
                className={buttonVariants({ variant: "ghost", size: "sm" })}
                aria-expanded="false"
              >
                Moje Szkolnia
                <svg
                  className="h-5 w-5 flex-none text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              {isOpenMySchool && (
                <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
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

      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div className="lg:hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
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

                      {isOpen && (
                        <div className="mt-2 space-y-2" id="disclosure-1">
                          <Link
                            href="/github"
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                          >
                            GitHub
                          </Link>
                        </div>
                      )}
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
