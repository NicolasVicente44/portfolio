import React, { useEffect, useState } from "react";
import { db, auth } from "./firebase"; // Import db and auth from firebase.js
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom"; // Import Link for navigation
import Login from "./Login"; // Import your Login component

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPosts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Set login status based on user presence
    });

    fetchPosts();

    return () => unsubscribe(); // Cleanup function
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Conditional rendering based on user authentication */}
      {isLoggedIn ? (
        <div className="w-full max-w-3xl p-4">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <Link
            to="/create"
            className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md inline-block"
          >
            New Post
          </Link>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post.id}
                className="border border-gray-300 p-4 rounded-md"
              >
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                </Link>
                <p className="text-gray-700">{post.content}</p>
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="mt-2 rounded-md"
                  />
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
