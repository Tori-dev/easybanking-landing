import React from 'react'
import { article } from '../src/assets/data'
import { Card } from 'flowbite-react';

const Article = () => {
  return (
    <section>
      <h1 className="title text-primary-2 mb-10">Latest Articles</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {article.map((item, index) => {
          return (
            <div className="leading-tight cursor-pointer hover:scale-105 ease-in-out transition-all">
              <Card
                imgAlt={item.title}
                imgSrc={item.imgurl}
              >
                <p className="text-[13px] italic">By {item.by}</p>
                <h5 className="text-xl font-bold -mt-3">
                  {item.title}
                </h5>
                <p className="-mt-3">
                  {item.text}
                </p>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Article