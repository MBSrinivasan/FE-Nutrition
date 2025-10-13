// import React from "react";

// const MainButton = ({
//   height = "30px",
//   minWidth = "120px", // minimum width
//   maxWidth = "100%", // maximum width
//   borderRadius = "6px",
//   bgColor = "#7A1F3D",
//   icon,
//   marginLeft = "0",
//   fontWeight = "500",
//   children,
//   fullWidth = false,
//   ...rest
// }) => {
//   return (
//     <button
//       className={`flex items-center justify-center p-4 cursor-pointer text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-600 text-[#fff] ${
//         fullWidth ? "w-full" : "w-auto"
//       }`}
//       style={{
//         height,
//         minWidth: fullWidth ? "100%" : minWidth,
//         maxWidth: maxWidth,
//         borderRadius,
//         backgroundColor: bgColor,
//         border: "none",
//         gap: icon ? "5px" : "0",
//         marginLeft: marginLeft,
//         fontWeight,
//       }}
//       {...rest}
//     >
//       {icon && icon}
//       <div>{children}</div>
//     </button>
//   );
// };

// export default MainButton;

import React from "react";

const MainButton = ({
  height = "30px",
  minWidth = "120px",
  maxWidth = "100%",
  borderRadius = "6px",
  bgColor = "#7A1F3D",
  icon,
  marginLeft = "0",
  fontWeight = "500",
  children,
  fullWidth = false,
  ...rest
}) => {
  // Detect if icon is a string (like image path or SVG file)
  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === "string") {
      // Handle both SVG and PNG image paths
      return (
        <img
          src={icon}
          alt="button icon"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
        />
      );
    }

    // If it's already a React element (like <CheckCircleOutlined />)
    return <span className="flex items-center text-[16px]">{icon}</span>;
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 p-4 cursor-pointer text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-white ${
        fullWidth ? "w-full" : "w-auto"
      }`}
      style={{
        height,
        minWidth: fullWidth ? "100%" : minWidth,
        maxWidth,
        borderRadius,
        backgroundColor: bgColor,
        border: "none",
        marginLeft,
        fontWeight,
      }}
      {...rest}
    >
    <span style={{marginTop:"2px"}}>  {renderIcon()}</span>
      <span>{children}</span>
    </button>
  );
};

export default MainButton;

