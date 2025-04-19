import { AuthorOutput, IResponse } from "@/@custom-types/graphql";
import { getAuthorGraphql } from "@/graphql";
import RegisterHouseKeeperScreen from "@/screens/register-housekeeper";
import { first } from "lodash";
import { Suspense } from "react";

export const runtime = "edge";

const baseUrl = process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}` : "http://localhost:3000";

export async function generateMetadata({ params }: any) {
  const { authors } = (await getAuthorGraphql()) ?? {};
  const data = first(authors?.data) as IResponse<AuthorOutput>;

  const imageUrl = process.env.NEXT_GRAPHQL_API_ENDPOINT + data?.attributes.avatar.data.attributes.url;
  const pageTitle = "Giúp việc cùng kết nối với HomeEase";
  const pageDes =
    "HomeEase mang đến những cơ hội kết nối giữa các cô giúp việc và những chủ nhà hàng đầu, xây dựng sự tin cậy và chất lượng dịch vụ cao.";
  const keywords = ["HomeEase", "Nền tảng kết nối việc làm toàn quốc", "Giúp việc"];

  return {
    title: {
      default: pageTitle,
      template: `%s | HomeEase`,
    },
    description: pageDes, //description
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
    keywords,
    openGraph: {
      url: baseUrl,
      type: "article", // Assuming it's a blog article, set the correct type
      title: pageTitle, // og:title
      description: pageDes, // og:description
      images: [
        {
          url: imageUrl,
          alt: pageTitle, // Alt text for the image
          width: 40, // Specify image width
          height: 40,
        },
      ],
    },

    twitter: {
      card: "summary_large_image", // Ensuring the image is displayed large in tweets
      title: pageTitle,
      description: pageDes,
      images: [imageUrl],
    },
    additionalMetaTags: [
      {
        name: "title",
        content: pageTitle,
      },
      {
        name: "image",
        content: imageUrl, // Equivalent to <meta name="image" content="...">
      },
    ],
  };
}

export default async function ConnectPage() {
  return (
    <div className="pt-50">
      <Suspense>
        <RegisterHouseKeeperScreen />
      </Suspense>
    </div>
  );
}
