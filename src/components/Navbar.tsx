import { useState } from "react";
import Logo from "../assets/logo.svg";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [userOpen, setUserOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // const toggleUserMenu = () => {
  //   setUserOpen(!userOpen);
  // };

  return (
    <nav className="bg-sky-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
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
              <svg
                className="hidden h-6 w-6"
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
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-12 w-auto" src={Logo} alt="Your Company" />
            </div>
            <div className="hidden sm:mx-auto sm:block sm:my-auto">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-sky-700 text-white nav-item text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="nav-item text-sky-700 font-medium text-sm active:bg-sky-700 active:text-white hover:outline-sky-700 focus-visible:outline-sky-700"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="nav-item text-sky-700 font-medium text-sm active:bg-sky-700 active:text-white hover:outline-sky-700 focus-visible:outline-sky-700"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={mobileMenuOpen ? "sm:hidden" : "hidden"} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="bg-sky-700 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sky-700 hover:bg-sky-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-sky-700 hover:bg-sky-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
