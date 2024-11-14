"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import CourseAnalytics from "@/app/components/Admin/Analytics/CourseAnalytics";

type Props = {};
const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="S3Cloud Hub - Admin"
        description="S3Cloud Hub is a platform for students to learn and get help from teachers"
        keyword="Prograaming, MERN, Redux, Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[16%) w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%] ">
          <DashboardHeader />
          <CourseAnalytics />
        </div>
      </div>
    </div>
  );
};
export default page; // no error