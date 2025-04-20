"use client";

import React from "react";
import { BlogsDetailWrapper } from "./styled";
import PostDetail from "../components/PostDetail/PostDetail";
import Author from "../components/Author";
import CommentsForm from "../components/CommentsForm";
import Comments from "../components/Comments";

interface BlogsDetailProps {}

const BlogsDetail = ({}: BlogsDetailProps) => {
  const post = {
    title: "A Day in Hanoi",
    slug: "a-day-in-hanoi",
    featuredImage: {
      url: "https://thehanoichamomile.com/wp-content/uploads/2024/08/youtube-thumbnail-14.jpg?w=1500",
      height: 500,
      width: 800,
    },
    content: {
      raw: {
        children: [
          {
            type: "heading-three",
            children: [
              {
                text: "Introduction to Hanoi",
              },
            ],
          },
          {
            type: "paragraph",
            children: [
              {
                text: "Hanoi is a vibrant city full of history and culture. It's a place where old traditions meet modern living.",
              },
            ],
          },
          {
            type: "image",
            title: "A Beautiful Sunset in Hanoi",
            src: "https://thehanoichamomile.com/wp-content/uploads/2023/06/andrew-neel-cckf4tshauw-unsplash.jpg?w=1500",
            height: 300,
            width: 600,
          },
          {
            type: "heading-four",
            children: [
              {
                text: "Exploring the Streets",
              },
            ],
          },
          {
            type: "paragraph",
            children: [
              {
                text: "The streets of Hanoi are busy, filled with motorbikes, street food vendors, and busy shoppers. It's a city that never sleeps.",
              },
            ],
          },
        ],
      },
    },
    author: {
      name: "The Hanoi Chamomile",
      bio: "A passionate writer and observer of life in Hanoi, sharing stories of culture, tradition, and daily life.",
      photo: {
        url: "https://example.com/author-photo.jpg", // URL to the author's photo
      },
      title: "Author of the Month",
    },
  };

  return (
    <BlogsDetailWrapper>
      <PostDetail post={post} />
      <Author author={post.author} />
      {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
      <CommentsForm slug={post.slug} />
      <Comments slug={post.slug} />
    </BlogsDetailWrapper>
  );
};

export default BlogsDetail;
