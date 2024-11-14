"use client";
import { useRouter } from "next/router";
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";

const Page = () => {
  const router = useRouter();
  const { id } = router.query; // This retrieves the course ID from the URL

  if (!id) {
    return <div>Loading...</div>; // You can handle loading state here
  }

  return (
    <div>
      <CourseDetailsPage id={Array.isArray(id) ? id[0] : id} />
    </div>
  );
};

export default Page;
