import React from "react";

const Button = ({ content, href, background }) => {
  return (
    <a
      href={href}
      className={`border border-tranparent rounded-full px-5 py-3 ${background} text-white/100 text-xs font-semibold hover:bg-blue-800 hover:cursor-pointer text-pretty `}
    >
      {content}
    </a>
  );
};

export default Button;
