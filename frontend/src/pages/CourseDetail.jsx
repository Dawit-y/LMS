import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../api/api";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

const enroll = async (data) => {
  try {
    const res = await axios.post("enrollments", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const CourseDetail = () => {
  const location = useLocation();
  const course = location.state.course;
  const { user } = useAuth();
  const navigate = useNavigate();
  const { mutateAsync: enrollmentMutation, isPending } = useMutation({
    mutationKey: ["enrollments", { courseId: course.id, studentId: user.id }],
    mutationFn: enroll,
    onSuccess: () => {
      navigate("learn");
    },
  });
  const handleEnrollment = async () => {
    try {
      await enrollmentMutation({
        courseId: course.id,
        studentId: user.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mt-16 bg-white h-screen">
        <div className="px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
          <div className="py-8 my-5 mx-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img
                      className="w-full h-full object-cover"
                      src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                      alt="Product Image"
                    />
                  </div>
                  <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                      <button
                        onClick={handleEnrollment}
                        className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        {isPending ? "Enrolling...." : "Enroll"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {course.name}
                  </h2>
                  <p className="text-gray-900 text-sm mb-4">
                    {course.description}
                  </p>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-900">Price:</span>
                      <span className="text-gray-900">$29.99</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        Availability:
                      </span>
                      <span className="text-gray-900">In Stock</span>
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-gray-900">
                      Course Description:
                    </span>
                    <p className="text-gray-900 text-sm mt-2">
                      {course.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
