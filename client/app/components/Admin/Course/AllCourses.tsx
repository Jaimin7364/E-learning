import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Modal } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { useTheme } from "next-themes";
import { FaEdit } from "react-icons/fa";
import {
  useDeleteCoursesMutation,
  useGetAllCoursesQuery,
} from "@/redux/features/courses/courseApi";
import Loader from "../../Loader/Loader";
import { format } from "timeago.js";
import { styles } from "@/app/styles/style";
import { error } from "console";
import toast from "react-hot-toast";
import Link from "next/link";

type Props = {};

const AllCourses = (props: Props) => {
  const { isLoading, data, refetch } = useGetAllCoursesQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [deleteCourse, { isSuccess, error: errorDelete }] =
    useDeleteCoursesMutation({});

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "title", headerName: "Course Title", flex: 1 },
    { field: "ratings", headerName: "Ratings", flex: 0.5 },
    { field: "purchased", headerName: "Purchased", flex: 0.5 },
    { field: "created_at", headerName: "Created At", flex: 0.5 },
    {
      field: "  ",
      headerName: "Edit",
      flex: 0.2,
      renderCell: (params: any) => {
        return (
          <>
            <Link href={`/admin/edit-course/${params.roew.id}`}>
              <FaEdit className="dark:text-white text-black" size={20} />
            </Link>
          </>
        );
      },
    },
    {
      field: " ",
      headerName: "Delete",
      flex: 0.2,
      renderCell: (params: any) => {
        return (
          <>
            <Button
              onClick={() => {
                setCourseId(params.row.id);
                setOpen(!open);
              }}
            >
              <AiOutlineDelete
                className="dark:text-white text-black"
                size={20}
              />
            </Button>
          </>
        );
      },
    },
  ];
  const rows: any = [];
  {
    data &&
      data.courses.forEach((item: any) => {
        rows.push({
          id: item._id,
          title: item.name,
          ratings: item.ratings,
          purchased: item.purchased,
          created_at: format(item.createdAt),
        });
      });
  }

  useEffect(() => {
    if (isSuccess) {
      refetch();
      setOpen(false);
      toast.success("Course Deleted Successfully");
    }
    if (error) {
      const errorMessage = error as any;
      toast.error(errorMessage.data.message);
    }
  }, [isSuccess, error]);

  const handleDelete = async () => {
    const id = courseId;
    await deleteCourse(id);
  };

  return (
    <div className="mt-[120px]">
      {isLoading ? (
        <Loader />
      ) : (
        <Box m="20px">
          <Box
            m="40px 0 0 0"
            height="80vh"
            sx={{
              "& MuiDataGrid-root": {
                border: "none",
                outline: "none",
              },
              "&.css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-sortIcon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "&.MuiDataGrid-row": {
                color: theme === "dark" ? "#fff" : "#000",
                borderBottom:
                  theme === "dark"
                    ? "1px solid #ffffff30!important"
                    : "1px solid #ccc!important",
              },
              "& .MuiTablePagination-root": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "&.name-column--cell": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& MuiDataGrid-columnHeaders": {
                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
                borderBottom: "none",
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& MuiDataGrid-virtualScroller": {
                backgroundColor: theme === "dark" ? "#1F2A40" : "#F2F0F0",
              },
              "& .MuiDataGrid-footerContainer": {
                color: theme === "dark" ? "#fff" : "#000",
                borderTop: "none",
                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
              },
              "& MuiCheckbox-root": {
                color:
                  theme === "dark" ? `#b7ebde !important` : `#000 !important`,
              },
              "& MuiDataGrid-toolbarContainer MuiButton-text": {
                color: `#fff !important`,
              },
            }}
          >
            <DataGrid rows={rows} columns={columns} checkboxSelection />
          </Box>
          {open && (
            <Modal
              open={open}
              onClose={() => setOpen(!open)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 ">
                {/* <Box
                  className="w-[400px] dark:bg-[#1F2A40] dark:text-white p-5"
                  sx={{
                    "& .input": {
                      backgroundColor: theme === "dark" ? "#1F2A40" : "#F2F0F0",
                      color: theme === "dark" ? "#fff" : "#000",
                    },
                    "& .input::placeholder": {
                      color: theme === "dark" ? "#fff" : "#000",
                    },
                  }}
                > */}
                <h1 className={`${styles.title}`}>Are you sure?</h1>
                <div className="flex justify-between mt-5">
                  <div
                    onClick={() => setOpen(!open)}
                    className={`${styles.button} dark:bg-[#57c7a3] dark:border dark:border-[#ffffff6c]`}
                  >
                    Cancel
                  </div>
                  <div
                    onClick={handleDelete}
                    className={`${styles.button} dark:bg-[#57c7a3] dark:border dark:border-[#ffffff6c]`}
                  >
                    Delete
                  </div>
                </div>
              </Box>
            </Modal>
          )}
        </Box>
      )}
    </div>
  );
};
