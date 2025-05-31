import { ReactNode } from "react";

interface BlockBorderTopProps {
  pt: string;
  children: ReactNode;
}

const BlockBorderTop = ({ pt, children }: BlockBorderTopProps) => {
  return (
    <div style={{ paddingTop: pt }} className="border-t border-black">
      {children}
    </div>
  );
};

export default BlockBorderTop;
