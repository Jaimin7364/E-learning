// import Image from "next/image";
// import Link from "next/link";
// import React, { FC } from "react";
// import { BiSearch } from "react-icons/bi";

// type Props = {};

// const Hero: FC<Props> = (props) => {
//   return (
//     <div className="flex items-center justify-center w-full min-h-screen dark:bg-black bg-white dark:text-white text-black">
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl px-4 py-16">
//         {/* Image Section */}
//         <div className="flex justify-center w-full lg:w-1/2 lg:justify-start">
//           <img
//             src="https://edmy-react.hibootstrap.com/images/banner/banner-img-1.png"
//             alt="Learning Illustration"
//             className="w-3/4 lg:w-full object-contain"
//           />
//         </div>

//         {/* Text Content Section */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8 ">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//             Improve Your Online Learning Experience Better Instantly
//           </h2>
//           <p className="text-lg mb-8">
//             We have 40k+ Online courses & 500K+ Online registered students. Find your desired Courses from them.
//           </p>

//           {/* Search Bar */}
//           <div className="relative w-full max-w-md mx-auto lg:mx-0 mb-8">
//             <input
//               type="search"
//               placeholder="Search Courses..."
//               className="w-full h-12 px-4 pr-12 bg-gray-800 text-white rounded-full outline-none"
//             />
//             <button className="absolute right-0 top-0 h-full w-12 flex items-center justify-center bg-blue-500 rounded-r-full">
//               <BiSearch className="text-white" size={24} />
//             </button>
//           </div>

//           {/* Trusted By Section */}
//           <div className="flex items-center justify-center lg:justify-start">
//             <img
//               src="https://edmy-react.hibootstrap.com/images/banner/client-1.jpg"
//               alt="Client 1"
//               className="w-10 h-10 rounded-full -ml-2"
//             />
//             <img
//               src="https://edmy-react.hibootstrap.com/images/banner/client-2.jpg"
//               alt="Client 2"
//               className="w-10 h-10 rounded-full -ml-2"
//             />
//             <p className="ml-4 text-lg">
//               500K+ People already trusted us.{" "}
//               <Link href="/courses" className="dark:text-green-400 text-green-700">
//                 View Courses
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
// import Image from "next/image";
// import Link from "next/link";
// import React, { FC, useState } from "react";
// import { BiSearch } from "react-icons/bi";
// import Loader from "../Loader/Loader";
// import { useRouter } from "next/router";

// type Props = {};

// const Hero: FC<Props> = (props) => {
//   const { data, isLoading } = useGetHeroDataQuery("Banner", {});
//   const [search, setSearch] = useState("");
//   const router = useRouter();
//   const handleSearch = () => {
//     if(search === ""){
//       return;
//     }else{
//       router.push(`/courses?title=${search}`);
//     }
//   }
//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="flex items-center justify-center w-full min-h-screen dark:bg-black bg-white dark:text-white text-black">
//           <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl px-4 py-16">
//             {/* Image Section */}
//             <div className="flex justify-center w-full lg:w-1/2 lg:justify-start">
//               <img
//                 src="https://edmy-react.hibootstrap.com/images/banner/banner-img-1.png"
//                 // src={data?.layout?.banner?.image?.url}
//                 // width={400}
//                 // height={400}
//                 alt="Learning Illustration"
//                 className="w-3/4 lg:w-full object-contain"
//               />
//             </div>

//             {/* Text Content Section */}
//             <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
//               <h2 className="text-4xl lg:text-5xl font-bold mb-4 ">
//                 Improve Your Online Learning Experience Better Instantly
//               </h2>
//               <p className="text-lg mb-8 ">
//                 We have 40k+ Online courses & 500K+ Online registered students.
//                 Find your desired Courses from them.
//               </p>

//               {/* Search Bar */}
//               <div className="relative w-full max-w-md mx-auto lg:mx-0 mb-8">
//                 <input
//                   type="search"
//                   placeholder="Search Courses..."
//                   value={search}
//                   className="w-full h-12 px-4 pr-12 bg-gray-800 text-white rounded-full outline-none"
//                 />
//                 <button className="absolute right-0 top-0 h-full w-12 flex items-center justify-center bg-blue-500 rounded-r-full" onClick={handleSearch}>
//                   <BiSearch className="text-white" size={24} />
//                 </button>
//               </div>

//               {/* Trusted By Section */}
//               <div className="flex items-center justify-center lg:justify-start">
//                 <img
//                   src="https://edmy-react.hibootstrap.com/images/banner/client-1.jpg"
//                   alt="Client 1"
//                   className="w-10 h-10 rounded-full -ml-2"
//                 />
//                 <img
//                   src="https://edmy-react.hibootstrap.com/images/banner/client-2.jpg"
//                   alt="Client 2"
//                   className="w-10 h-10 rounded-full -ml-2"
//                 />
//                 <p className="ml-4 text-lg">
//                   500K+ People already trusted us.{" "}
//                   <Link
//                     href="/courses"
//                     className="dark:text-green-400 text-green-700"
//                   >
//                     View Courses
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Hero;

import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Loader from "../Loader/Loader";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

const Hero: FC<Props> = (props) => {
  const { data, isLoading } = useGetHeroDataQuery("Banner", {});
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    if(search === ""){
      return;
    } else {
      router.push(`/courses?title=${search}`);
    }
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex items-center justify-center w-full min-h-screen dark:bg-black bg-white dark:text-white text-black">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl px-4 py-16">
            {/* Image Section */}
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-start">
              <img
                src="https://edmy-react.hibootstrap.com/images/banner/banner-img-1.png"
                alt="Learning Illustration"
                className="w-3/4 lg:w-full object-contain"
              />
            </div>

            {/* Text Content Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 ">
                Improve Your Online Learning Experience Better Instantly
              </h2>
              <p className="text-lg mb-8 ">
                We have 40k+ Online courses & 500K+ Online registered students.
                Find your desired Courses from them.
              </p>

              {/* Search Bar */}
              <div className="relative w-full max-w-md mx-auto lg:mx-0 mb-8">
                <input
                  type="search"
                  placeholder="Search Courses..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-12 px-4 pr-12 bg-gray-800 text-white rounded-full outline-none"
                />
                <button className="absolute right-0 top-0 h-full w-12 flex items-center justify-center bg-blue-500 rounded-r-full" onClick={handleSearch}>
                  <BiSearch className="text-white" size={24} />
                </button>
              </div>

              {/* Trusted By Section */}
              <div className="flex items-center justify-center lg:justify-start">
                <img
                  src="https://edmy-react.hibootstrap.com/images/banner/client-1.jpg"
                  alt="Client 1"
                  className="w-10 h-10 rounded-full -ml-2"
                />
                <img
                  src="https://edmy-react.hibootstrap.com/images/banner/client-2.jpg"
                  alt="Client 2"
                  className="w-10 h-10 rounded-full -ml-2"
                />
                <p className="ml-4 text-lg">
                  500K+ People already trusted us.{" "}
                  <Link
                    href="/courses"
                    className="dark:text-green-400 text-green-700"
                  >
                    View Courses
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
