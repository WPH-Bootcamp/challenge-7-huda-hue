import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-amber-500 text-white pr-10 pl-10 pt-1 pb-1 rounded-3xl">
      {children}
    </button>
  );
};

export default Button;
