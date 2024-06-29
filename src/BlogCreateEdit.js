import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, storage, auth } from "./firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const BlogCreateEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const isNew = !id;

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setInitialValues(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    if (!isNew) {
      fetchPost();
    }
  }, [id, isNew]);

  useEffect(() => {
    if (!isNew && initialValues) {
      setTitle(initialValues.title);
      setContent(initialValues.content);
    }
  }, [initialValues, isNew]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      content,
      timestamp: serverTimestamp(),
    };

    if (image) {
      const imageUrl = await handleImageUpload(image);
      data.imageUrl = imageUrl;
    }

    if (isNew) {
      await addDoc(collection(db, "posts"), data);
    } else {
      await updateDoc(doc(db, "posts", id), data);
    }

    setTitle("");
    setContent("");
    setImage(null);
    navigate("/blog");
  };

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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
