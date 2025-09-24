import React from "react";

const IconBorder = ({
  icon,
  width = "37px",
  height = "37px",
  backgroundColor = "transparent",
  borderRadius = "10px",
}) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width,
        height,
        backgroundColor,
        borderRadius,
      }}
    >
      {icon}
    </div>
  );
};

export default IconBorder;
