import React from "react";

const IconBorder = ({
  icon,
  width = "50px",
  height = "50px",
  backgroundColor = "green",
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
