import CommonContainer from "@/components/common-container";
import { BlogLifeStyleScreenContent, BlogLifeStyleScreenWrapper } from "./styled";

const LifeStyleCategory = {
  title: "LifeStyle",
  description:
    'The Board of Directors of BlackRock TCP Capital Corp. (the "Company") sets high standards for the Company and for its officers. To fulfill its responsibilities and to discharge its duty, the Board of Directors follows the procedures and standards that are set forth in these guidelines. These guidelines are subject to modification from time to time as the Board of Directors deems appropriate and as required by applicable laws and regulations.',
  subCategories: [
    "All Lifestyle",
    "Food",
    "Love",
    "Your Money",
    "Well",
    "Travel",
    "Style",
    "Personal Tech",
    "Real Estate",
    "T Magazine",
  ],
};

const BlogPersonalLifeStyle = () => {
  return (
    <BlogLifeStyleScreenWrapper>
      <BlogLifeStyleScreenContent>
        <CommonContainer
          title={LifeStyleCategory.title}
          subCategorys={LifeStyleCategory.subCategories}
          description={LifeStyleCategory.description}
        />
      </BlogLifeStyleScreenContent>
    </BlogLifeStyleScreenWrapper>
  );
};
export default BlogPersonalLifeStyle;
