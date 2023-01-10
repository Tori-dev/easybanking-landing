import React from 'react'
import Logo from '../src/assets/images/logo.svg'
import Ham from "../src/assets/images/icon-hamburger.svg";

const Header = () => {
  return (
    <header>
      <nav class="bg-white px-4 lg:px-6 py-2.5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center">
            <img
              src={Logo}
              class="mr-3"
              alt="easybank Logo"
            />
            
          </a>
          <div class="flex items-center lg:order-2">
            <button className='hidden md:flex'>Request Invite</button>
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
            <ul class="flex flex-col mt-4 text-primary-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  class="py-2 pr-4 pl-3 hover:text-primary hover:font-semibold lg:p-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 pr-4 pl-3 hover:text-primary hover:font-semibold lg:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 pr-4 pl-3 hover:text-primary hover:font-semibold lg:p-0"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 pr-4 pl-3 hover:text-primary hover:font-semibold lg:p-0"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 pr-4 pl-3 hover:text-primary hover:font-semibold lg:p-0"
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