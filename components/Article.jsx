import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { article } from "../src/assets/data";
import { Card } from "flowbite-react";

const Article = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1800,
      mirror: true,
      once: false,
    });
  }, []);

  return (
    <section>
      <h1
        data-aos="fade-up"
        className="title text-primary-2 mb-10"
      >
        Latest Articles
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {article.map((item, index) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="leading-tight cursor-pointer hover:scale-105 ease-in-out transition-all"
            >
              <Card imgAlt={item.title} imgSrc={item.imgurl}>
                <p
                  data-aos="fade-right"
                  data-aos-delay="200"
                  className="text-[13px] italic"
                >
                  By {item.by}
                </p>
                <h5
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="text-xl font-bold -mt-3"
                >
                  {item.title}
                </h5>
                <p data-aos="fade-right" data-aos-delay="300" className="-mt-3">
                  {item.text}
                </p>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Article;
