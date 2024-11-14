import { styles } from "@/app/styles/style";
import Image from "next/image";
import { comment } from "postcss";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Gene Bates",
    avtar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student | Cambridge University",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde voluptatum dignissimos,",
  },
  {
    name: "Gene Bates",
    avtar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student | Cambridge University",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, id aliquam voluptatibus ipsam consectetur libero odit accusamus officia cum enim suscipit eveniet fuga, ad sint nam dolores, qui explicabo ea beatae placeat odio minus eum corrupti. Quisquam asperiores non tenetur magnam, obcaecati aperiam possimus nostrum perspiciatis fugiat ducimus itaque repellendus.",
  },
  {
    name: "Gene Bates",
    avtar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student | Cambridge University",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fuga a deleniti facere ipsa obcaecati pariatur amet recusandae neque fugiat, illo placeat repellendus sint minus rerum consequatur asperiores. Eos eum voluptate nulla temporibus ab corporis veniam iusto quam esse sit.",
  },
  {
    name: "Gene Bates",
    avtar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student | Cambridge University",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptatum quisquam ad quidem iusto, veritatis tenetur nostrum, fugit dolorum libero sequi accusamus. Qui, delectus doloremque quod adipisci quas suscipit modi consequuntur reprehenderit, blanditiis temporibus deserunt molestiae odit incidunt ex repudiandae facere alias animi tempore eum!",
  },
  {
    name: "Gene Bates",
    avtar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student | Cambridge University",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde voluptatum dignissimos,",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assests/ss2.jpg")}
            alt="business"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are{" "}
            <span className="text-purple-400">Our Strength</span> <br /> See
            What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde
            voluptatum dignissimos, nulla perferendis dolorem voluptate nemo
            possimus magni deleniti natus accusamus officiis quasi nihil
            commodi, presentium quidem, quis doloribus?
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border--0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-40px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};
export default Reviews;
