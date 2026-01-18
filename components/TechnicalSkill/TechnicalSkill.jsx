import React from "react";
import { BiLogoMongodb, BiLogoNetlify } from "react-icons/bi";
import { FaGitAlt, FaHtml5, FaJava, FaPython } from "react-icons/fa";
import { GrMysql, GrReactjs } from "react-icons/gr";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { IoColorPaletteSharp } from "react-icons/io5";
import {
  RiDatabase2Fill,
  RiFirebaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiExpress, SiFirebase } from "react-icons/si";
import { TbBrandNextjs, TbBrandNodejs, TbBrandReact } from "react-icons/tb";

const TechnicalSkill = () => {
  const skills = [
    { icon: <GrReactjs size={22} />, name: "React", color: "#61DAFB" }, // React Blue
    {
      icon: <TbBrandNextjs size={24} />,
      name: "Next.js",
      color: "text-base-content",
    }, // Next.js Black
    { icon: <TbBrandNodejs size={24} />, name: "Node.js", color: "#339933" }, // Node.js Green
    {
      icon: <SiExpress size={22} />,
      name: "Express.js",
      color: "text-base-content",
    }, // Express Black
    { icon: <SiFirebase size={20} />, name: "Firebase", color: "#FFCA28" }, // Firebase Yellow
    { icon: <BiLogoMongodb size={24} />, name: "MongoDB", color: "#47A248" }, // Mongo Green
    {
      icon: <RiTailwindCssFill size={24} />,
      name: "Tailwind CSS",
      color: "#38B2AC",
    }, // Tailwind Teal
    {
      icon: <IoLogoJavascript size={24} />,
      name: "JavaScript",
      color: "#F7DF1E",
    }, // JS Yellow
    { icon: <FaPython size={24} />, name: "Python", color: "#3776AB" }, // Python Blue
    { icon: <FaHtml5 size={24} />, name: "HTML5", color: "#E34F26" }, // HTML Orange
    { icon: <IoLogoCss3 size={24} />, name: "CSS3", color: "#2ea5d6" }, // CSS Blue
    { icon: <FaJava size={24} />, name: "Java", color: "#115fba" }, // Java Blue
    { icon: <GrMysql size={22} />, name: "MySQL", color: "#f7a017" }, // MySQL Blue
    { icon: <FaGitAlt size={22} />, name: "Git", color: "#F05032" }, // Git Orange
    { icon: <BiLogoNetlify size={24} />, name: "Netlify", color: "#00C7B7" }, // Netlify Teal
  ];

  const fontendskills = [
    { name: "React/Node.js", value: 75 },
    { name: "Tailwind CSS", value: 90 },
    { name: "JavaScript", value: 85 },
    { name: "HTML5", value: 95 },
  ];
  const backendskills = [
    { name: "Node.js", value: 70 },
    { name: "Express.js", value: 80 },
    { name: "MongoDB", value: 72 },
    { name: "Firebase", value: 90 },
  ];

  return (
    <div className="my-12">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Technical{" "}
        <span className="bg-gradient-to-r from-emerald-500 to-secondary bg-clip-text text-transparent">
          Skills
        </span>
      </h1>
      <p className="text-center text-base-content/50">My tech stack</p>
      {/* ========== ============= =========== */}
      <div className="flex flex-wrap justify-center items-center">
        {/* ======== */}
        <div className="flex flex-wrap justify-center items-center gap-5 m-10 max-w-xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group w-12 h-12 flex items-center justify-center rounded-full
                  bg-base-content/5 backdrop-blur-lg border border-base-content/10
                  transition-all duration-300
                  hover:border-secondary
                  hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              title={skill.name}
            >
              <div style={{ color: skill.color }}>{skill.icon}</div>
            </div>
          ))}
        </div>
        {/* ======== */}
      </div>

      {/* ========================== */}

      <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4 mt-5">
        <div className="bg-base-content/5 backdrop-blur-lg p-5 border rounded-2xl border-base-content/10 w-full sm:max-w-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center border border-primary/20">
              <IoColorPaletteSharp size={15} className="text-primary" />
            </div>
            <h2 className="text-xl font-bold text-base-content">
              Font<span className="text-primary">End</span>
            </h2>
          </div>
          {/* ========= */}
          {fontendskills.map((skill, idx) => (
            <div key={idx}>
              <p className="-mb-2 text-base-content/70">{skill.name}</p>
              <progress
                className="progress progress-primary w-full"
                value={skill.value}
                max="100"
              ></progress>
            </div>
          ))}
        </div>
        {/* ============================= */}
        <div className="bg-base-content/5 backdrop-blur-lg p-5 border rounded-2xl border-base-content/10 w-full sm:max-w-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-secondary/10 w-8 h-8 rounded-lg flex items-center justify-center border border-secondary/20">
              <RiDatabase2Fill size={15} className="text-secondary" />
            </div>
            <h2 className="text-xl font-bold text-base-content">
              Back<span className="text-secondary">End</span>
            </h2>
          </div>
          {/* ========= */}
          {backendskills.map((skill, idx) => (
            <div key={idx}>
              <p className="-mb-2 text-base-content/70">{skill.name}</p>
              <progress
                className="progress progress-secondary w-full"
                value={skill.value}
                max="100"
              ></progress>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkill;
