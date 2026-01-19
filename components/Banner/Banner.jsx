import { Facebook, Github, Linkedin, Send } from "lucide-react";
import avater from "../../src/assets/avaterImg.webp";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import toast from "react-hot-toast";

const Banner = () => {
  const handleDownload = () => {
    toast("Coming Soon");
  };

  return (
    <div data-aos="fade-in" data-aos-delay="180" className="relative">
      {/* Background Blob */}
      <div
        className="hidden md:block md:absolute w-[300px] h-[300px]  bg-gradient-to-br from-emerald-500/30 to-purple-500/30 blur-3xl
                      rounded-full -z-10 top-35 left-1/2 -translate-x-1/2"
      ></div>

      {/* Main content */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        {/* Left Column: Socials and Text */}
        <div className="h-full lg:mt-10 lg:mr-5 flex flex-row lg:flex-col gap-6 mb-10 lg:mb-0 lg:mx-0 mx-auto lg:pl-20 lg:pr-10">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nilandu"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 flex items-center justify-center rounded-full
                  bg-base-content/5 backdrop-blur-lg border border-base-content/10
                  transition-all duration-300
                  hover:border-blue-600/60
                  hover:shadow-[0_0_15px_rgba(10,102,194,0.6)]"
          >
            <FaLinkedinIn
              size={18}
              className="text-base-content transition-colors duration-300 group-hover:text-blue-600"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/nknilandu"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 flex items-center justify-center rounded-full
                  bg-base-content/5 backdrop-blur-lg border border-base-content/10
                  transition-all duration-300
                  hover:border-secondary/40
                  hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            <FaGithub
              size={18}
              className="text-base-content transition-colors duration-300 group-hover:text-secondary"
            />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/nknilandu"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 flex items-center justify-center rounded-full
                  bg-base-content/5 backdrop-blur-lg border border-base-content/10
                  transition-all duration-300
                  hover:border-blue-600/60
                  hover:shadow-[0_0_15px_rgba(24,119,242,0.6)]"
          >
            <FaFacebookF
              size={18}
              className="text-base-content transition-colors duration-300 group-hover:text-blue-600"
            />
          </a>
        </div>

        {/* Right Column: Text + Profile */}
        <div className="w-full flex flex-col md:flex-row items-center pt-10 pb-5 md:pb-5 md:pl-5">
          {/* Text Section */}
          <div className="w-full flex flex-col gap-6 justify-center items-center text-center md:items-start md:text-start mb-10 md:mb-0 md:mr-10">
            {/* Badge */}
            <div className="badge badge-xs bg-primary/5 backdrop-blur-md text-primary border border-primary/50 rounded-full px-5 py-3.5 font-bold">
              <div className="inline-grid *:[grid-area:1/1]">
                <div className="status status-primary animate-ping"></div>
                <div className="status status-primary"></div>
              </div>
              Open for New Projects
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-base-content">
              <span className="font-medium">Hey! I'm </span>
              <span className="text-secondary text-4xl md:text-5xl lg:text-6xl">
                Nilandu
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-base-content bg-clip-text text-transparent">
                MERN STACK Developer
              </span>
            </h1>

            {/* Description */}
            <p className="text-md text-base-content/70 w-full md:max-w-lg leading-relaxed">
              I build scalable, high-performance web applications using MongoDB,
              Express, React, and Node.js — always learning and evolving with
              new technologies.
            </p>

            {/* Button */}
            <div className="flex flex-col md:flex-row gap-3 md:mb-5">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nknilandu@gmail.com&su=Hello+Nilandu+-+Quick+Introduction&body=Hello+Nilandu,%0A%0AI+hope+this+message+finds+you+well.%0A%0AI+came+across+your+profile+and+wanted+to+reach+out+to+introduce+myself.%0AI+would+be+happy+to+connect+and+learn+more+about+your+work.%0A%0ALooking+forward+to+hearing+from+you.%0A%0ABest+regards,%0A[Your+Name]"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-full font-bold text-sm sm:text-sm text-base-content border border-primary/30 backdrop-blur-lg shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-300 bg-primary/5 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:-translate-y-0.5"
              >
                Say Hi
                <Send size={15} />
              </a>
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-full font-bold text-sm sm:text-sm text-base-content border border-secondary/30 backdrop-blur-lg shadow-[0_0_10px_rgba(168,85,247,0.3)] transition-all duration-300 bg-secondary/5 hover:bg-secondary/10 hover:text-secondary hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:-translate-y-0.5"
              >
                Download CV
                <LuDownload size={15} />
              </button>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="w-full flex justify-center px-4 sm:px-6 md:px-20 my-10">
            <div className="relative flex justify-center w-full max-w-[70vw] sm:max-w-[320px]">
              {/* Rotating Glow */}
              <div className="absolute inset-0 z-10 border-2 border-gray-400/50 rounded-[30%_60%_50%_50%/30%_30%_40%_30%] animate-[spin_60s_linear_infinite]" />

              {/* Profile Image */}
              <div className="relative z-20 w-full aspect-square rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden border border-primary bg-base-content/10 shadow-[0_0_20px_rgba(16,185,129,0.8)]">
                <img
                  src={avater}
                  alt="profile"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                />
              </div>

              {/* Stats */}
              {[
                {
                  value: "1+",
                  label: "Years Exp.",
                  pos: { top: "0%", right: "2%" },
                },
                {
                  value: "11+",
                  label: "Project list",
                  pos: { bottom: "20%", left: "-10%" },
                },
                {
                  value: "12+",
                  label: "Tech Stack",
                  pos: { bottom: "5%", right: "10%" },
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    top: stat.pos.top,
                    right: stat.pos.right,
                    bottom: stat.pos.bottom,
                    left: stat.pos.left,
                  }}
                  className="absolute p-2 rounded-2xl z-20 flex flex-col items-center bg-base-content/5 backdrop-blur-lg border border-base-content/5"
                >
                  <span className="text-sm md:text-lg lg:text-xl font-extrabold text-base-content/80">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm lg:text-sm font-semibold text-secondary">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
