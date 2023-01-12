import React from "react";
import Heroimg from "../src/assets/images/image-mockups.png";

const Hero = () => {
  return (
    <div className="h-[100vh] flex items-center bg-gradient-to-tr from-grey-1 to-grey-2">
      <section class="lg:pt-0 lg:-mt-16 text-primary-2 w-full">
        <div class="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 text-center lg:text-left -z-10">
          <div class="lg:mr-auto mx-auto place-self-center lg:col-span-7">
            <span className="lg:hidden w-full flex justify-center">
              <img
                src={Heroimg}
                alt="mockup"
                className="object-contain w-[15rem]"
              />
            </span>
            <h1 class="max-w-2xl mb-4 text-4xl  font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Next generation digital banking
            </h1>
            <p class="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button>Request Invite</button>
          </div>
          <div class="hidden lg:flex lg:col-span-5">
            <img src={Heroimg} alt="mockup" className="object-contain w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
