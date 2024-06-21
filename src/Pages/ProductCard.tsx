import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface productDetails {
  imageLink: string;
  productTitle: string;
  productPrice: string;
}

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide + 1) % productDetailData.length
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="flex space-x-4 overflow-x-scroll items-center justify-center gap-[3rem]  pt-[20rem] scroll-smooth">
      <AnimatePresence mode="wait">
        {productDetailData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-64 bg-orange-200 h-96 ${
              index === currentSlide ? "block" : "hidden"
            } transition-opacity  duration-300`}
          >
            <img
              src={item.imageLink}
              alt={item.productTitle}
              className="w-full h-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{item.productTitle}</h2>
              <p className="text-md">{item.productPrice}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
