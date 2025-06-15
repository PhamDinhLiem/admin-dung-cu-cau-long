import CommonContainer from "@/components/common-container";
import { BlogBusinessScreenContent, BlogBusinessScreenWrapper } from "./styled";

export const BusinessCategory = {
  title: "Business",
  description:
    'The Board of Directors of BlackRock TCP Capital Corp. (the "Company") sets high standards for the Company and for its officers. To fulfill its responsibilities and to discharge its duty, the Board of Directors follows the procedures and standards that are set forth in these guidelines. These guidelines are subject to modification from time to time as the Board of Directors deems appropriate and as required by applicable laws and regulations.',
  subCategories: ["finance", "economy", "technology", "stock", "crypto"],
};

const BlogPersonalBusiness = () => {
  return (
    <BlogBusinessScreenWrapper>
      <BlogBusinessScreenContent>
        <CommonContainer category={BusinessCategory} />
      </BlogBusinessScreenContent>
    </BlogBusinessScreenWrapper>
  );
};
export default BlogPersonalBusiness;
