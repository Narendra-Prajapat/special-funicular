// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import axios from "axios";
// import Cards from "./Cards";

// function Freebook() {
//   const [book, setBook] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getBook = async () => {
//       try {
//         const res = await axios.get("http://localhost:4001/book");
//         const data = res.data.filter((data) => data.category === "Free");
//         setBook(data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setError(error);
//         setLoading(false);
//       }
//     };
//     getBook();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div>
//           <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
//             corporis nulla non suscipit, iure neque earum?
//           </p>
//         </div>

//         <div>
//           {loading ? (
//             <p>Loading...</p>
//           ) : error ? (
//             <p>Error loading books: {error.message}</p>
//           ) : (
//             <Slider {...settings}>
//               {book.map((item) => (
//                 <Cards item={item} key={item.id} />
//               ))}
//             </Slider>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Freebook;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../src/list.json";
import Cards from './Cards';
function Freebook() {
  console.log(list); // Check if the data is imported correctly

  const filterData = list.filter((data) => data.category.toLowerCase() === "free");
  console.log(filterData); 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
   <>
   <div className="mt-4 my-3 p-3">
   <div className='max-w-screen-2xl m-4 container mx-auto md:px-20 px-4'>
   
    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!</p>
              </div>
   
   <div>  <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item} key={item.id} />
        ))}
      </Slider></div>
      </div>
      
   </>
  )
}

export default Freebook
