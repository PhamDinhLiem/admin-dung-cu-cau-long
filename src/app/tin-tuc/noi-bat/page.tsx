import { AuthorOutput, IResponse, TopicOutput } from "@/@custom-types/graphql";
import { Content } from "@/components/content";
import { getAuthorGraphql, getBlogsGraphql, getTopicsGraphql } from "@/graphql";
import { getTextContent } from "@/utils";
import _, { toLower } from "lodash";
import { Suspense } from "react";

export const runtime = "edge";

const baseUrl = process.env.NEXT_GRAPHQL_API_ENDPOINT
  ? `${process.env.NEXT_GRAPHQL_API_ENDPOINT}`
  : "http://localhost:3000";

export async function generateMetadata({ params }: any) {
  const { authors } = (await getAuthorGraphql()) ?? {};
  const data = _.first(authors?.data) as IResponse<AuthorOutput>;

  return {
    title: {
      default: data.attributes.name,
    },
    description: getTextContent(data?.attributes.self_short_description), //description
    metadataBase: new URL(baseUrl),
    openGraph: {
      images: baseUrl + data?.attributes.avatar.data.attributes.url,
      title: data.attributes.name, //og:title
      description: getTextContent(data.attributes.self_short_description), //og:description
    },
  };
}

export default async function HomePage({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { topics } = await getTopicsGraphql().catch((e) => console.log(e));

  const firstTopic = _.first(topics?.data) as IResponse<TopicOutput>;

  const { blogs } = await getBlogsGraphql({
    topic: searchParams?.topic ? toLower(searchParams?.topic as string) : firstTopic?.attributes.slug,
    page: Number(searchParams?.page) ? Number(searchParams?.page) : 1,
  }).catch((e) => console.log(e));

  return (
    <div className="pt-50">
      <Suspense>
        <Content data={blogs} searchParams={searchParams} initTopic={firstTopic?.attributes.slug} />
      </Suspense>
    </div>
  );
}
