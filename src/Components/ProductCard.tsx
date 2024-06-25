import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

interface productDetails {
  imageLink: string;
  productTitle: string;
  productPrice: string;
}

const productDetailData: productDetails[] = [
  {
    imageLink:
      "https://i.postimg.cc/vmzVbPz1/1661167302-untitled-design-44.png",
    productTitle: "Deodorant",
    productPrice: "10$",
  },

  {
    imageLink:
      "https://i.postimg.cc/26SB64c0/1699894139-black-body-wash-engraving.png",
    productTitle: "Body Wash",
    productPrice: "10$",
  },

  {
    imageLink:
      "https://i.postimg.cc/1Xgn0yZ6/1711103423-blue-lipbalm-case-engraving.png",
    productTitle: "Lip Balm",
    productPrice: "10$",
  },

  {
    imageLink: "https://i.postimg.cc/Vv3SD2Yh/1661166681-refills.png",
    productTitle: "Refills",
    productPrice: "10$",
  },

  {
    imageLink: "https://i.postimg.cc/1RTNmVpK/1661166689-minis.png",
    productTitle: "Mini Deos",
    productPrice: "10$",
  },
];

export const ProductCard: React.FC = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[180vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          {productDetailData.map((item) => {
            return <Card card={item} key={item.productTitle} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: productDetails }) => {
  return (
    <div
      key={card.productTitle}
      className="group relative h-[13rem] w-[10rem] md:h-[18rem] md:w-[14rem] overflow-hidden rounded-2xl border border-n-2 bg-n-1 flex cursor-pointer items-end py-6 md:py-7 transition-transform duration-300 hover:-translate-y-8 justify-center "
    >
      <div
        style={{
          backgroundImage: `url(${card.imageLink})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" mt-6 w-28 mx-auto h-28 absolute md:h-48 md:w-48 inset-0 z-0 "
      />

      <div className=" text-center -tracking-[.5px] leading-[1.5rem] ">
        <h1 className="text-[1.1rem] md:text-[1.3rem] md:font-bold md:tracking-[0.5px] font-semibold">
          {card.productTitle}
        </h1>
        <h1 className="text-[0.9rem]">Plans from {card.productPrice}</h1>
      </div>
    </div>
  );
};
