import React from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall, IoMailOpen } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";

const contacts = [
  {
    title: "Email Address",
    description: "nknilandu@gmail.com",
    icon: IoMailOpen,
    color: "primary",
  },
  {
    title: "Phone Number",
    description: "+8801986964626",
    icon: IoCall,
    color: "secondary",
  },
  {
    title: "Whatsapp Number",
    description: "+8801986964626",
    icon: IoLogoWhatsapp,
    color: "primary",
  },
  {
    title: "Linked In",
    description: "https://www.linkedin.com/in/nilandu",
    link: "https://www.linkedin.com/in/nilandu/",
    icon: FaLinkedinIn,
    color: "secondary",
  },
  {
    title: "GitHub",
    description: "https://github.com/nknilandu",
    icon: FaGithub,
    color: "primary",
    link: "https://github.com/nknilandu",
  },
  {
    title: "Facebook",
    description: "https://www.facebook.com/nknilandu",
    link: "https://www.facebook.com/nknilandu",
    icon: FaFacebook,
    color: "secondary",
  },
];

const colorMap = {
  primary: {
    border: "border-l-primary",
    borderSoft: "border-primary/20",
  },
  secondary: {
    border: "border-l-secondary",
    borderSoft: "border-secondary/20",
  },
};

const handleLink = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const handleCopy = (text) => {
  navigator.clipboard.writeText(text);
  toast.success(`${text} Successfully copied!`);
};

const ContactInfo = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="100" className="mt-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Get In{" "}
        <span className="bg-gradient-to-r from-emerald-500 to-secondary bg-clip-text text-transparent">
          Touch
        </span>
      </h1>
      <p className="text-center text-base-content/50">Contact Information</p>
      {/* ============ */}

      <div>
        {/* cards */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto mt-10">
          {contacts.map((contact, index) => {
            const c = colorMap[contact.color];
            const ActionIcon = contact.link ? TbWorld : LuCopy;

            return (
              <div
                key={index}
                className={`flex flex-col rounded-2xl border border-base-content/10 
      border-l-6 ${c.border} bg-base-content/5 p-5 
      hover:scale-[1.01] transition-all`}
              >
                <div className="flex justify-between">
                  <div
                    className={`bg-${contact.color}/10 w-8 h-8 rounded-lg flex items-center justify-center border border-${contact.color}/20`}
                  >
                    <contact.icon
                      size={15}
                      className={`text-${contact.color}`}
                    />
                  </div>
                  <button
                    onClick={() =>
                      contact.link
                        ? handleLink(contact.link)
                        : handleCopy(contact.description)
                    }
                    className="flex justify-center items-center gap-1 text-xs p-2 rounded-full bg-base-content/10 hover:bg-base-content/20 text-base-content"
                  >
                    <ActionIcon size={12} />
                    <p>{contact?.link ? "Go to" : "Copy"}</p>
                  </button>
                </div>

                <h3 className="text-base font-semibold text-base-content mt-2">
                  {contact.title}
                </h3>

                <p className="mt-1 text-sm text-base-content/70">
                  {contact.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
