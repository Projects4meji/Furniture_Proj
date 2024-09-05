import React from "react";
import ProdGrid from "./childComp/ProdGrid";
import { Link } from "react-router-dom";
import { SingleGrid } from "./assets/CardItems";

function Mapping(props){
    return(
        <ProdGrid
            key = {props.id}
            tag = {props.tag}
            img = {props.img}
            name = {props.name}
            context = {props.context}
            price = {props.price}
            discount = {props.discount}
        />
    );
}

function Single(){

    return(
        <div style={{fontFamily:"'Poppins',sans-sarif"}}>
            {/* Second Bar */}
            <div className="flex flex-row py-8 bg-orange-50 justify-start divide-x-2">
                <div className="flex flex-row justify-around align-middle items-center ml-10 lg:ml-32 divide-gray-500">
                    <Link to="/Home" className="text-gray-500 text-center font-normal text-lg gap-2"> Home <span className="text-black font-bold text-lg px-5"> {'>'} </span><Link to="/Home" className="text-gray-500 text-center font-normal text-lg gap-10"> Shop </Link><span className="text-black font-bold px-5"> {'>'} </span></Link>
                </div>
                <div className="flex ml-2 pl-4 lg:ml-10 lg:pl-10">
                    <p className="text-right" >Asgaard sofa</p>
                </div>
            </div>

            {/* Sofa Information */}
            <div class="divide-y-2">
                <div className="grid grid-cols-1 grid-rows-1 xl:grid-cols-2 xl:grid-rows-1 justify-center mx-10 xl:mx-20 my-14 gap-8 row-start-1 row-end-1">
                    <div className="grid grid-cols-3 grid-rows-1 gap-3 mb-2 ml-auto">
                        <div className="hidden xl:flex flex-col justify-start items-start mx-5 xl:mx-14 lg:mx-7 mt-5 gap-4 xl:gap-10">
                            <div>
                                <img className="pb-8 bg-orange-50 rounded-lg" src="../ImgAssets/cart/Outdoor2.png" alt="sofa"/>
                            </div>
                            <div>
                                <img className="pb-5 bg-orange-50 rounded-lg" src="../ImgAssets/cart/Outdoor1.png" alt="sofa"/>
                            </div>
                            <div>
                                <img className=" bg-orange-50 rounded-lg" src="../ImgAssets/cart/Stuart1.png" alt="sofa"/>
                            </div>
                            <div>
                                <img className="pt-5 pb-8 bg-orange-50 rounded-lg" src="../ImgAssets/cart/Maya1.png" alt="sofa"/>
                            </div>
                        </div>
                        <div className="col-span-3 xl:col-span-2">
                            <div className="justify-center items-center rounded-lg mx-5 my-5">
                                <div className="">
                                    <img className="h-full w-full bg-orange-50 rounded-xl lg:py-24" src="../ImgAssets/cart/Asgaard3.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="xl:hidden flex flex-row col-span-3 justify-start items-start gap-2 sm:gap-4 sm:mx-4 sm:my-4 ">
                            <div className="">
                                <img className="w-28 h-20 bg-orange-50 rounded-lg" src="../ImgAssets/cart/Outdoor2.png" alt="sofa"/>
                            </div>
                            <div className="pb-4">
                                <img className="w-28 h-20 bg-orange-50 rounded-lg" src="../ImgAssets/cart/Outdoor1.png" alt="sofa"/>
                            </div>
                            <div className="">
                                <img className="w-28 h-20 bg-orange-50 rounded-lg" src="../ImgAssets/cart/Stuart1.png" alt="sofa"/>
                            </div>
                            <div className="">
                                <img className="w-28 h-20 bg-orange-50 rounded-lg" src="../ImgAssets/cart/Maya1.png" alt="sofa"/>
                            </div>
                        </div>
                    </div>
                    <div className="divide-y-2">
                        <div className="flex flex-col gap-6 w-full my-10">
                            <div>
                                <p className="text-3xl lg:text-5xl font-medium my-4">Asgaard sofa</p>
                                <p className="text-lg lg:text-2xl font-normal text-gray-400">Rs. 250,000.00</p>
                            </div>
                            <div className="grid grid-cols-1 grid-rows-1">
                                <div className="divide-y divide-gray-400">
                                    <div className="flex items-center align-middle">
                                        <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.1563 7.0125L0.800049 7.9375L5.40005 12.4188L4.31255 18.75L10 15.7625V1.25L7.1563 7.0125Z" fill="#FFC700"/>
                                        </svg>
                                        <p className="divide-x-2 text-gray-400 text-base pl-6"> | <span className="divide-x-2 text-gray-400 text-base pl-6"> 5 Customer Review </span> </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg lg:text-xl text-justify ">Setting the bar as one of the loudest speakers in its className, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                            <p className="text-gray-400 text-xl font-normal">Size</p>
                            <div className="flex gap-3 divide-y">
                                <button className="py-4 px-6 text-xl rounded-lg font-medium bg-orange-50 hover:bg-yellow-700 hover:text-white">L</button>
                                <button className="py-4 px-4 text-xl rounded-lg font-medium bg-orange-50 hover:bg-yellow-700 hover:text-white">XL</button>
                                <button className="py-4 px-4 text-xl rounded-lg font-medium bg-orange-50 hover:bg-yellow-700 hover:text-white">XS</button>
                            </div>
                            <p className="text-gray-400 text-xl font-normal">Color</p>
                            <div className="flex gap-6">
                                <button className="py-6 px-6 text-lg rounded-full bg-indigo-500"></button>
                                <button className="py-6 px-6 text-lg rounded-full bg-black"></button>
                                <button className="py-6 px-6 text-lg rounded-full bg-yellow-500"></button>
                            </div>
                            <div className="grid grid-flow-row md:grid-flow-col justify-start items-center gap-3 text-center">
                                <div className="border-2 rounded-xl px-8 py-4 lg:text-lg font-medium hover:bg-slate-400">
                                    <button>-</button><span className="px-4"> 1 </span><button>+</button>
                                </div>
                                <button className="border-2 border-black rounded-xl px-8 py-4 lg:text-lg font-medium hover:bg-black hover:text-white">Add to Cart</button>
                                <button className="border-2 border-black rounded-xl px-10 py-4 lg:text-lg font-medium hover:bg-black hover:text-white">+ Compare</button>
                            </div>
                        </div>
                        <div>
                            <div className="flex text-gray-400 font-medium xl:col-span-2 mt-8">
                                <div className="flex flex-col gap-2">
                                    <p>SKU <span></span></p>
                                    <p>Category <span></span></p>
                                    <p>Tags <span></span></p>
                                    <p>Share</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="mx-2"> : <span className="text-center ml-4"> SS001 </span></p>
                                    <p className="mx-2"> : <span className="text-center ml-4"> Sofas </span></p>
                                    <p className="mx-2"> : <span className="text-center ml-4"> Sofa, Chair, Home, Shop </span></p>
                                    <p className="flex gap-4 mx-2"> : 
                                        <span className="ml-2">
                                            <a href="https://www.facebook.com/">
                                                <svg className="hover:bg-blue-400 hover:rounded-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <g path="url(#clip0_117_920)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z" fill="black"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_117_920">
                                                            <rect strokeWidth="20" height="20" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </span>
                                        <span>
                                            <a href="https://pk.linkedin.com/">
                                                <svg className="hover:bg-blue-400" xmlns="http://www.w3.org/2000/svg" strokeWidth="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <g clipPath="url(#clip0_117_924)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.833252 2.365C0.833252 1.95877 0.994624 1.56919 1.28187 1.28195C1.56911 0.994702 1.9587 0.83333 2.36492 0.83333H17.6333C17.8346 0.833001 18.034 0.872383 18.22 0.949219C18.4061 1.02606 18.5752 1.13884 18.7176 1.28111C18.8601 1.42338 18.973 1.59235 19.0501 1.77834C19.1271 1.96433 19.1667 2.16368 19.1666 2.365V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5753 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5754 1.02653 18.4065 0.949604 18.2206C0.87268 18.0346 0.833143 17.8354 0.833252 17.6342V2.365ZM8.08992 7.82333H10.5724V9.07C10.9308 8.35333 11.8474 7.70833 13.2249 7.70833C15.8658 7.70833 16.4916 9.13583 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82333ZM3.50659 16.4925H6.17992V7.70833H3.50659V16.4917V16.4925ZM6.56242 4.84333C6.56746 5.07222 6.52673 5.29982 6.44262 5.51276C6.35851 5.7257 6.23271 5.91969 6.07261 6.08336C5.91251 6.24702 5.72133 6.37706 5.5103 6.46584C5.29926 6.55461 5.07262 6.60035 4.84367 6.60035C4.61472 6.60035 4.38808 6.55461 4.17704 6.46584C3.966 6.37706 3.77483 6.24702 3.61473 6.08336C3.45463 5.91969 3.32883 5.7257 3.24472 5.51276C3.16061 5.29982 3.11988 5.07222 3.12492 4.84333C3.13481 4.39404 3.32024 3.96649 3.64149 3.65224C3.96274 3.33798 4.39427 3.16201 4.84367 3.16201C5.29307 3.16201 5.7246 3.33798 6.04585 3.65224C6.3671 3.96649 6.55253 4.39404 6.56242 4.84333Z" fill="black"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_117_924">
                                                            <rect width="20" height="20" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </span>
                                        <span>
                                            <a href="https://www.instagram.com/">
                                                <svg className="hover:bg-blue-400 hover:rounded-full" xmlns="http://www.w3.org/2000/svg" StrokeWidth="25" height="25" viewBox="0 0 25 25" fill="none">
                                                    <path d="M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM17.7563 9.80713C17.7637 9.92188 17.7637 10.0415 17.7637 10.1587C17.7637 13.7427 15.0342 17.8711 10.0464 17.8711C8.5083 17.8711 7.08252 17.4243 5.88135 16.6553C6.10107 16.6797 6.31104 16.6895 6.53565 16.6895C7.80518 16.6895 8.97217 16.2598 9.90234 15.5322C8.71094 15.5078 7.70996 14.7266 7.36816 13.6523C7.78564 13.7134 8.16162 13.7134 8.59131 13.6035C7.97785 13.4789 7.42645 13.1457 7.0308 12.6606C6.63515 12.1755 6.41964 11.5684 6.4209 10.9424V10.9082C6.77979 11.1108 7.20215 11.2354 7.64404 11.2524C7.27256 11.0049 6.96792 10.6695 6.75711 10.276C6.5463 9.88244 6.43585 9.443 6.43555 8.99658C6.43555 8.49121 6.56738 8.02979 6.8042 7.62939C7.48511 8.46762 8.33479 9.15318 9.29801 9.64152C10.2612 10.1299 11.3164 10.41 12.395 10.4639C12.0117 8.62061 13.3887 7.12891 15.0439 7.12891C15.8252 7.12891 16.5283 7.45605 17.0239 7.9834C17.6367 7.86865 18.2227 7.63916 18.7451 7.33154C18.5425 7.95898 18.1177 8.48877 17.5537 8.82324C18.1006 8.76465 18.6279 8.61328 19.1162 8.40088C18.7476 8.94287 18.2861 9.42383 17.7563 9.80713Z" fill="black"/>
                                                </svg>
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="divide-y-2">
                    <div className="flex flex-col my-10" style={{fontFamily: "'Poppins',sans-serif"}}>
                        <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-10 justify-center xl:text-2xl py-8">
                            <div className="flex font-bold">Description</div>
                            <div className="flex text-gray-500 ">Additional Information</div>
                            <div className="flex text-gray-500">Reviews [5]</div>
                        </div>
                        <div className="flex flex-col justify-center mb-10 text-gray-500">
                            <p className="mx-12 md:mx-32 xl:mx-64 text-justify">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                            <br/> 
                            <p className="mx-12 md:mx-32 xl:mx-64 text-justify">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its className, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                        </div>
                        <div>
                            <div className="grid xl:grid-cols-2 xl:grid-rows-1 justify-around gap-6 mx-16 xl:mx-32">
                                <img className="bg-orange-50 rounded-lg h-full" src="../ImgAssets/cart/Cloud1.png" alt=""/>
                                <img className="bg-orange-50 rounded-lg" src="../ImgAssets/cart/Cloud2.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="sm:flex-col justify-center items-center mx-20 py-5 my-10" style={{fontFamily:"'Poppins', sans-serif"}}>
                        <h2 className="text-center font-bold sm:text-2xl md:text-3xl lg:text-5xl text-slate-800">Related Products</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center px-2 my-9 lg:gap-4 sm:gap-4">
                            {SingleGrid.map(Mapping)}
                        </div>
                        <div className="flex justify-center text-center">
                        <button className="py-4 px-8 border-2 rounded-none border-yellow-700 text-yellow-700 lg:text-xl font-bold hover:bg-yellow-700 hover:text-white">Show More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Single;