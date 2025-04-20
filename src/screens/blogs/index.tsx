"use client";

import React from "react";
import { BlogsScreenWrapper } from "./styled";
import Head from "next/head";
import { AnyMxRecord } from "node:dns";
import { getPosts } from "@/services";
import Post from "./components/Post";

interface BlogsScreenProps {}

const BlogsScreen = ({}: BlogsScreenProps) => {
  const posts = [
    {
      cursor: "cursor1",
      node: {
        author: {
          bio: "John is a passionate writer who shares insightful articles on technology.",
          name: "John Doe",
          id: "author1",
          photo: {
            url: "https://thehanoichamomile.com/wp-content/uploads/2024/08/youtube-thumbnail-14.jpg?w=1500",
          },
        },
        createdAt: "2023-04-17T12:00:00Z",
        slug: "how-to-build-a-graphql-api",
        title: "How to Build a GraphQL API",
        excerpt: "In this article, we will explore the steps to build a simple GraphQL API using Node.js.",
        featuredImage: {
          url: "https://thehanoichamomile.com/wp-content/uploads/2024/08/youtube-thumbnail-14.jpg?w=1500",
        },
        categories: [
          {
            name: "Technology",
            slug: "technology",
          },
          {
            name: "Programming",
            slug: "programming",
          },
        ],
      },
    },
    {
      cursor: "cursor2",
      node: {
        author: {
          bio: "Jane is a software engineer who loves to write about web development and user experience.",
          name: "Jane Smith",
          id: "author2",
          photo: {
            url: "https://thehanoichamomile.com/wp-content/uploads/2024/08/youtube-thumbnail-14.jpg?w=1500",
          },
        },
        createdAt: "2023-04-15T10:00:00Z",
        slug: "understanding-react-hooks",
        title: "Understanding React Hooks",
        excerpt:
          "This article will dive deep into React Hooks and their practical applications in modern web development.",
        featuredImage: {
          url: "https://thehanoichamomile.com/wp-content/uploads/2024/08/youtube-thumbnail-14.jpg?w=1500",
        },
        categories: [
          {
            name: "Web Development",
            slug: "web-development",
          },
          {
            name: "React",
            slug: "react",
          },
        ],
      },
    },
  ];

  return (
    <BlogsScreenWrapper>
      <div className="container mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts?.map((post, index) =>
            index == 0 ? (
              <>
                <div className="col-span-1 md:col-span-2">
                  <Post key={post.cursor} post={post.node} />
                </div>
              </>
            ) : (
              <>
                <Post key={post.cursor} post={post.node} />
              </>
            )
          )}
        </div>
        {/* <div>
    {posts.map((post, index) => (
      <PostCard key={post.cursor} post={post.node} />
    ))}
  </div> */}
      </div>
    </BlogsScreenWrapper>
  );
};

export default BlogsScreen;

export async function getStaticProps() {
  //   const posts = (await getPosts()) || [];

  const posts = {};

  //validate
  if (!posts) {
    return {
      notFound: true,
    };

    // Redirect khi data gọi về bị lỗi
    // return {
    //   redirect: {
    //     destination: "/",
    //     permanent: false,
    //   },
    // };
  }

  return {
    //props là cái gì thì component Home sẽ nhận được props đó
    props: { posts },
  };
}
