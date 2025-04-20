"use client";

import Post from "../blogs/components/Post";
import { CategoryScreenWrapper } from "./styled";

const CategoryScreen = () => {
  const data = {
    name: "Technology",
    posts: [
      {
        slug: "post-1",
        title: "Understanding Artificial",
        excerpt: "A deep dive into the world of AI and its impact on various industries.",
        featuredImage: {
          url: "https://thehanoichamomile.com/wp-content/uploads/2023/03/dscf7349-text.jpg?w=1500",
          height: 300,
          width: 500,
        },
        content: {
          raw: {
            children: [
              {
                type: "heading-three",
                children: [
                  {
                    text: "Introduction to AI",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    text: "Artificial Intelligence (AI) is revolutionizing industries by automating tasks and improving efficiency. In this post, we explore the key concepts of AI and its applications in different fields.",
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
      },
      {
        slug: "post-2",
        title: "The Rise of Machine Learning",
        excerpt: "Exploring the growing field of machine learning and its real-world applications.",
        featuredImage: {
          url: "https://thehanoichamomile.com/wp-content/uploads/2023/03/duy-pham-cecb0_8hx-o-unsplash.jpg?w=1500",
          height: 300,
          width: 500,
        },
        content: {
          raw: {
            children: [
              {
                type: "heading-three",
                children: [
                  {
                    text: "What is Machine Learning?",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    text: "Machine learning is a subset of AI that focuses on building algorithms that allow systems to learn from data. It is transforming industries from healthcare to finance.",
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
      },
    ],
  };

  return (
    <CategoryScreenWrapper>
      <div className="container mx-auto mb-8">
        <h1 className="text-center mb-8 mt-8">Category: {data.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.posts.map((post, index) => (
            <Post key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </CategoryScreenWrapper>
  );
};

export default CategoryScreen;
