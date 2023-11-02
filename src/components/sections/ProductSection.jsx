/* eslint-disable react/jsx-key */
import React from "react";
import { productSection } from "../../constants/content/productContent";

const ProductSection = () => {
  return (
    <div className="mt-[100px]">
      {productSection.map((data) => (
        <div className="wrapper">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-center text-4xl font-generalSb"
          >
            {data.title}
          </h1>
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="200"
            className="text-center text-xl "
          >
            {data.subtitle}
          </h3>
          <div className="type flex justify-center items-center gap-x-5 flex-wrap">
            {data.content.map((dataContent) => (
              <div className="flex justify-center flex-col items-center mt-20">
                <h1
                  data-aos="fade-zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                  data-aos-once="true"
                  className="border border-black py-[15px] px-[40px] rounded-[32px] font-generalSb "
                >
                  {dataContent.title}
                </h1>
                <ul className="w-full">
                  {dataContent.lists.map((listContent) => {
                    const dataAosDelay = 300 + (listContent.id - 1) * 200;

                    return (
                      <li
                        key={listContent.id}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={dataAosDelay}
                        data-aos-once="true"
                        className="border-b-[1px] border-black flex mt-8 justify-between pb-2 text-xl gap-x-2"
                      >
                        <img src={listContent.icon} alt="" />
                        <p className="font-generalMd">{listContent.desc}</p>
                        <p></p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
