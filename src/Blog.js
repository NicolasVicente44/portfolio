import React, { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Login from "./Login";
import { format } from "date-fns";

const Blog = ({ theme }) => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPosts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    fetchPosts();

    return () => unsubscribe();
  }, []);

  const getPreview = (content) => {
    if (!content) return "";
    const words = content.split(" ");
    return words.length > 25 ? words.slice(0, 25).join(" ") + "..." : content;
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-gray-100 text-black"
      }`}
    >
      {isLoggedIn ? (
        <div
          className={`w-full max-w-3xl p-4 mt-24 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          } shadow-lg rounded-lg`}
        >
          <h1 className="text-3xl font-bold mb-4 text-center">Nick's Blog</h1>
          <div className="flex justify-center mb-4">
            <Link
              to="/blog/new"
              className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block"
            >
              New Post
            </Link>
          </div>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post.id}
                className={`border border-gray-300 p-4 rounded-md ${
                  theme === "dark"
                    ? "bg-gray-700 text-gray-300"
                    : "bg-white text-gray-700"
                } shadow-sm`}
              >
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-xl font-bold mb-2 text-center">
                    {post.title}
                  </h2>
                </Link>
                {post.imageUrl && (
                  <div className="w-full h-64 overflow-hidden rounded-md">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <p className="text-gray-700 mt-2">{getPreview(post.content)}</p>
                {post.timestamp && (
                  <p className="text-gray-500 text-sm mt-2 text-center">
                    {format(new Date(post.timestamp.seconds * 1000), "PPpp")}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Login /> // Render your Login component directly
      )}
    </div>
  );
};

export default Blog;
