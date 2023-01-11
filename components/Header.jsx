import React from 'react'
import Logo from '../src/assets/images/logo.svg'
import Ham from "../src/assets/images/icon-hamburger.svg";

const Header = () => {
  return (
    <header>
      <nav class="bg-white z-50 sticky top-0 px-[1.5rem] lg:px-[3rem] py-2.5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center">
            <img src={Logo} class="mr-3" alt="easybank Logo" />
          </a>
          <div class="flex items-center lg:order-2">
            <button className="hidden md:flex">Request Invite</button>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-white focus:outline-none "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <img src={Ham} alt="hamburger menu" />
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 text-primary-2 font-semibold tracking-wider lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  class="py-2 pr-4 pl-3 hover:text-primary hover:border-b-2 hover:border-primary lg:p-0 lg:pb-2 lg:px-"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 pr-4 pl-3 hover:text-primary hover:border-b-2 hover:border-primary lg:p-0 lg:pb-2 lg:px-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 pr-4 pl-3 hover:text-primary hover:border-b-2 hover:border-primary lg:p-0 lg:pb-2 lg:px-1"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 pr-4 pl-3 hover:text-primary hover:border-b-2 hover:border-primary lg:p-0 lg:pb-2 lg:px-1"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 pr-4 pl-3 hover:text-primary hover:border-b-2 hover:border-primary lg:p-0 lg:pb-2 lg:px-1"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header