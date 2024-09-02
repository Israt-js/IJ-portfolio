import { Link } from "react-router-dom";

const Nav = () => {
    return (
      <>
        <header className="bg-green-100">
          <nav className="flex flex-wrap justify-between items-center mx-5 md:mx-[100px] lg:mx-[200px] py-6">
            <h3 className="text-gray-800 text-[26px] sm:text-[32px] md:text-[42px] font-extrabold tracking-wide">
              <Link to="/">
              I<span className="text-green-600">S</span>r<span className="text-green-600">a</span>t
                </Link>
            </h3>
            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-6 md:space-x-10">
              <li>
                <Link to="/project" className="text-gray-700 dark:text-gray-400 hover:text-green-900 dark:hover:text-green-700 transition-colors duration-300 font-medium text-[15px] sm:text-[17px]">
                  Project
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 dark:text-gray-400 hover:text-green-900 dark:hover:text-green-700 transition-colors duration-300 font-medium text-[15px] sm:text-[17px]">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-gray-700 dark:text-gray-400 hover:text-green-900 dark:hover:text-green-700 transition-colors duration-300 font-medium text-[15px] sm:text-[17px]">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/getin" className="text-gray-700 dark:text-gray-400 hover:text-green-900 dark:hover:text-green-700 transition-colors duration-300 font-medium text-[15px] sm:text-[17px]">
                  Contact
                </Link>
              </li>
              <li>
                 <Link 
                   to="/blog"
                   className="text-gray-700 dark:text-gray-400 hover:text-green-900 dark:hover:text-green-700 transition-colors duration-300 font-medium text-[15px] sm:text-[17px]"
                 >
                   Blog
                 </Link>

               </li>
              <li>
                <Link to="/login">
                  <button className="rounded bg-green-400 dark:bg-green-600 text-white text-[15px] sm:text-[17px] font-medium px-6 sm:px-8 py-2 sm:py-3 hover:bg-green-700 dark:hover:bg-green-800 transition-colors duration-300 shadow-lg">
                    Login
                  </button>
                </Link>
              </li>
            </ul>

          </nav>
        </header>
      </>
    );
  };
  
  export default Nav;
  