import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { why } from "../src/assets/data";

const Features = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1800,
      mirror: true,
      once: false,
    });
  }, []);

  return (
    <section className="bg-grey-1 text-primary-2">
      <div>
        <h1 data-aos="fade-up" className="title text-primary-2">
          Why choose Easybank?
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="md:text-lg max-w-[650px]"
        >
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-12 ">
        {why.map((item, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="p-3 max-w-[250px] flex flex-col items-center"
            >
              <span>
                <img src={item.icon} alt={item.title} />
              </span>
              <h1
                data-aos="fade-down"
                data-aos-delay="300"
                className="text-xl font-semibold my-3 text-center"
              >
                {item.title}
              </h1>
              <p
                data-aos="fade-down"
                data-aos-delay="300"
                className="text-center"
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
