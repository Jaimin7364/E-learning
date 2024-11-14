import React, { FC } from "react";
import Link from "next/link";

export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

type Props = {
  activeItem: number;
  ismobile: boolean;
};
const NavItems: React.FC<Props> = ({activeItem, ismobile}) => {
  return (
    <>
      <div className="hidden 800px:flex">
        {navItemsData &&
          navItemsData.map((i, index) => (
            <Link href={i.url} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[crimson]"
                    : "text-black dark:text-white"
                } text-[18px] px-6 font-Poppins font-[400] `}
              >
                {i.name}
              </span>
            </Link>
          ))}
      </div>
      {ismobile && (
       <div className="800px:hidden mt-5">
       <div className="w-full text-center py-6">
           <Link href={"/"} passHref>
             <span className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
             >S3 CloudHub</span>
         </Link>
         </div>
         {navItemsData &&
           navItemsData.map((i, index) => (
             <Link href={i.url} key={index} passHref>
               <span
                 className={`${
                   activeItem === index
                     ? "dark:text-[#37a39a] text-[crimson]"
                     : "dark:text-[#ffffff] text-[#000000]"
                 } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
               >
                 {i.name}
               </span>
             </Link>
           ))}
       </div>
      )}
    </>
  );
};
export default NavItems;
// import Link from "next/link";
// import React from "react";

// export const navItemsData = [
//   {
//     name: "Home",
//     url: "/",
//   },
//   {
//     name: "Courser",
//     url: "/courser",
//   },
//   {
//     name: "About",
//     url: "/about",
//   },
//   {
//     name: "Policy",
//     url: "/policy",
//   },
//   {
//     name: "FAQ",
//     url: "/faq",
//   },
// ];

// type Props = {
//   activeItem: number;
//   isMobile: boolean;
// };

// const NavItem: React.FC<Props> = ({ activeItem, isMobile }) => {
//   return (
//     <>
//       <div className="flex hidden 800px:flex">
//         {navItemsData &&
//           navItemsData.map((i, index) => (
//             <Link href={i.url} key={index} passHref>
//               <span
//                 className={`${
//                   activeItem === index
//                     ? "dark:text-[#37a39a] text-[crimson]"
//                     : "dark:text-[#ffffff] text-[#000000]"
//                 } text-[18px] px-6 font-Poppins font-[400]`}
//               >
//                 {i.name}
//               </span>
//             </Link>
//           ))}
//       </div>

//       {isMobile && (
//         <div className="800px:hidden mt-5">
//           <div className="w-full text-center py-6">
//             {navItemsData &&
//               navItemsData.map((i, index) => (
//                 <Link href={i.url} key={index} passHref>
//                   <span
//                     className={`${
//                       activeItem === index
//                         ? "dark:text-[#37a39a] text-[crimson]"
//                         : "dark:text-[#ffffff] text-[#000000]"
//                     } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
//                   >
//                     {i.name}
//                   </span>
//                 </Link>
//               ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default NavItem;
