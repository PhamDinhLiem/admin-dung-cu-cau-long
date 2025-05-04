import Link from "next/link";
import { ReadMoreButtonWrapper } from "./styled";

interface ReadMoreButtonProps {
  link: String;
}

const ReadMoreButton = ({ link }: ReadMoreButtonProps) => {
  return (
    <Link href={`${link}`}>
      <ReadMoreButtonWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6 text-orange-500 -ml-[8px]"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
        </svg>
        <p className="uppercase font-bold">ReadMore</p>
      </ReadMoreButtonWrapper>
    </Link>
  );
};
export default ReadMoreButton;
