import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Import db from firebase.js
import { useParams } from "react-router-dom"; // Import useParams to get URL parameters
import { doc, getDoc } from "firebase/firestore"; // Import necessary Firestore functions
import { format } from "date-fns"; // Import date-fns for date formatting

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "posts", id); // Get reference to the document
      const docSnap = await getDoc(docRef); // Fetch the document snapshot

      if (docSnap.exists()) {
        setPost(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading Post...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-80 object-contain bg-gray-200"
          />
        )}
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4 text-center">{post.title}</h1>
          {post.timestamp && (
            <p className="text-gray-500 text-sm mb-4 text-center">
              {format(new Date(post.timestamp.seconds * 1000), "PPpp")}
            </p>
          )}
          <div className="prose max-w-none text-gray-700">{post.content}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
