import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/api";
import useAuth from "../hooks/useAuth";

const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const fetchCourses = async () => {
  try {
    const res = await axios.get("courses");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const CourseList = () => {
  const { user } = useAuth();
  const { data, isLoading, isError, error } = useQuery({
    queryFn: fetchCourses,
    queryKey: ["courses"],
  });
  const navigate = useNavigate();
  const handleCourseClick = async (course) => {
    try {
      const response = await axios.get(`enrollments/${course.id}/${user.id}`);
      if (response.data) {
        navigate(`${course.id}/learn`, { state: { course } });
      }
    } catch (error) {
      navigate(`${course.id}`, { state: { course } });
    }
  };
  return (
    <>
      <div className="mt-16 bg-white h-auto min-h-screen">
        <div className="px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
          <h1 className="text-4xl font-light text-black mx-auto mt-5">
            All Courses
          </h1>
          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
              {isLoading
                ? "Loading Courses..."
                : data.map((course) => (
                    <div
                      className="rounded overflow-hidden shadow-lg"
                      key={course.id}
                      onClick={() => handleCourseClick(course)}
                    >
                      <a href="#"></a>
                      <div className="relative">
                        <a href="#">
                          <img
                            className="w-full"
                            src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                            alt="Sunset in the mountains"
                          />
                          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        </a>
                      </div>
                      <div className="px-6 py-4">
                        <h3 className="font-semibold text-lg inline-block text-pink-800">
                          {course.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {truncateText(course.description, 150)}
                        </p>
                      </div>
                      <div className="px-6 py-4 flex flex-row items-center">
                        <span
                          href="#"
                          className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <svg
                            height="13px"
                            width="13px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
          c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
          c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          <span className="ml-1">{course.createdAt}</span>
                        </span>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseList;
