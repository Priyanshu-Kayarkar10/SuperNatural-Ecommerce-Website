import React, { useState, useEffect } from "react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const sidebar = document.getElementById("sidebar");
    const openSidebarButton = document.getElementById("open-sidebar");

    if (
      sidebar &&
      openSidebarButton &&
      !sidebar.contains(e.target as Node) &&
      !openSidebarButton.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-gray-100 h-screen flex overflow-hidden ">
      {/* Sidebar */}
      <div
        id="sidebar"
        className={`absolute bg-gray-800 text-white w-full h-56 overflow-y-auto transition-transform transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } ease-in-out duration-300`}
      >
        {/* Sidebar Content */}
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Sidebar</h1>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="block hover:text-indigo-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-indigo-400">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-indigo-400">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-indigo-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <div className="bg-white shadow">
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-4 px-2">
              <h1 className="text-xl font-semibold">Animated Drawer</h1>

              <button
                className="text-gray-500 hover:text-gray-600"
                id="open-sidebar"
                onClick={handleSidebarToggle}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Content Body */}
        <div className="flex-1 overflow-auto p-4">
          <h1 className="text-2xl font-semibold">Welcome to our website</h1>
          <p>... Content goes here ...</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
