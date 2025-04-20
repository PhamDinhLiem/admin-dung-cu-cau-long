import React, { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import { getRecentPosts, getSimilarPosts } from "@/services";

export default function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
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
            <Link href={`/post/${post.slug}`}>{post.slug}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
