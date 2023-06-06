import { FC, useState } from "react";
import SignOutButton from "./SignOutButton";
import SingInButton from "./SignInButton";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
interface NavbarMobileProps {}

const NavbarMobile: FC<NavbarMobileProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [isOpenMySchool, setIsOpenMySchool] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenuMobile = () => {
    setIsOpenMobile(!isOpenMobile);
  };
  return (
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
  );
};

export default NavbarMobile;
