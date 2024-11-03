import React from "react";
import { IconSvgProps } from "../../types";

export const ArrowLastRightSvg: React.FC<IconSvgProps> = ({ disabled }) => {
  return (
    <svg
      width="9"
      height="12"
      viewBox="0 0 9 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.00001 6.41418V12H9.00002L9.00001 0H7.00001V5.58576L6.70712 5.29286L2.20712 0.792863L0.792908 2.20708L4.5858 5.99997L0.792908 9.79286L2.20712 11.2071L6.70712 6.70708L7.00001 6.41418Z"
        fill={disabled ? "#C8CFD5" : "#687684"}
      />
    </svg>
  );
};
