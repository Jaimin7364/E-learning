"use client";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import React from "react";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import EditCategories from "@/app/components/Admin/Customization/EditCategories";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="S3Cloud Hub - Admin"
          description="S3Cloud Hub is a platform for students to learn and get help from teachers"
          keyword="Programming, MERN, Redux, Machine Learning"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%] ">
            <DashboardHero isDashboard={true} />
            <EditCategories />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};
export default page;
