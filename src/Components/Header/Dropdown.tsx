import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";

export const FlyoutLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
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
      <a href={href} className="relative text-white text-lg ">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-n-3 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15, x: 30 }}
            animate={{ opacity: 1, y: 0, x: 30 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-[110%] top-12  bg-white rounded-2xl text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-8 bg-transparent" />
            <div className="absolute left-[30%] top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface Item {
  link: string;
  title: string;
}

export const DeodorantComponent: React.FC = () => {
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
  return (
    <div className="w-[25rem] rounded-2xl bg-white p-6 shadow-xl min-h-[30rem]">
      <div className="container gap-y-4 flex flex-col w-full h-full rounded-2xl">
        <div className="cursor-pointer w-full h-24 bg-n-3 rounded-lg flex items-center justify-between px-5">
          <h1 className="text-white font-semibold text-[1rem] tracking-1">
            Deodorant
            <p className="font-normal text-[0.75rem]">Get Started</p>
          </h1>
          <img
            className="w-[4rem] h-[4rem]"
            src="https://i.postimg.cc/Pr6WVcWD/card-1.png"
            alt="Deodorant"
          />
          <MdKeyboardArrowRight className="bg-white/25 rounded-full h-6 w-6 p-1 text-white " />
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex rounded-xl hover:bg-n-1 w-full h-20 gap-x-[1rem] items-center p-2 cursor-pointer"
          >
            <img
              className="w-[4rem] h-[4rem] rounded-xl"
              src={item.link}
              alt={item.title}
            />
            <h1 className="text-semibold tracking-[0.5px]">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BodyWashComponent: React.FC = () => {
  const data: Item[] = [
    {
      link: "https://i.postimg.cc/jqhBbx6v/1695289657-bw-bundles-nav.jpg",
      title: "Bundles",
    },
    {
      link: "https://i.postimg.cc/2yCJZMY4/1695289686-bw-cases-nav.jpg",
      title: "Cases",
    },
    {
      link: "https://i.postimg.cc/tJDctkR8/1695289712-bw-refills-nav.jpg",
      title: "Refills",
    },
    {
      link: "https://i.postimg.cc/KzPw4F6G/1650559098-soap-thumb.jpg",
      title: "Soaps",
    },
    {
      link: "https://i.postimg.cc/xTThjwtQ/1673890107-untitled-design-8.jpg",
      title: "Shampoo bars",
    },
  ];
  return (
    <div className="w-[25rem] rounded-2xl bg-white p-6 shadow-xl min-h-[30rem]">
      <div className="container gap-y-4 flex flex-col w-full h-full rounded-2xl">
        <div className="cursor-pointer w-full h-24 bg-n-4 rounded-lg flex items-center justify-between px-5">
          <h1 className="text-white font-semibold text-[1rem] tracking-1">
            Body Wash
            <p className="font-normal text-[0.75rem]">Get Started</p>
          </h1>
          <img
            className="w-[4rem] h-[4rem]"
            src="https://i.postimg.cc/LsFnxBbf/card-2.png"
            alt="Deodorant"
          />
          <MdKeyboardArrowRight className="bg-white/25 rounded-full h-6 w-6 p-1 text-white " />
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex rounded-xl hover:bg-n-1 w-full h-20 gap-x-[1rem] items-center p-2 cursor-pointer"
          >
            <img
              className="w-[4rem] h-[4rem] rounded-xl"
              src={item.link}
              alt={item.title}
            />
            <h1 className="text-semibold tracking-[0.5px]">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export const LipBalmComponent: React.FC = () => {
  const data: Item[] = [
    {
      link: "https://i.postimg.cc/WzKRvVHN/1716551755-lip-balm-nav.jpg",
      title: "Bundles",
    },
    {
      link: "https://i.postimg.cc/KcshL7v6/1716564950-lip-balm-blue-case-1x1-2.jpg",
      title: "Cases",
    },
    {
      link: "https://i.postimg.cc/mkhxJkVp/1716564967-lip-balm-refill-1.jpg",
      title: "Refills",
    },
  ];
  return (
    <div className="w-[25rem] rounded-2xl bg-white p-6 shadow-xl min-h-[20rem]">
      <div className="container gap-y-4 flex flex-col w-full h-full rounded-2xl">
        <div className="cursor-pointer w-full h-24 bg-n-6 rounded-lg flex items-center justify-between px-5">
          <h1 className="text-white font-semibold text-[1rem] tracking-1">
            Lip Balm
            <p className="font-normal text-[0.75rem]">Get Started</p>
          </h1>
          <MdKeyboardArrowRight className="bg-white/25 rounded-full h-6 w-6 p-1 text-white " />
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex rounded-xl hover:bg-n-1 w-full h-20 gap-x-[1rem] items-center p-2 cursor-pointer"
          >
            <img
              className="w-[4rem] h-[4rem] rounded-xl"
              src={item.link}
              alt={item.title}
            />
            <h1 className="text-semibold tracking-[0.5px]">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AboutComponent: React.FC = () => {
  const data: Item[] = [
    {
      link: "https://i.postimg.cc/9MhZLqXV/1648049791-faqs.jpg",
      title: "FAQS",
    },
    {
      link: "https://i.postimg.cc/0Nm7GCsc/1696436633-contact-us-nav.jpg",
      title: "Contact us",
    },
    {
      link: "https://i.postimg.cc/YCv60Hyc/1674059217-untitled-design-9.jpg",
      title: "Ingredients",
    },
  ];
  return (
    <div className="w-[25rem] rounded-2xl bg-white p-6 shadow-xl min-h-[20rem]">
      <div className="container gap-y-4 flex flex-col w-full h-full rounded-2xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex rounded-xl hover:bg-n-1 w-full h-20 gap-x-[1rem] items-center p-2 cursor-pointer"
          >
            <img
              className="w-[4rem] h-[4rem] rounded-xl"
              src={item.link}
              alt={item.title}
            />
            <h1 className="text-semibold tracking-[0.5px]">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
