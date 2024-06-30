import React, { useEffect, useState } from "react";
import { db, storage } from "./firebase";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { format } from "date-fns";
import { ref, deleteObject } from "firebase/storage";
import { auth } from "./firebase"; // Import auth from firebase.js

const BlogDetails = ({ theme }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    // Check if user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, [id]);

  // Function to delete a post along with its image from Firestore and Firebase Storage
  const handleDelete = async () => {
    // Check if user is logged in before proceeding with deletion
    if (!isLoggedIn) {
      return; // Exit function if user is not logged in
    }

    // Reference to the Firestore document for the post
    const docRef = doc(db, "posts", id);

    // Fetch the Firestore document
    const docSnap = await getDoc(docRef);

    // Check if the document exists
    if (docSnap.exists()) {
      // Retrieve the image URL from the document data
      const imageUrl = docSnap.data().imageUrl;

      // Delete the image from Firebase Storage if it exists
      if (imageUrl) {
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef);
      }

      // Delete the Firestore document
      await deleteDoc(docRef);

      // Navigate to the blog page
      navigate("/blog");
    } else {
      console.log("No such document!");
    }
  };

  const handleEdit = () => {
    navigate(`/blog/edit/${id}`);
  };

  if (!post) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${
          theme === "dark" ? "bg-black text-white" : "bg-gray-100"
        }`}
      >
        Loading Post...
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center min-h-screen p-4 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full mt-24 mb-12 max-w-3xl shadow-md rounded-lg overflow-hidden">
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-80 object-contain"
          />
        )}
        <div className="p-6">
          <h1
            className="text-4xl font-bold mb-4 text-center"
            style={{ wordWrap: "break-word" }}
          >
            {post.title}
          </h1>
          {post.timestamp && (
            <p className="text-gray-500 text-sm mb-4 text-center">
              {format(new Date(post.timestamp.seconds * 1000), "PPpp")}
            </p>
          )}
          <div
            className={`prose max-w-none ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            <p style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>
          </div>
          {isLoggedIn && (
            <div className="flex justify-end mt-4">
              <button
                onClick={handleEdit}
                className={`mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none ${
                  theme === "dark" ? "hover:text-black" : "hover:text-white"
                }`}
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className={`px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none ${
                  theme === "dark" ? "hover:text-black" : "hover:text-white"
                }`}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
