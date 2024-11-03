import React from "react";
import { IconSvgProps } from "../../types";

export const ArrowRightSvg: React.FC<IconSvgProps> = ({ disabled }) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.70708 5.29291L2.20708 0.792908L0.792864 2.20712L4.58576 6.00001L0.792864 9.79291L2.20708 11.2071L6.70708 6.70712L7.41418 6.00001L6.70708 5.29291Z"
        fill={disabled ? "#C8CFD5" : "#687684"}
      />
    </svg>
  );
};
