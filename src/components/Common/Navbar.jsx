import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_banner_negative.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            <li>
              <Link
                to="/about"
                class="block py-2 pl-3 pr-4 text-white md:text-gray-300 rounded-lg border-primary border-2 md:rounded-none md:border-x-0 md:border-t-0 hover:md:border-secondary hover:border-secondary md:border-b-2 md:hover:text-white md:p-0 md:"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                class="block py-2 pl-3 pr-4 text-white md:text-gray-300 rounded-lg border-primary border-2 md:rounded-none md:border-x-0 md:border-t-0 hover:md:border-secondary hover:border-secondary md:border-b-2 md:hover:text-white md:p-0 md:"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="apply"
                class="block py-2 pl-3 pr-4 text-white md:text-gray-300 rounded-lg border-primary border-2 md:rounded-none md:border-x-0 md:border-t-0 hover:md:border-secondary hover:border-secondary md:border-b-2 md:hover:text-white md:p-0 md:"
                onClick={() => setIsOpen(false)}
              >
                Apply
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                class="block py-2 pl-3 pr-4 text-white md:text-gray-300 rounded-lg border-primary border-2 md:rounded-none md:border-x-0 md:border-t-0 hover:md:border-secondary hover:border-secondary md:border-b-2 md:hover:text-white md:p-0 md:"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
