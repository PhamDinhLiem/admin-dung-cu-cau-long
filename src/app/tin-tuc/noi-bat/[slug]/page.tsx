import { BlogOutput, IResponse } from "@/@custom-types/graphql";
import { getBlogGraphql } from "@/graphql";
import { Detail } from "@/screens/detail";
import { getTextContent } from "@/utils";
import _ from "lodash";
import { Suspense } from "react";

export const runtime = "edge";

const baseUrl = process.env.NEXT_GRAPHQL_API_ENDPOINT
  ? `${process.env.NEXT_GRAPHQL_API_ENDPOINT}`
  : "http://localhost:3000";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { blogs } = await getBlogGraphql({ slug: params.slug });

  const data = _.first(blogs?.data) as IResponse<BlogOutput>;
  const imageUrl = process.env.NEXT_GRAPHQL_API_ENDPOINT + data.attributes.cover_img.data.attributes.url;
  const pageTitle = data?.attributes?.title || "HomeEase - Nền Tảng Kết Nối Việc Làm Toàn Quốc";
  const pageDes =
    data?.attributes?.description ||
    "HomeEase mang đến những cơ hội kết nối giữa các cô giúp việc và những chủ nhà hàng đầu, xây dựng sự tin cậy và chất lượng dịch vụ cao.";

  return {
    title: {
      default: pageTitle,
      template: `%s | HomeEase`,
    },
    description: getTextContent(pageDes), //description
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      url: baseUrl,
      type: "article", // Assuming it's a blog article, set the correct type
      title: pageTitle, // og:title
      description: getTextContent(pageDes), // og:description
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
      description: getTextContent(pageDes),
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

export default async function BlogPage({
  searchParams,
  params,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { blogs } = await getBlogGraphql({
    slug: params?.slug,
  });

  const firstBlog = _.first(blogs?.data) as IResponse<BlogOutput>;

  return (
    <div className="pt-50">
      <Suspense>
        <Detail data={firstBlog} searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
