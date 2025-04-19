import { IconProps } from "../icons";

const LeftIcon = ({ width = 11, height = 13, fill = "black" }: IconProps) => {
  return (
    <svg width={28} height={8} viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 0L28 4L22 8L0 4L22 0Z" fill="black" />
    </svg>
  );
};

export default LeftIcon;
