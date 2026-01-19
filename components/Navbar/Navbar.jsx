import {
  GraduationCap,
  House,
  Layers2,
  Moon,
  Rocket,
  SendHorizontal,
  Sun,
  TextAlignStart,
} from "lucide-react";
import Banner from "../Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import TechnicalSkill from "../TechnicalSkill/TechnicalSkill";
import Qualification from "../Qualification/Qualification";
import Projects from "../Projects/Projects";
import ContactInfo from "../ContactInfo/ContactInfo";
import { Element, Link as ScrollLink } from "react-scroll";
import logo from "../../src/assets/logo.png";

const Navbar = () => {
  const list = (
    <>
      <li>
        <ScrollLink
          to="banner"
          smooth
          spy
          offset={-80}
          duration={500}
          activeClass="bg-purple-500/15 text-purple-500"
          className="h-fit w-full rounded-full px-4 py-2 lg:px-3 lg:py-1"
        >
          <div className="flex justify-center items-center gap-1.5">
            <House size={14} className="text-purple-500" />
            <p>Home</p>
          </div>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="tech"
          smooth
          spy
          offset={-110}
          duration={500}
          activeClass="bg-yellow-500/15 text-yellow-500"
          className="h-fit w-full rounded-full px-4 py-2 lg:px-3 lg:py-1"
        >
          <div className="flex justify-center items-center gap-1.5">
            <Layers2 size={14} className="text-yellow-500" />
            <p>Tech Stack</p>
          </div>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="journey"
          smooth
          spy
          offset={-110}
          duration={500}
          activeClass="bg-cyan-500/15 text-cyan-500"
          className="h-fit w-full rounded-full px-4 py-2 lg:px-3 lg:py-1"
        >
          <div className="flex justify-center items-center gap-1.5">
            <GraduationCap size={16} className="text-cyan-500" />
            <p>Qualification</p>
          </div>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="project"
          smooth
          spy
          offset={-110}
          duration={500}
          activeClass="bg-pink-500/15 text-pink-500"
          className="h-fit w-full rounded-full px-4 py-2 lg:px-3 lg:py-1"
        >
          <div className="flex justify-center items-center gap-1.5">
            <Rocket size={14} className="text-pink-500" />
            <p>Projects</p>
          </div>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="contact"
          smooth
          spy
          offset={-100}
          duration={500}
          activeClass="bg-green-500/15 text-green-500"
          className="h-fit w-full rounded-full px-4 py-2 lg:px-3 lg:py-1"
        >
          <div className="flex justify-center items-center gap-1.5">
            <SendHorizontal size={14} className="text-green-500" />
            <p>Contact Me</p>
          </div>
        </ScrollLink>
      </li>
    </>
  );

  const handleTheme = (e) => {
    const isChecked = e.target.checked;
    // console.log(isChecked)
    const html = document.querySelector("html");
    const theme = isChecked ? "dark" : "light";

    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className=" bg-base-content/2 sticky z-100 top-0 w-full backdrop-blur-xl border-b border-base-content/10">
            <div className="navbar max-w-7xl mx-auto px-4">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-2" aria-label="open sidebar">
                  <div className="p-2 mr-2 rounded-md hover:bg-base-content/10">
                    <TextAlignStart size={20} />
                  </div>
                </label>
              </div>

              <div className="w-full flex justify-between items-center">
                <div className="font-bold flex justify-center items-center gap-1">
                  <img src={logo} alt="logo" className="w-5 h-5 mb-1" />
                  <p>
                    {" "}
                    Nil<span className="text-purple-500">andu</span>
                  </p>
                </div>
                <div className="flex-1 hidden lg:flex lg:justify-center">
                  <ul className="menu menu-horizontal text-center flex justify-center gap-2">
                    {/* Navbar menu content here */}
                    {list}
                  </ul>
                </div>
                <div className="flex justify-end">
                  {/* ==================== */}

                  <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input
                      type="checkbox"
                      onClick={handleTheme}
                      defaultChecked={localStorage.getItem("theme") === "dark"}
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
          <div className="max-w-7xl mx-auto px-4">
            <Element name="banner">
              <Banner></Banner>
            </Element>

            <AboutMe></AboutMe>

            <Element name="tech">
              <TechnicalSkill></TechnicalSkill>
            </Element>

            <Element name="journey">
              <Qualification></Qualification>
            </Element>

            <Element name="project">
              <Projects></Projects>
            </Element>

            <Element name="contact">
              <ContactInfo></ContactInfo>
            </Element>
          </div>
          {/* ========== */}
        </div>
        <div className="drawer-side z-200">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200  backdrop-blur-xl min-h-full w-80 p-4 space-y-2 pt-5">
            {/* Sidebar content here */}
            {list}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
