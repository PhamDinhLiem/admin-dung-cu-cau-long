import moment from "moment";
import React, { useEffect, useState } from "react";

export default function Comments({ slug }: any) {
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {
    setComments([
      {
        name: "John Doe",
        createdAt: "2025-04-19T14:32:00Z", // Date in ISO 8601 format
        comment: "This is a great article. I really enjoyed reading it!",
      },
      {
        name: "Jane Smith",
        createdAt: "2025-04-18T10:45:00Z",
        comment: "I found this post to be very informative, thanks for sharing!",
      },
      {
        name: "Alice Johnson",
        createdAt: "2025-04-17T16:00:00Z",
        comment: "Looking forward to more posts like this one!",
      },
    ]);
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">{comments.length} Comments</h3>
          {comments.map((comment: any) => (
            <div key={comment.createdAt} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="font-semibold">{comment.comment}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
