import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <footer className="footer sm:footer-horizontal footer-center bg-base-200/20 backdrop-blur-2xl border-t border-base-content/10 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Nilandu Kumar Das | Vapon
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
