import { IoDocumentText } from "react-icons/io5";
import { BlogResourcesScreenWrapper, BlogResourcesScreenContent } from "./styled";

const fakeResourcesData = [
  {
    title: "BCIC Tax Letter 2024",
    link: "",
  },
  {
    title: "2024 Form 8937 - Report of Organizational Actions Affecting Basis of Securities",
    link: "",
  },
  {
    title: "Tax Status of 2024 Dividends",
    link: "",
  },
  {
    title: "BCIC Tax Letter 2024",
    link: "",
  },
  {
    title: "2024 Form 8937 - Report of Organizational Actions Affecting Basis of Securities",
    link: "",
  },
];

const BlogPersonalResources = () => {
  return (
    <BlogResourcesScreenWrapper>
      <BlogResourcesScreenContent>
        <div className="flex flex-col gap-3 w-full">
          {fakeResourcesData.map((data, index) => (
            <div className="border-b border-gray-4 px-2 py-3 w-full resources-block" key={index}>
              <div className="flex justify-between items-center">
                <p>{data.title}</p>
                <div className="flex px-2 py-2 rounded-full   border-2 border-gray-3 text-orange-400 doc-icon">
                  <IoDocumentText />
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogResourcesScreenContent>
    </BlogResourcesScreenWrapper>
  );
};
export default BlogPersonalResources;
