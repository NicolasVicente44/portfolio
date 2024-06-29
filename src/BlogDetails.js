import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Import db from firebase.js
import { useParams } from "react-router-dom"; // Import useParams to get URL parameters

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = await db.collection("posts").doc(id).get();
      if (docRef.exists) {
        setPost(docRef.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchPost();

    return () => {}; // Cleanup function
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-3xl p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="mt-2 rounded-md"
        />
      )}
    </div>
  );
};

export default BlogDetails;
