import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      summary: "An introduction to React Hooks and how they can simplify your code.",
      date: "August 20, 2024",
    },
    {
      id: 2,
      title: "Getting Started with Tailwind CSS",
      summary: "A guide on how to integrate and use Tailwind CSS in your projects.",
      date: "August 15, 2024",
    },
    {
      id: 3,
      title: "Mastering JavaScript ES6",
      summary: "Learn about the new features introduced in ES6 and how to use them.",
      date: "August 10, 2024",
    },
  ];

  return (
    <div className="container mx-auto py-16 px-8">
      <h2 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-12 text-center">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{post.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{post.summary}</p>
            <div className="text-gray-500 dark:text-gray-400 text-sm mb-6">Published on {post.date}</div>
            <Link to={`/blog/${post.id}`} className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-500 transition-colors duration-300 font-semibold text-lg">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
