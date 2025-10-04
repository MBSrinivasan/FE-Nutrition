import React from "react";

const Button = ({
  height = "30px",
  minWidth = "120px",  // minimum width
  maxWidth = "100%",   // maximum width
  borderRadius = "6px",
  bgColor = "#7A1F3D",
  textColor = "#fff",
  icon,
  marginLeft = "0",
  fontSize = "12px",
  fontWeight = "500",
  children,
  fullWidth = false, // new prop to make button full width
  ...rest
}) => {
  return (
    <button
      className={`flex items-center justify-center px-3 cursor-pointer ${
        fullWidth ? "w-full" : "w-auto"
      }`}
      style={{
        height,
        minWidth: fullWidth ? "100%" : minWidth,
        maxWidth: maxWidth,
        borderRadius,
        backgroundColor: bgColor,
        color: textColor,
        border: "none",
        gap: icon ? "5px" : "0",
        marginLeft: marginLeft,
        fontSize,
        fontWeight,
      }}
      {...rest}
    >
      {icon && icon}
      <div>{children}</div>
    </button>
  );
};

export default Button;
