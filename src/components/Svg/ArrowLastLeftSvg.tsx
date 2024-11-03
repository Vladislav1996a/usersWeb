import { IconSvgProps } from "../../types";

export const ArrowLastLeftSvg: React.FC<IconSvgProps> = ({ disabled }) => {
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
        d="M0 0V12H2L2 6.41421L2.29289 6.70711L6.79289 11.2071L8.20711 9.79289L4.41421 6L8.20711 2.20711L6.79289 0.792893L2.29289 5.29289L2 5.58579L2 0H0Z"
        fill={disabled ? "#C8CFD5" : "#687684"}
      />
    </svg>
  );
};
