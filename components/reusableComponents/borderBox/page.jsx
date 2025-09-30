import React from "react";

const IconBorder = ({
  icon,
  width = "37px",
  height = "37px",
  backgroundColor = "transparent",
  borderRadius = "10px",
  color="#FAFAFA",
  text
}) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width,
        height,
        backgroundColor,
        borderRadius,
        color
      }}
    >
      {icon?icon :text} 
    </div>
  );
};

export default IconBorder;
