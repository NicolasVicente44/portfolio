import React, { useState, useEffect, useRef } from "react";
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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const BlogCreateEdit = ({ theme }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const isNew = !id;
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Check authentication state
    if (!auth.currentUser) {
      navigate("/login"); // Redirect to login page if not authenticated
    }
    const fetchPost = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setInitialValues(data);
        if (data.imageUrl) {
          const urlParts = data.imageUrl.split("/");
          setImageName(urlParts[urlParts.length - 1]);
        }
      } else {
        console.log("No such document!");
      }
    };

    if (!isNew) {
      fetchPost();
    }
  }, [id, isNew, navigate]);

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

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setImage(droppedFile);
    setImageName(droppedFile.name);
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`w-full mt-24 max-w-3xl p-4 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } shadow-lg rounded-lg`}
      >
        <h1
          className={`text-3xl font-bold mb-4 text-center ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {isNew ? "Create" : "Edit"} Blog Post
        </h1>
        <form
          onSubmit={handleSubmit}
          className={`space-y-4 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          style={{
            backgroundColor: theme === "dark" ? "black" : "white",
            color: theme === "dark" ? "white" : "black",
          }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            style={{
              backgroundColor: theme === "dark" ? "black" : "white",
              color: theme === "dark" ? "white" : "black",
            }}
          />
          <ReactQuill
            theme="snow" // Set the theme here ('snow' or 'bubble')
            value={content}
            onChange={setContent}
            placeholder="Content"
            className="quill-editor" // Optional CSS class for Quill container
          />
          <div
            className="w-full border border-dashed border-gray-300 rounded-md p-8 text-center cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()} // Trigger file input click
            style={{
              backgroundColor: theme === "dark" ? "black" : "white",
              color: theme === "dark" ? "white" : "black",
            }}
          >
            {image ? (
              <p className="text-gray-600">{imageName}</p>
            ) : (
              <p>Drag & Drop an image file here, or click to select</p>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            ref={fileInputRef} // Add this ref to your file input
          />
          <div className="text-center">
            <button
              type="submit"
              className={`bg-blue-500 mx-6 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none ${
                theme === "dark" ? "hover:text-black" : "hover:text-white"
              }`}
            >
              {isNew ? "Create" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogCreateEdit;
  