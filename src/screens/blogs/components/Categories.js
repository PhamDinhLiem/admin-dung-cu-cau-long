import Link from "next/link";
import { useEffect, useState } from "react";

export default function Categories({ slug }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([
      {
        name: "Technology",
        slug: "technology",
      },
      {
        name: "Programming",
        slug: "programming",
      },
      {
        name: "Web Development",
        slug: "web-development",
      },
      {
        name: "Design",
        slug: "design",
      },
      {
        name: "Marketing",
        slug: "marketing",
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" mb-8">
      {categories.map((category) => (
        <div key={category.name} className="flex items-center w-full mb-4 border-b">
          <div className="ml-3 ">
            <Link href={`/blogs/category/${category.slug}`}>{category.slug}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
