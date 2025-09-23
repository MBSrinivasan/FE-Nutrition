import React from "react";

const Button = ({
  height = "30px",
  width = "120px",
  borderRadius = "6px",
  bgColor = "#7A1F3D",
  textColor = "#fff",
  icon,
  marginLeft = "0",
  children,
  ...rest
}) => {
  return (
    <button
    className={`flex items-center justify-center  px-3 cursor-pointer`}
      style={{
        height,
        width,
        borderRadius,
        backgroundColor: bgColor,
        color: textColor,
        border: "none",
        gap: icon ? "8px" : "0",
        marginLeft: marginLeft
      }}
      {...rest}
    >
      {icon && icon}
      <div >{children}</div>
    </button>
  );
};

export default Button;
