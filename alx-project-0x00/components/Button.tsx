import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`font-semibold text-white transition-colors ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
