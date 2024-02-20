import React from "react";

const SocialButton = ({ href, background, content }) => {
  return (
    <a
      href={href}
      className={`inline-flex rounded-full border-transparent py-2.5 tracking-widest px-8 ${background} text-pretty text-xs font-bold text-white/95 my-7   hover:cursor-pointer z-20 hover:scale-105 transition-all  `}
    >
      {content}
    </a>
  );
};

export default SocialButton;
