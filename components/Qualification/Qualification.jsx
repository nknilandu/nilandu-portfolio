import React from "react";

const experiences = [
  {
    role: "CSE Undergraduate",
    company: "Green University of Bangladesh",
    period: "2022 — Present",
    color: "primary",
    description:
      "Pursuing BSc in Computer Science & Engineering, focusing on web development, algorithms, and software engineering projects.",
  },
  {
    role: "Personal Web Developer",
    company: "Self Projects",
    period: "2024 — Present",
    color: "secondary",
    description:
      "Built multiple personal projects and portfolio websites using React, Next.js, Tailwind CSS, and Node.js to practice full-stack development.",
  },
  {
    role: "Problem Solving & Optimization",
    company: "Skills & Strengths",
    period: "",
    color: "primary",
    description:
      "Skilled in debugging, performance optimization, and implementing scalable solutions to complex technical challenges.",
  },
  {
    role: "Continuous Learning & Adaptability",
    company: "Skills & Strengths",
    period: "",
    color: "secondary",
    description:
      "Committed to staying up-to-date with emerging technologies, frameworks, and best practices in web development.",
  },
];

const Card = ({ exp }) => (
  <div>
    <h3 className="text-lg md:text-2xl font-bold text-base-content">
      {exp.role}
    </h3>
    <p className={`text-${exp.color} font-semibold uppercase text-sm `}>
      {exp.company}
    </p>
    <p className="text-base-content/70 text-sm">{exp.period}</p>
    <p className="text-base-content/50 mt-2 leading-relaxed">
      {exp.description}
    </p>
  </div>
);

const Qualification = () => {
  // =====================

  return (
    <div data-aos="fade-up" data-aos-delay="100" className="mt-25">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        My{" "}
        <span className="bg-gradient-to-r from-emerald-500 to-secondary bg-clip-text text-transparent">
          Qualification
        </span>
      </h1>
      <p className="text-center text-base-content/50">Personal Journey</p>
      {/* ================ */}

      {/* Timeline */}
      <div className="relative">
        {/* Desktop center line */}
        <div className="hidden md:block absolute left-1/2 top-1 -translate-x-1/2 w-[2px] h-full bg-base-content/20" />

        {/* Mobile left line */}
        <div className="md:hidden absolute left-4 top-1 w-[2px] h-full -translate-x-1/2 bg-base-content/10" />

        {experiences.map((exp, index) => {
          const isRight = index % 2 === 1;

          return (
            <div
              key={index}
              className="relative my-8 flex md:grid md:grid-cols-9 items-start"
            >
              {/* LEFT CARD (desktop only) */}
              <div
                className={`hidden md:block md:col-span-4 ${
                  !isRight && "text-right"
                }`}
              >
                {!isRight && <Card exp={exp} align="right" />}
              </div>

              {/* DOT */}
              <div className="relative md:col-span-1 flex justify-start md:justify-center">
                <span className="absolute md:left-1/2 left-4 -translate-x-1/2 w-3 h-3 rounded-full bg-base-content border-3 border-[#c2c1c1] z-10 top-1" />
              </div>

              {/* RIGHT CARD / MOBILE CARD */}
              <div
                className={`md:col-span-4 pl-12 sm:pl-12 md:pl-0 ${
                  isRight || "md:hidden"
                }`}
              >
                <Card exp={exp} align="left" />
              </div>
            </div>
          );
        })}
      </div>

      {/* ================ */}
    </div>
  );
};

export default Qualification;
