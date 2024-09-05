import React, { useState } from "react";
import { Link } from "react-router-dom";

function Carousel() {
  const slider = [
    { img: "../../ImgAssets/cart/Rec25.png" },
    { img: "../../ImgAssets/cart/Rect41.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-screen bg-orange-50 mx-auto py-10 overflow-hidden">
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 gap-4 items-center justify-items-start">
        <div className="flex flex-col justify-self-center gap-4 row-end-1 text-center md:text-left">
          <p className="text-base md:text-4xl font-extrabold text-gray-700">
            50+ Beautiful rooms<br />Inspiration
          </p>
          <p className="md:text-lg text-gray-700">
            Our designer already made a lot of beautiful<br />prototype of rooms that inspire you
          </p>
          <button
            onClick={() => (window.location.href = "./Shop")}
            className="w-full md:w-48 py-4 px-4 md:px-8 border-2 border-orange-50 rounded-none bg-yellow-600 text-white text-base font-bold hover:bg-white hover:text-yellow-600 hover:border-yellow-600"
          >
            Explore More
          </button>
        </div>
        <div className="grid lg:grid-cols-2 lg:grid-rows-1 gap-4 justify-self-center">
          <div className="flex items-center justify-self-center gap-4">
            <img className="w-full h-full mx-4" src="../ImgAssets/cart/Rectangle.png" alt="" />
            <div className="flex flex-col self-end bg-slate-100 bg-opacity-80 absolute p-5 mb-3 lg:p-8 lg:mb-5 lg:mr-28 lg:ml-8">
              <p className="flex flex-row text-gray-400">
                01
                <span className="flex justify-self-center self-center px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="2"
                    viewBox="0 0 27 2"
                    fill="none"
                    >
                    <path d="M0 1H27" stroke="#616161" />
                  </svg>
                </span>
                Bed Room
              </p>
              <p className="md:text-xl lg:text-3xl font-bold">Inner Peace</p>
              <div className="flex justify-self-end bg-yellow-700 absolute left-10 mt-7 ml-36 p-2 lg:p-4 lg:ml-52 lg:mt-9">
                <Link to="/Single">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    >
                    <path
                      d="M21 12H3M21 12L15 6M21 12L15 18"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-3">
            <div className="flex flex-row row-span-2 row-start-1 row-end-4 justify-self-start items-center relative rounded-lg">
              <div className="flex justify-self-start gap-0 mx-4 mb-8">
                {slider.map((slide, index) => (
                <img
                  key={index}
                  src={slide.img}
                  alt={`slide ${index + 1}`}
                  className={`flex flex-col h-full object-cover transform transition-transform duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0 hidden"} `}/>
                ))}
                <button
                  onClick={nextSlide}
                  className="flex rounded-full bg-gray-200 h-8 w-8 absolute top-1/2 -translate-y-4 right-4 justify-items-center mr-6">
                    <svg
                      className="mt-1 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                        <path
                          d="M9.00006 5L16.0001 12L9.00006 19"
                          stroke="#B88E2F"
                          stroke-width="1.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"/>
                    </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-start items-end gap-5 z-10 row-start-4 ml-40 lg:ml-6 ">
              {slider.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 relative mt-3 rounded-full ${index === currentIndex ? "bg-gray-700" : "bg-gray-300"}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={index}
                  onClick={() => setCurrentIndex(index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none">
                        <circle
                          cx="5.5"
                          cy="5.5"
                          r="5.5"
                          fill={index === currentIndex ? "#B88E2F" : "#D8D8D8"}/>
                    </svg>
                </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Carousel() {
//   const slider = [
//     { img: "../../ImgAssets/cart/Rect25.png" },
//     { img: "../../ImgAssets/cart/Rect26.png" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slider.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className="w-screen bg-orange-50 mx-auto py-10 overflow-hidden">
//       <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 gap-4 items-center justify-items-start">
//         <div className="flex flex-col justify-self-center gap-4 row-end-1 text-center md:text-left">
//           <p className="text-base md:text-4xl font-extrabold text-gray-700">
//             50+ Beautiful rooms<br />Inspiration
//           </p>
//           <p className="md:text-lg text-gray-700">
//             Our designer already made a lot of beautiful<br />prototype of rooms that inspire you
//           </p>
//           <button
//             onClick={() => (window.location.href = "./Shop")}
//             className="w-full md:w-48 py-4 px-4 md:px-8 border-2 border-orange-50 rounded-none bg-yellow-600 text-white text-base font-bold hover:bg-white hover:text-yellow-600 hover:border-yellow-600"
//           >
//             Explore More
//           </button>
//         </div>
//         <div className="grid lg:grid-cols-2 lg:grid-rows-1 gap-4 justify-self-center">
//           <div className="flex items-center justify-self-center gap-4 relative rounded-lg overflow-hidden">
//             {slider.map((slide, index) => (
//               <img
//                 key={index}
//                 src={slide.img}
//                 alt={`Slide ${index + 1}`}
//                 className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0 hidden"} ${index === currentIndex ? "" : "translate-x-full"}`}
//               />
//             ))}
//             <button
//               onClick={nextSlide}
//               className="flex rounded-full bg-gray-200 h-8 w-8 absolute top-1/2 -translate-y-4 right-4 justify-items-center mr-6"
//             >
//               <svg
//                 className="mt-1 ml-1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M9.00006 5L16.0001 12L9.00006 19"
//                   stroke="#B88E2F"
//                   stroke-width="1.8"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="flex flex-row justify-center items-end gap-5 z-10 mr-12">
//             {slider.map((_, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 className={`w-3 h-3 relative mt-3 rounded-full ${index === currentIndex ? "bg-gray-700" : "bg-gray-300"}`}
//                 aria-current={index === currentIndex ? "true" : "false"}
//                 aria-label={`Slide ${index + 1}`}
//                 data-carousel-slide-to={index}
//                 onClick={() => setCurrentIndex(index)}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="11"
//                   height="11"
//                   viewBox="0 0 11 11"
//                   fill="none"
//                 >
//                   <circle
//                     cx="5.5"
//                     cy="5.5"
//                     r="5.5"
//                     fill={index === currentIndex ? "#B88E2F" : "#D8D8D8"}
//                   />
//                 </svg>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;
