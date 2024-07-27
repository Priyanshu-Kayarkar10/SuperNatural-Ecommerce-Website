import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { FlyoutLink, ShopComponent } from "./Dropdown";

const Navbar: React.FC = () => {
  // const navigate = useNavigate();
  const [isDropDownActive, setIsDropDownActive] = useState<boolean>(false);
  const [isDropDownTextActive, setIsDropDownTextActive] =
    useState<boolean>(false);

  const [
    isLoggedIn,
    // setIsLoggedIn
  ] = useState<boolean>(false);

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
    <nav className="navbar absolute w-full md:h-[5rem] h-[6rem] bg-transparent overflow-visible flex items-center justify-between px-5 md:px-[3rem] md:py-[5rem] {overflow-hidden} z-50 font-space lg:px-[5rem]">
      <section
        className={` overflow-hidden inset-0 md:hidden fixed top-0 right-0 w-full h-full bg-n-1 transition-transform transform ${
          isDropDownActive ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
        style={{ zIndex: 1000 }}
      >
        <div
          onClick={() => {
            setIsDropDownActive(false);
            setIsDropDownTextActive(false);
          }}
          className="p-5 cursor-pointer"
        >
          <RxCross2 className="w-6 h-6" />
        </div>
        {isDropDownActive && (
          <div className="relative px-8 h-full">
            <ul
              className={`absolute w-full flex flex-col px-[5.5rem] text-[1.8rem] leading-[4rem] justify-center transition-transform transform ease-in-out delay-100 duration-300 ${
                isDropDownTextActive ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              <li className="font-thin cursor-pointer mb-6  relative group">
                <span
                  onClick={() => {
                    setIsDropDownTextActive(true);
                  }}
                  className="flex w-[8rem] items-center"
                >
                  Shop <RiArrowRightDoubleLine />
                </span>
              </li>
              <li className="cursor-pointer relative group">
                <NavLink
                  to={"/shop-supernatural"}
                  onClick={() => {
                    setIsDropDownActive(false);
                    setIsDropDownTextActive(false);
                  }}
                  className={({ isActive }) =>
                    `font-semibold  ${isActive ? "text-white" : ""}`
                  }
                >
                  Shop All
                </NavLink>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-[6.6rem] mb-3"></span>
              </li>
              <li className="cursor-pointer relative group">
                {isLoggedIn ? (
                  //TODO: add Profile
                  <span className="font-semibold">Profile</span>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={() => {
                      setIsDropDownActive(false);
                      setIsDropDownTextActive(false);
                    }}
                    className={({ isActive }) =>
                      `font-semibold  ${isActive ? "text-white" : ""}`
                    }
                  >
                    Login
                  </NavLink>
                )}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-[5rem] mb-3"></span>
              </li>
            </ul>
            <ul
              className={`absolute h-full pb-[20rem] w-full flex flex-col px-[3rem] pr-[1rem] text-[1.6rem] leading-[3rem] justify-center transition-transform transform ease-in-out delay-100 duration-300  ${
                isDropDownTextActive ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <li className="font-thin cursor-pointer mb-6 relative group">
                <span
                  onClick={() => {
                    setIsDropDownTextActive(false);
                  }}
                  className="flex w-[8rem] items-center"
                >
                  <RiArrowLeftDoubleLine /> Back
                </span>
              </li>
              <li className="cursor-pointer relative group ">
                <span className="font-semibold ">Dye-Free Sprinkles</span>
              </li>
              <li className="cursor-pointer relative group ">
                <span className="font-semibold">Plant-Derived Colors</span>
              </li>
              <li className="cursor-pointer relative group ">
                <span className="font-semibold">Colorful Baking Chips</span>
              </li>
              <li className="cursor-pointer relative group ">
                <span className="font-semibold">Easy Frosting Mixes</span>
              </li>
              <li className="cursor-pointer relative group ">
                <span className="font-semibold">Bulk</span>
              </li>
            </ul>
          </div>
        )}
      </section>
      <section className="flex items-center justify-between w-full mx-auto ">
        <div
          onClick={() => {
            setIsDropDownActive((prev) => !prev);
          }}
          className=" md:hidden cursor-pointer "
        >
          <GoPlus className=" w-[1.5rem] h-[1.5rem] " />
        </div>
        <div className="md:flex  font-semibold hidden cursor-pointer ">
          <FlyoutLink key={"4"} FlyoutContent={ShopComponent}>
            Shop
          </FlyoutLink>
        </div>
        <Link to="/" className="cursor-pointer pl-2 md:pl-16 ">
          <img
            className="  h-[4.2rem] md:h-[5.3rem] w-[11rem] md:w-[15rem] md:ml-[2rem] lg:ml-[4rem] "
            src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1503443109830-MPY9LBAY5IH18MWEUNEM/Supernatural-Logo.png?format=1500w"
            alt=""
          />
        </Link>

        <div className="font-thin cursor-pointer flex justify-between gap-7 ">
          {isLoggedIn ? (
            <>
              <span className="md:flex font-semibold hidden hover:opacity-[0.5] ">
                Profile
              </span>
              <span className="md:flex font-semibold hidden hover:opacity-[0.5] ">
                Logout
              </span>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `font-semibold md:flex hidden hover:opacity-[0.5] text-lg  ${
                  isActive ? "text-yellow  " : ""
                }`
              }
            >
              LogIn
            </NavLink>
          )}

          <Link
            to="/cart"
            className="flex font-thin hover:opacity-[0.5] md:text-lg "
          >
            Cart ({"1"})
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
