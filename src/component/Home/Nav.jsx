const Nav = () => {
    return (
      <>
        <header className="bg-green-100">
          <nav className="flex flex-wrap justify-between items-center mx-5 md:mx-[100px] lg:mx-[200px] py-6">
            <h3 className="text-gray-800 text-[26px] sm:text-[32px] md:text-[42px] font-extrabold tracking-wide">
              Isr<span className="text-green-600">a</span>t
            </h3>
            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-6 md:space-x-10">
              <li>
                <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium text-[15px] sm:text-[17px]">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium text-[15px] sm:text-[17px]">
                  Blog
                </a>
              </li>
              <li>
                <button className="rounded bg-green-600 text-white text-[15px] sm:text-[17px] font-medium px-6 sm:px-8 py-2 sm:py-3 hover:bg-green-700 transition-colors duration-300 shadow-lg">
                  Hire Me
                </button>
              </li>
            </ul>
          </nav>
  
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-[100px] lg:px-[150px] py-[30px] md:py-[40px] bg-gradient-to-b from-green-100 to-green-200">
            <div className="max-w-[100%] md:max-w-[450px] text-center md:text-left mb-8 md:mb-0">
         <h3 className="text-gray-700 text-[26px] sm:text-[32px] md:text-[42px] font-semibold mb-3">
           Hi, I am
         </h3>
         <h1 className="text-[35px] sm:text-[50px] md:text-[60px] font-bold text-gray-800">
           Israt Jahan
         </h1>
         <p className="text-gray-600 text-[15px] sm:text-[17px] mt-5 leading-relaxed">
           Shot what able cold new see hold. Friendly as an betrayed formerly he. Morning because as to society behaved moments.
         </p>
         <div className="flex flex-wrap justify-center md:justify-start mt-8 space-x-4">
           <button className="rounded bg-green-600 text-white text-[15px] sm:text-[17px] font-medium px-6 sm:px-8 py-2 sm:py-3 hover:bg-green-700 transition-colors duration-300 shadow-md flex items-center">
                 Download CV
           </button>
         </div>
       </div>
       <img className="w-[90%] md:w-[450px] mx-auto md:mx-0 shadow-lg" src="src/component/Home/make-removebg-preview.png" alt="Profile" />
        </div>
        </header>
      </>
    );
  };
  
  export default Nav;
  