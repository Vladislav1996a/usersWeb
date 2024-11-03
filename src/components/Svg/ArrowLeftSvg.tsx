import React from "react";
import { IconSvgProps } from "../../types";

export const ArrowLeftSvg: React.FC<IconSvgProps> = ({ disabled }) => {
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
        d="M1.29289 5.29291L5.79289 0.792908L7.20711 2.20712L3.41421 6.00001L7.20711 9.79291L5.79289 11.2071L1.29289 6.70712L0.585785 6.00001L1.29289 5.29291Z"
        fill={disabled ? "#C8CFD5" : "#687684"}
      />
    </svg>
  );
};
