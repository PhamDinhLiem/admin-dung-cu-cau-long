import BlockBorderTop from "../block-border-top";
import { OtherNewsSectionWrapper } from "./styled";

const OtherNewsSection = () => {
  return (
    <OtherNewsSectionWrapper>
      <div className="w-3/4">
        <BlockBorderTop pt="14px">
          <p className="font-semibold mb-8">More in Technology</p>
          <div className="grid grid-cols-3 justify-between"></div>
        </BlockBorderTop>
      </div>
      <div className="w-1/4">
        <BlockBorderTop pt="14px">
          <p className="font-semibold mb-8">Trending in Miralce</p>
        </BlockBorderTop>
      </div>
    </OtherNewsSectionWrapper>
  );
};

export default OtherNewsSection;
