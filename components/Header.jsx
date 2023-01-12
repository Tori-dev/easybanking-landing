import React, { useState, useEffect } from "react";
import Logo from "../src/assets/images/logo.svg";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../src/assets/data";
import NavMob from "./NavMob";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <header className="py-4 bg-grey-2 z-10 sticky w-full transition-all duration-200 pad">
        <div>
          <div className="flex justify-between items-center">
            {/* logo */}
            <a href="#">
              <img className="h-6" src={Logo} alt="" />
            </a>

            {/* nav */}
            <nav className="hidden lg:flex">
              <ul className="lg:flex lg:gap-x-8 tracking-wider">
                {navigation.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        className="capitalize text-grey hover:text-primary hover:border-b-2 hover:border-primary pb-2 hover:font-bold transition-all"
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <span className="flex items-center gap-4">
              {/* CTA BUTTON */}
              <button className="hidden md:flex">Request Invite</button>

              {/* menu icon */}
              <div
                onClick={() => setMobileNav(!mobileNav)}
                className="lg:hidden text-2xl lg:text-3xl text-grey cursor-pointer"
              >
                {mobileNav ? <CgClose /> : <CgMenuRight />}
              </div>
            </span>
          </div>
        </div>
      </header>
      {/* nav mobile */}
      <div
        className={`${
          mobileNav ? "left-0" : "-left-full"
        } lg:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all z-10`}
      >
        <NavMob />
      </div>
    </>
  );
};

export default Header;
