import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const FlyoutLink = ({
  children,
  FlyoutContent,
}: {
  children: React.ReactNode;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <div className={`relative text-black  text-lg `}>
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full  transition-transform duration-300 ease-out"
        />
      </div>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 12, x: 30 }}
            animate={{ opacity: 1, y: -8, x: 30 }}
            exit={{ opacity: 0, y: 12 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute md:left-[130%] left-[70%] top-12 z-50 bg-transparent rounded-md text-white"
          >
            <div className="absolute -top-10 left-0 right-0 h-8 bg-transparent" />
            <div className="absolute md:left-[25%] lg:left-[25%] top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/*

interface Item {
  link: string;
  title: string;
}
  */

export const ShopComponent: React.FC = () => {
  /* 


  const data: Item[] = [
    {
      link: "https://i.postimg.cc/QxLWX7Z3/1650559088-case-thumb.jpg",
      title: "Bundles",
    },
    {
      link: "https://i.postimg.cc/T3fLbXPN/1650559091-minis-thumb.jpg",
      title: "Cases",
    },
    {
      link: "https://i.postimg.cc/SNWYjKmz/1650559095-refills-thumb.jpg",
      title: "Refills",
    },
    {
      link: "https://i.postimg.cc/WpqkLnK8/1650559518-bundle-thumb.jpg",
      title: "Mini Deos",
    },
  ];
  */

  return (
    <div className="w-[15rem] rounded-md bg-black p-6 shadow-xl h-[13rem] flex flex-col gap-y-1 font-normal ">
      <NavLink
        to={"/shop-supernatural"}
        className={({ isActive }) =>
          `text-white hover:text-yellow rounded ${
            isActive ? "text-yellow" : ""
          }`
        }
      >
        Shop All
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          `text-white hover:text-yellow rounded ${
            isActive ? "text-yellow" : ""
          }`
        }
      >
        Dye-Free Sprinkles
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          `text-white hover:text-yellow rounded ${
            isActive ? "text-yellow" : ""
          }`
        }
      >
        Plant-Derived Colors
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          `text-white hover:text-yellow rounded ${
            isActive ? "text-yellow" : ""
          }`
        }
      >
        Colorful Baking Chips
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          `text-white hover:text-yellow rounded ${
            isActive ? "text-yellow" : ""
          }`
        }
      >
        Easy Frosting Mixes
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          `text-white hover:text-yellow rounded ${
            isActive ? "text-yellow" : ""
          }`
        }
      >
        Bulk
      </NavLink>
    </div>
  );
};
