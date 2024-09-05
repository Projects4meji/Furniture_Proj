import React,{useState} from 'react';
import '../index.css';
import { Link } from "react-router-dom";


const textStyle = {
    fontFamily: "'Poppins',sans-serif"
}

function Navbar(){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
          <nav className="bg-white">
              <div className="px-2 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                      <div className="flex items-center sm:justify-start">
                          <div className="flex items-center">
                              <img className="h-8 w-auto" src='../ImgAssets/home/fig.png' alt="Your Company"/>
                              <h2 className="font-bold text-xl lg:text-3xl" style={{fontFamily:"'Montserrat', sans-serif"}}>Furniro</h2>
                          </div>
                      </div>
                      <div className="hidden w-full lg:block lg:w-auto" id="navbar-dropdown" style={textStyle}>
                          <ul className="flex flex-col p-4 mt-4 lg:flex-row md:mt-0 md:text-sm  md:border-0 md:space-x-8 md:rtl:space-x-reverse">
                            <li>
                                <Link to="./Home" className="text-lg font-bold block py-2 px-3 text-gray-700 rounded hover:bg-yellow-700 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">Home</Link>
                            </li>
                            <li>
                                <Link to="./Shop" className="text-lg font-bold block py-2 px-3 text-gray-700 rounded hover:bg-yellow-700 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">Services</Link>
                            </li>
                            <li>
                                <a href="./index.html" className="text-lg font-bold block py-2 px-3 text-gray-700 rounded hover:bg-yellow-700 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">About</a>
                            </li>
                            <li>
                                <a href="./" className="text-lg font-bold block py-2 px-3 text-gray-700 rounded hover:bg-yellow-700 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">Contact</a>
                            </li>
                          </ul>
                      </div>
                      <div className="relative ml-4" style={textStyle}>
                          <div className="flex justify-self-center items-center space-x-4 md:order-3 rounded-full bg-white text-sm">
                              <button type="button" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                  <img className="md:h-8 md:w-8 h-6 w-6" src="../ImgAssets/home/per.png" alt="Icon" />
                              </button>
                              <button type="button" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                  <img className="md:h-8 md:w-8 h-6 w-6" src="../ImgAssets/home/ser.png" alt="Icon" />
                              </button>
                              <button type="button" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                  <img className="md:h-8 md:w-8 h-6 w-6" src="../ImgAssets/home/her.png" alt="Icon" />
                              </button>
                              <button type="button" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                  <Link to="/Single">
                                      <img className="md:h-8 md:w-8 h-6 w-6" src="../ImgAssets/home/cart.png" alt="Icon" />
                                  </Link>
                              </button>
                          </div>
                      </div>
                      <div className="relative ml-3 lg:hidden" style={textStyle}>
                          <button
                              onClick={toggleDropdown}
                              type="button"
                              className="inline-flex items-center p-2 ms-3 h-10 w-10 justify-center text-sm text-yellow-600 rounded-lg lg:hidden hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 dark:text-yellow-600 dark:hover:bg-orange-50 dark:focus:ring-yellow-600"
                              aria-controls="navbar-dropdown"
                              aria-expanded={isDropdownOpen}
                              >
                              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                              </svg>
                          </button>
                          <div className={`flex lg:hidden absolute right-10 top-7 ${isDropdownOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                              <ul className="flex flex-col bg-gray-400 text-start rounded-md mt-3 divide-y divide-white mx-0">
                                  <li>
                                      <Link to="./Home" className="text-base font-light block py-2 px-3 text-white rounded">Home</Link>
                                  </li>
                                  <li>
                                      <Link to="./Shop" className="text-base font-light block py-2 px-3 text-white rounded">Services</Link>
                                  </li>
                                  <li>
                                      <a href="./index.html" className="text-base font-light block py-2 px-3 text-white rounded">About</a>
                                  </li>
                                  <li>
                                      <a href="./" className="text-base font-light block py-2 px-3 text-white rounded">Contact</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
    );
}

export default Navbar;
