// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-primary ">
      <div className="container">
        <span className="text-white">
          © {new Date().getFullYear()} Restaurant Tip Calculator
        </span>
      </div>
    </footer>
  );
};

export default Footer;
