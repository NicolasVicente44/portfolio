import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { auth } from "./firebase"; // Import auth from firebase.js

const Blog = ({ theme }) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPosts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    fetchPosts();

    // Check if user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleNewPostClick = () => {
    if (isLoggedIn) {
      navigate("/blog/new"); // Navigate to new post creation page if logged in
    } else {
      navigate("/login"); // Navigate to login page if not logged in
    }
  };

  const getPreview = (content) => {
    if (!content) return "";
    return content.length > 100 ? content.slice(0, 100) + "..." : content;
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`w-full max-w-3xl p-4 mt-24 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } shadow-lg rounded-lg`}
      >
        <h1 className="text-3xl font-bold mb-4 text-center">Nick's Blog</h1>
        {/* New Post Button */}
        <div className="mb-4 text-center">
          <a
            href="/blog/new"
            className={`group mx-auto my-auto text-center justify-center border-2 px-4 sm:px-6 py-2 sm:py-3 lg:w-1/2 sm:w-1/4 flex items-center cursor-pointer transition duration-300 ${
              theme === "dark"
                ? "text-white hover:bg-white hover:text-black border-white"
                : "text-black hover:bg-black hover:text-white border-black"
            }`}
          >
            New Post
            <span className="group-hover:translate-x-1 sm:translate-x-3 duration-300"></span>
          </a>
        </div>
        <ul className="space-y-4">
          {posts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <li
                className={`border border-gray-300 p-4 rounded-md ${
                  theme === "dark"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } shadow-sm mb-4`}
              >
                <h2
                  className="text-xl mb-2 font-bold text-center"
                  style={{ wordWrap: "break-word" }}
                >
                  {post.title}
                </h2>
                {post.imageUrl && (
                  <div className="w-full mb-4 h-64 overflow-hidden rounded-md">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div
                  className="text-gray-700 mt-2"
                  style={{ overflowWrap: "break-word" }}
                  dangerouslySetInnerHTML={{ __html: getPreview(post.content) }}
                />
                {post.timestamp && (
                  <p className="text-gray-500 text-sm mt-2 text-center">
                    {format(new Date(post.timestamp.seconds * 1000), "PPpp")}
                  </p>
                )}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
