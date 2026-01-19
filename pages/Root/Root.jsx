import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { Toaster } from "react-hot-toast";

const Root = () => {
  // +++++++++++ control theme +++++++++++++++++
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const html = document.querySelector("html");
    html.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <div className="bg-base-200 m-0 p-0 min-h-screen">
      {/* Fixed background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-visible bg-background-dark max-w-7xl mx-auto">
        <div className="top-[-50px] left-[-50px] absolute w-[400px] h-[400px] blur-[80px] bg-gradient-to-br from-emerald-500/20 to-purple-500/20  rounded-full -z-10" />

        <div
          className="absolute w-[350px] h-[350px] bg-gradient-to-br blur-[80px] from-purple-500/20 to-pink-500/20 rounded-full -z-10
          bottom-[10%] right-[-80px]"
        />

        <div className="absolute w-[300px] h-[300px] bg-gradient-to-br blur-[80px] from-blue-800/20 to-blue-500/20  rounded-full -z-10 bottom-[-10%] left-[20%]" />
      </div>

      {/* Scrollable content */}
      <main className="relative z-10">
        <Outlet></Outlet>
        <Footer></Footer>
        <Toaster />
        <ScrollToTop></ScrollToTop>
      </main>
    </div>
  );
};

export default Root;
