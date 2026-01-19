import React from "react";
import avater from "../../src/assets/aboutMe.webp";

const AboutMe = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
        <div className="flex-1 flex justify-center max-w-[420px] h-fit">
          <img src={avater} alt="photo" className="object-cover w-full" />
        </div>

        {/* ======= */}
        <div className="flex-1 space-y-3 max-w-xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-secondary bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="font-semibold text-base-content/80">
            MERN Stack Developer | Final-Year CSE Undergraduate |
            Frontend-Focused Full-Stack Learner
          </p>
          <p className="text-base-content/70 text-justify">
            I am a final-year Computer Science and Engineering undergraduate at
            Green University of Bangladesh with a strong focus on MERN stack
            development. I build responsive, user-centric web applications using
            modern technologies such as React, Node.js, Express.js, MongoDB, and
            Firebase. I enjoy turning real-world problems into practical digital
            solutions through clean code and structured architecture. As a
            motivated fresher, I continuously learn through hands-on projects
            and collaboration. I am currently seeking internship or junior
            developer opportunities where I can contribute, grow, and add value
            to real-world products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
