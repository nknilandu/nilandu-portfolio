import {
  GraduationCap,
  House,
  Layers,
  Layers2,
  Moon,
  Rocket,
  SendHorizontal,
  Sun,
  SunMedium,
  TextAlignStart,
} from "lucide-react";
import React from "react";

const Navbar = () => {
  const list = (
    <>
      <li>
        <div className="flex rounded-full justify-start items-center lg:justify-center lg:px-3 lg:py-1">
          <House size={14} className="text-purple-500" />
          <p>Home</p>
        </div>
      </li>
      <li>
        <div className="flex rounded-full justify-start items-center lg:justify-center lg:px-3 lg:py-1">
          <Layers2 size={14} className="text-yellow-500" />
          <p>Tech Stack</p>
        </div>
      </li>
      <li>
        <div className="flex rounded-full justify-start items-center lg:justify-center lg:px-3 lg:py-1">
          <GraduationCap size={16} className="text-cyan-500" />
          <p>Qualification</p>
        </div>
      </li>
      <li>
        <div className="flex rounded-full justify-start items-center lg:justify-center lg:px-3 lg:py-1">
          <Rocket size={14} className="text-pink-500" />
          <p>Projects</p>
        </div>
      </li>
      <li>
        <div className="flex rounded-full justify-start items-center lg:justify-center lg:px-3 lg:py-1">
          <SendHorizontal size={14} className="text-green-500" />
          <p>Contact Me</p>
        </div>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className=" bg-base-content/2 sticky top-0 w-full backdrop-blur-xl border-b border-base-content/10">
            <div className="navbar max-w-7xl mx-auto px-4">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-2" aria-label="open sidebar">
                  <div className="p-2 mr-2 rounded-md hover:bg-base-content/10">
                    <TextAlignStart size={20} />
                  </div>
                </label>
              </div>

              <div className="w-full flex justify-between items-center">
                <div className="font-bold">
                  Nil<span className="text-purple-500">andu</span>
                </div>
                <div className="flex-1 hidden lg:flex lg:justify-center">
                  <ul className="menu menu-horizontal text-center flex justify-center gap-2">
                    {/* Navbar menu content here */}
                    {list}
                  </ul>
                </div>
                <div className="flex justify-end">
                  {/* <button className="btn btn-primary btn-sm rounded-full">Hire Me</button> */}

                  {/* ==================== */}

                  <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input
                      type="checkbox"
                      className="theme-controller rounded-full hover:bg-base-content/10 w-10 h-10 transition-all"
                      value="synthwave"
                    />
                    {/* sun icon */}
                    <div className="swap-off flex items-center justify-center">
                      <Sun size={20} />
                    </div>
                    {/* moon icon */}
                    <div className="swap-on flex items-center justify-center ">
                      <Moon size={18} />
                    </div>
                  </label>

                  {/* ========================== */}
                </div>
              </div>
            </div>
          </div>
          {/* Page content here */}
          Content
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 backdrop-blur-xl min-h-full w-80 p-4 space-y-2 pt-5">
            {/* Sidebar content here */}
            {list}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;