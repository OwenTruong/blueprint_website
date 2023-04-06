import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logos/logo_banner_negative.png";
import content from "./NavbarContent.json";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = content.links.map((link) => (
    <li key={link[1]}>
      <Link
        to={link[1]}
        className="relative group py-2 pl-3 pr-4 text-white md:text-gray-300 rounded-lg md:rounded-none md:hover:text-white md:p-0 md:hover:transition md:hover:duration-300"
        onClick={() => setIsOpen(false)}
      >
        {link[0]}
        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 rounded-r-full bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300" />
        <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 rounded-l-full bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300" />
      </Link>
    </li>
  ));

  return (
    <nav className="bg-primary px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Blueprint Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 text-lg text-white md:hidden rounded-lg hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1${
            isOpen ? "" : " hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-3 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0">
            {navLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
