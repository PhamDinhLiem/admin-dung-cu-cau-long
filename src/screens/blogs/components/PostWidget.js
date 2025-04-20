import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      setRelatedPosts([
        {
          title: "Exploring the Future of Artificial Intelligence",
          slug: "exploring-the-future-of-artificial-intelligence",
          createdAt: "2025-04-19T14:32:00Z",
          featuredImage: {
            url: "https://thehanoichamomile.com/wp-content/uploads/2023/01/dscf6621.mp4_.19_41_49_27.still002.jpg?w=1500",
          },
        },
        {
          title: "The Impact of Technology on Modern Society",
          slug: "the-impact-of-technology-on-modern-society",
          createdAt: "2025-04-18T10:45:00Z",
          featuredImage: {
            url: "https://thehanoichamomile.com/wp-content/uploads/2023/01/dscf6621.mp4_.19_41_49_27.still002.jpg?w=1500",
          },
        },
        {
          title: "How Blockchain is Revolutionizing Finance1",
          slug: "how-blockchain-is-revolutionizing-finance",
          createdAt: "2025-04-17T16:00:00Z",
          featuredImage: {
            url: "https://thehanoichamomile.com/wp-content/uploads/2023/01/dscf6621.mp4_.19_41_49_27.still002.jpg?w=1500",
          },
        },
      ]);
    } else {
      setRelatedPosts([
        {
          title: "Exploring the Future of Artificial Intelligence",
          slug: "exploring-the-future-of-artificial-intelligence",
          createdAt: "2025-04-19T14:32:00Z",
          featuredImage: {
            url: "https://thehanoichamomile.com/wp-content/uploads/2023/01/dscf6621.mp4_.19_41_49_27.still002.jpg?w=1500",
          },
        },
        {
          title: "The Impact of Technology on Modern Society",
          slug: "the-impact-of-technology-on-modern-society",
          createdAt: "2025-04-18T10:45:00Z",
          featuredImage: {
            url: "https://thehanoichamomile.com/wp-content/uploads/2023/01/dscf6621.mp4_.19_41_49_27.still002.jpg?w=1500",
          },
        },
        {
          title: "How Blockchain is Revolutionizing Finance",
          slug: "how-blockchain-is-revolutionizing-finance",
          createdAt: "2025-04-17T16:00:00Z",
          featuredImage: {
            url: "https://thehanoichamomile.com/wp-content/uploads/2023/01/dscf6621.mp4_.19_41_49_27.still002.jpg?w=1500",
          },
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <div className="bg-white mb-2">
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none rounded-full ">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              width={100}
              height={100}
              className="align-middle bg-center bg-cover"
            />
          </div>
          <div className="ml-3">
            <p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
            <Link href={`/blogs/${post.slug}`}>{post.slug}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
