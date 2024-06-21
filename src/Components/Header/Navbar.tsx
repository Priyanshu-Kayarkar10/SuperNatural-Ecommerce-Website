import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoCartSharp } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import {
  AboutComponent,
  BodyWashComponent,
  DeodorantComponent,
  FlyoutLink,
  LipBalmComponent,
} from "./Dropdown";

const Navbar: React.FC = () => {
  const [isDropDownActive, setIsDropDownActive] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");
      const openSidebarButton = document.getElementById("open-sidebar");

      if (
        sidebar &&
        openSidebarButton &&
        !sidebar.contains(e.target as Node) &&
        !openSidebarButton.contains(e.target as Node)
      ) {
        setIsDropDownActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar  absolute bg-transparent h-[4.8rem] w-full flex items-center justify-between md:gap-x-0 gap-x-[1rem] lg:px-14 px-12 pt-5 font-poppins  ">
      <div
        id="sidebar"
        className={`absolute inset-0 bg-n-1 w-full z-10 py-6 h-screen overflow-scroll px-8 lg:hidden transition-transform transform ${
          isDropDownActive ? "translate-y-0" : "-translate-y-full"
        } ease-in delay-75 duration-300`}
      >
        <div className="flex flex-col gap-y-[2rem] w-full h-full text-white font-spartan ">
          <RxCross2
            onClick={() => {
              setIsDropDownActive(false);
            }}
            className="cursor-pointer hover:opacity-[0.5] text-black bg-n-2 p-[0.7rem] w-[2.3rem] h-[2.3rem] rounded-full"
          />
          <div className="flex flex-col gap-y-3">
            <div className="cursor-pointer w-full h-24 bg-n-3 rounded-lg flex items-center justify-between px-6">
              <h1 className="font-semibold text-lg tracking-wide">
                Deodorant
                <p className="font-normal  text-sm">Get Started</p>
              </h1>
              <img
                className=" sm:w-28 sm:h-28 mt-4 w-20 h-20"
                src="https://i.postimg.cc/Pr6WVcWD/card-1.png"
                alt="Deodorant"
              />
              <MdKeyboardArrowRight className="bg-white/25 rounded-full h-6 w-6 p-1" />
            </div>
            <div className="cursor-pointer w-full h-24 bg-n-4 rounded-lg flex items-center justify-between px-6">
              <h1 className="font-semibold text-[1.10rem] tracking-wide">
                Body Wash
                <p className="font-normal text-sm">Get Started</p>
              </h1>
              <img
                className=" sm:w-28 sm:h-28 mt-4 w-20 h-20"
                src="https://i.postimg.cc/LsFnxBbf/card-2.png"
                alt="BodyWash"
              />
              <MdKeyboardArrowRight className="bg-white/25 rounded-full h-6 w-6 p-1" />
            </div>
          </div>

          <ul className="listSection flex flex-col gap-y-[0.8rem] font-semibold text-black">
            <li className="flex justify-between border-b border-b-n-1 py-[0.8rem] cursor-pointer ">
              <h1 className="text-[1.1rem] ">DEODORANT</h1>
              <span className="text-white rounded-full bg-n-5 w-6 h-6 p-1 ">
                <MdKeyboardArrowDown className="w-full h-full" />
              </span>
            </li>
            <li className="flex justify-between border-b border-b-n-1 py-[0.8rem] cursor-pointer ">
              <h1 className="text-[1.1rem] ">BODY WASH</h1>
              <span className="text-white rounded-full bg-n-5 w-6 h-6 p-1 ">
                <MdKeyboardArrowDown className="w-full h-full" />
              </span>
            </li>

            <li className="flex justify-between border-b border-b-n-1 py-[0.8rem] cursor-pointer ">
              <h1 className="text-[1.1rem] ">LIP BALM</h1>
              <span className="text-white rounded-full bg-n-5 w-6 h-6 p-1 ">
                <MdKeyboardArrowDown className="w-full h-full" />
              </span>
            </li>
            <li className="flex justify-between border-b border-b-n-1 py-[0.8rem] cursor-pointer ">
              <h1 className=" text-[1.1rem] ">ABOUT</h1>
              <span className="text-white rounded-full bg-n-5 w-6 h-6 p-1 ">
                <MdKeyboardArrowDown className="w-full h-full " />
              </span>
            </li>
          </ul>
        </div>
      </div>

      <span
        id="open-sidebar"
        onClick={() => {
          setIsDropDownActive(!isDropDownActive);
        }}
        className="cursor-pointer h-10 w-10 flex items-center justify-center rounded-[100%] bg-white transition hover:scale-[1.05] ease-in lg:hidden duration-600"
      >
        <HiMenuAlt4 className="w-5 h-5" />
      </span>
      <div className="hidden lg:flex ">
        <ul className=" flex items-center md:gap-x-[2rem] gap-x-[3rem] font-semibold  text-white tracking-[0.5px] px-4 ">
          <FlyoutLink href="#" FlyoutContent={DeodorantComponent}>
            Deodorant
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={BodyWashComponent}>
            Body Wash
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={LipBalmComponent}>
            Lip Balm
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={AboutComponent}>
            About
          </FlyoutLink>
        </ul>
      </div>
      <h1 className="text-white select-none text-[3rem] font-song xl:text-[4rem] lg:mr-[10rem] ">
        Wild
      </h1>
      <span className=" hidden lg:flex cursor-pointer h-10 w-30 px-4 rounded   items-center font-semibold justify-center gap-x-4  bg-white hover:opacity-[0.7] active:opacity-[0.3]">
        <h3 className="tracking-[0.5px]">Get Started</h3>
        <MdKeyboardArrowRight className="w-5 h-5 p-[0.125rem] bg-n-5 text-white rounded-full " />
      </span>
      <span className="cursor-pointer h-10 w-10 flex items-center justify-center rounded-full bg-white hover:opacity-[0.7] active:opacity-[0.3]">
        <IoCartSharp className="w-5 h-5" />
      </span>
    </nav>
  );
};

export default Navbar;
