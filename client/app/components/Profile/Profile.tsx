import React, { FC, useEffect, useState } from "react";
import SideBarProfile from "./SideBarProfile";
import { useLogoutMutation } from "../../../redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";
import CourseCard from "../Course/CourseCard";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/courseApi";

type Props = {
  user: any;
  setActive: number;
};

const Profile: FC<Props> = ({ user, setActive }) => {
  const [scroll, setScroll] = useState(false);
  const [active, setActiveState] = useState(1); // Rename the variable to 'activeState'
  const [avatar, setAvatar] = useState<string | null>(null); // Set the initial state to null or default avatar URL
  const [logout, setLogout] = useState(false);
  const [courses, setCourses] = useState<any[]>([]);
  const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});

  // Use the logout mutation instead of query
  const [logoutMutation] = useLogoutMutation();

  // Handle avatar set when the user changes or loads
  useEffect(() => {
    if (user) {
      // Check if the user has an avatar and set it
      if (user.avatar) {
        setAvatar(user.avatar.url); // Set avatar URL from user data
      }
    }
  }, [user]);

  // Logout handler with state update and redirection
  const logOutHandler = async () => {
    setLogout(true);
    await signOut(); // Sign out the user using NextAuth
    logoutMutation(); // Trigger the logout mutation to update the state
    redirect("/"); // Redirect user to home or login page after logout
  };

  // Handle scroll for sticky sidebar
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  // Handle setting courses data based on user's enrolled courses
  useEffect(() => {
    if (data) {
      const filteredCourses = user.courses
        .map((userCourse: any) =>
          data.courses.find((course: any) => course._id === userCourse._id)
        )
        .filter((course: any) => course !== undefined);
      setCourses(filteredCourses);
    }
  }, [data]);

  return (
    <div className="w-[85%] flex mx-auto">
      <div
        className={`w-[300px] 800:w-[450px] dark:bg-slate-900 bg-opacity-90 bg-white border dark:border-[#ffffff1d] border-[#00000014] rounded-[5px] shadow-lg dark:shadow-sm mt-[80px] mb-[80px] sticky ${
          scroll ? "top-[120px]" : "top-[30px]"
        } left-[30px]`}
      >
        <SideBarProfile
          user={user}
          active={active}
          avatar={avatar}
          setactive={setActiveState} // Pass setActive correctly
          logoutHandler={logOutHandler}
        />
      </div>
      {active === 1 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <ProfileInfo avatar={avatar} user={user} />
        </div>
      )}
      {active === 2 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <ChangePassword />
        </div>
      )}
      {active === 3 && (
        <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8">
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] 1g:grid-cols-2 1g:gap-(25px] xl:grid-cols-3 xl: gap- [35]">
            {courses &&
              courses.map((item: any, index: number) => (
                <CourseCard item={item} key={index} isProfile={true} />
              ))}
          </div>
          {courses.length === 0 && (
            <h1 className="text-center text-[18px] font-Poppins">
              You don't have any purchased courses!
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
