import React from "react";
import { styles } from "../styles/style";

type Props = {};

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-purple-400">S3CloudHub?</span>
      </h1>
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Are you ready to take your programming skills to the next level? Look
          no further than S3CloudHub, the premier programming community
          dedicated to helping new programmers achieve their goals and reach
          their full potential.
          <br />
          <br />
          As the founder and CEO of S3CloudHub, I know firsthand the challenges
          that come with learning and growing in the programming industry.
          That's why I created S3CloudHub to provide new programmers with the
          resources and support they need to succeed.
          <br />
          <br />
          Our YouTube channel is a treasure trove of informative videos on
          everything from programming basics to advanced techniques. But that's
          just the beginning. Our affordable courses are designed to give you
          the high-quality education you need to succeed in the industry,
          without breaking the bank.
          <br />
          <br />
          At S3CloudHub, we believe that price should never be a barrier to
          achieving your dreams. That's why our courses are priced low so that
          anyone, regardless of their financial situation, can access the tools
          and knowledge they need to succeed.
          <br />
          <br />
          But S3CloudHub is more than just a community But we're a family. Our
          supportive community of like-minded individuals is here to help you
          every step of the way, whether you're just starting out or looking to
          take your skills to the next level.
        </p>
        <br />
        <span className="font-Cursive text-[22px]">S3CloudHub Team</span>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default About;
