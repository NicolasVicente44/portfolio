import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { format } from "date-fns";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPost(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    const docRef = doc(db, "posts", id);
    await deleteDoc(docRef);
    navigate("/blog");
  };

  const handleEdit = () => {
    navigate(`/blog/edit/${id}`);
  };

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading Post...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full mt-24 mb-12 max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
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
          <div className="flex justify-end mt-4">
            <button
              onClick={handleEdit}
              className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
