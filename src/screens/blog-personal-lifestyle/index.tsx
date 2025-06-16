import CommonContainer from "@/components/common-container";
import { BlogLifeStyleScreenContent, BlogLifeStyleScreenWrapper } from "./styled";

export const LifeStyleCategory = {
  title: "LifeStyle",
  description:
    'The Board of Directors of Miracle TCP Capital Corp. (the "Company") sets high standards for the Company and for its officers. To fulfill its responsibilities and to discharge its duty, the Board of Directors follows the procedures and standards that are set forth in these guidelines. These guidelines are subject to modification from time to time as the Board of Directors deems appropriate and as required by applicable laws and regulations.',
  subCategories: [
    "all lifestyle",
    "food",
    "love",
    "your money",
    "well",
    "travel",
    "style",
    "personal tech",
    "real estate",
    "t magazine",
  ],
};

const BlogPersonalLifeStyle = () => {
  return (
    <BlogLifeStyleScreenWrapper>
      <BlogLifeStyleScreenContent>
        <CommonContainer category={LifeStyleCategory} />
      </BlogLifeStyleScreenContent>
    </BlogLifeStyleScreenWrapper>
  );
};
export default BlogPersonalLifeStyle;
