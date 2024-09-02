import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage';
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import BlogPost from './component/Blog/BlogPost';
import Banner from './component/Home/Banner';
import Resume from './component/Resume/Resume';
import Project from './component/project/Project';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/banner",
        element: <Banner></Banner>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>
      },
      {
        path: "/project",
        element: <Project></Project>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog/:id",
        element: <BlogPost></BlogPost>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
