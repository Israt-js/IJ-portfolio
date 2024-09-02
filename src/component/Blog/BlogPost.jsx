import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      content: "React Hooks are functions that let you use state and other React features without writing a class. They provide a more functional approach to component logic and state management, making your code cleaner and easier to manage. Hooks such as useState and useEffect simplify the process of managing state and side effects in functional components. By allowing the use of React features like state and lifecycle methods in functional components, Hooks enable a more concise and readable code structure. Moreover, they promote the reuse of logic across components through custom hooks, which enhances code maintainability and scalability. Understanding and mastering React Hooks can significantly improve your ability to develop dynamic and efficient React applications.",
      date: "August 20, 2024",
    },
    {
      id: 2,
      title: "Getting Started with Tailwind CSS",
      content: "Tailwind CSS is a utility-first CSS framework that allows for rapid, custom design creation. It provides a comprehensive set of utility classes for styling, which helps in maintaining consistency and reducing custom CSS. Tailwind enables developers to apply styles directly within HTML elements using predefined classes, thus eliminating the need for writing traditional CSS stylesheets. The utility-based approach promotes design consistency across different components and pages. Additionally, Tailwind CSS offers customization options through configuration files, enabling developers to tailor the framework to fit specific project needs. It also integrates seamlessly with modern front-end tools and frameworks, making it a versatile choice for both small and large-scale projects. Getting comfortable with Tailwind CSS can dramatically speed up the development process and enhance the visual appeal of your web applications.",
      date: "August 15, 2024",
    },
    {
      id: 3,
      title: "Mastering JavaScript ES6",
      content: "ES6, also known as ECMAScript 2015, introduced significant improvements to JavaScript, including arrow functions, classes, template literals, destructuring, and more. Mastering these features can enhance your coding efficiency and capabilities. For instance, arrow functions provide a more concise syntax for writing functions and handle the this keyword differently, making them ideal for certain scenarios. ES6 classes offer a cleaner, more intuitive way to work with object-oriented programming in JavaScript, providing syntactical sugar over the existing prototype-based inheritance. Template literals simplify string interpolation and multi-line strings, making your code easier to read and write. Destructuring allows you to unpack values from arrays or properties from objects into distinct variables, leading to more readable and maintainable code. Additionally, ES6 introduces modules, which enable better code organization and reuse across different parts of an application. A deep understanding of ES6 features is crucial for modern JavaScript development, as these features are widely used in today's coding environments.",
      date: "August 10, 2024",
    },
  ];

  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div className="container mx-auto py-12 px-6 text-center text-gray-700 dark:text-gray-300">Post not found</div>;
  }

  return (
    <div className="container mx-auto py-16 px-8">
      <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-8">{post.title}</h1>
      <div className="text-gray-500 dark:text-gray-400 text-sm mb-6">Published on {post.date}</div>
      <div className="text-gray-800 dark:text-gray-100 text-lg leading-relaxed">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPost;
