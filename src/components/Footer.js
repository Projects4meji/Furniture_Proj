import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="divide-y-2">
            <footer className="flex justify-center w-screen" style={{fontFamily:"'Poppins', sans-serif"}}>
                <div className="lg:mx-40 max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 divide-y">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="text-teal-600">
                                <p className="font-extrabold text-black lg:text-2xl">Furniro.</p>
                            </div>
                            <p className="mt-4 max-w-xs text-gray-500">400 University Drive Suite 200 Coral Gables,FL 33134 USA</p>
                        </div>                        

                        <div className="grid gap-8 grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                            <div>
                                <p className="font-medium text-gray-400">Links</p>
                                <ul className="mt-6 space-y-4 text-sm font-bold">
                                    <li>
                                        <Link to="/Home" className="text-black transition hover:opacity-75 hover:underline"> Home </Link>                                            </li>
                                    <li>
                                        <Link to="/Shop" className="text-black transition hover:opacity-75 hover:underline"> Shop </Link>
                                    </li>
                                    <li>
                                        <Link to="/Home" className="text-black transition hover:opacity-75 hover:underline"> About </Link>
                                    </li>
                                    <li>
                                        <Link to="/Home" className="text-black transition hover:opacity-75 hover:underline"> Contact </Link>
                                    </li>
                                </ul>
                            </div>
                        
                            <div>
                                <p className="font-medium text-gray-400">Help</p>
                                <ul className="mt-6 space-y-4 text-sm font-bold">
                                    <li>
                                        <Link to="/Home" className="text-black transition hover:opacity-75 hover:underline"> Payment Options </Link>
                                    </li>
                                    <li>
                                        <Link to="/Home" className="text-black transition hover:opacity-75 hover:underline"> Returns </Link>
                                    </li>
                                    <li>
                                        <Link to="/Home" className="text-black transition hover:opacity-75 hover:underline"> Privacy Policy </Link>
                                    </li>
                                </ul>
                            </div>
                        
                            <div>
                                <p className="font-medium text-gray-400">Newsletter</p>            
                                <ul className="mt-6 space-y-4 text-sm">
                                    <li className="flex">
                                        <input className="border-black border-b-2 pr-2 mb-4 w-36" placeholder="Enter Your Email"/><span><button className="font-bold border-b-2 border-black ml-4">SUBSCRIBE</button></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg text-black pt-6">© 2023 furino. All rights reverved</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;