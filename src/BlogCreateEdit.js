import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage, auth } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const BlogCreateEdit = ({ isNew, initialValues }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState(isNew ? "" : initialValues.title);
  const [content, setContent] = useState(isNew ? "" : initialValues.content);
  const [image, setImage] = useState(null);

  const handleImageUpload = async (file) => {
    if (!auth.currentUser) {
      console.error("User is not authenticated.");
      return null;
    }

    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (image) {
      imageUrl = await handleImageUpload(image);
    }

    if (isNew) {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        imageUrl,
        timestamp: serverTimestamp(),
        author: auth.currentUser.uid,
      });
    } else {
      // Logic for updating existing post
    }

    setTitle("");
    setContent("");
    setImage(null);

    navigate("/blog");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">
          {isNew ? "Create" : "Edit"} Blog Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            rows="5"
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 mx-6 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            {isNew ? "Create" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogCreateEdit;
