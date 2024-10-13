import useAuth from "../hooks/useAuth";
import { useQuery, useQueries } from "@tanstack/react-query";
import axios from "../api/api";

const fetchEnrollments = async (userId) => {
  const res = await axios.get(`/enrollments/students/${userId}`);
  return res.data;
};

const fetchCourseById = async (courseId) => {
  const res = await axios.get(`/courses/${courseId}`);
  return res.data;
};

const MyLearnings = () => {
  const { user } = useAuth();

  // Fetch the student's enrollments
  const studentEnrollmentsQuery = useQuery({
    queryKey: ["studentsEnrollments", user.id],
    queryFn: () => fetchEnrollments(user.id),
    enabled: !!user.id, // Ensure query runs only if user ID is available
  });

  // Use `useQueries` to fetch all courses in parallel based on enrollment data
  const courseQueries = useQueries({
    queries:
      studentEnrollmentsQuery.data?.map((enrollment) => ({
        queryKey: ["course", enrollment.courseId],
        queryFn: () => fetchCourseById(enrollment.courseId),
        enabled: !!enrollment.courseId, // Avoid unnecessary queries
      })) || [],
  });

  if (studentEnrollmentsQuery.isLoading) {
    return <div className="mt-1">Loading Enrollments...</div>;
  }

  if (studentEnrollmentsQuery.isError) {
    return <div className="mt-1">Failed to load enrollments.</div>;
  }

  if (courseQueries.some((query) => query.isLoading)) {
    return <div className="mt-1">Loading Courses...</div>;
  }

  return (
    <div className="mt-1 w-full py-2">
      <h1 className="text-3xl text-gray-800 mx-auto w-full my-4">
        My Learnings
      </h1>
      {courseQueries.map((courseQuery, index) => {
        if (courseQuery.isError) {
          return (
            <div key={index} className="w-full p-6 text-red-500">
              Failed to load course.
            </div>
          );
        }

        const course = courseQuery.data;
        const enrollment = studentEnrollmentsQuery.data[index];

        return (
          <div
            key={enrollment.id}
            className="w-full flex items-center justify-between shadow-md p-6 border border-gray-300 rounded-md mb-2"
          >
            <div className="flex flex-col items-center justify-center gap-2 divide-y-2">
              <h1 className="text-gray-800 text-xl">{course.name}</h1>
              <h6 className="text-gray-800 text-lg">{course.description}</h6>
            </div>
            <div className="flex flex-col items-center justify-center gap-2  border-l border-gray-400 px-2">
              <small className="text-gray-800 text-sm">
                {new Date(course.createdAt).toLocaleDateString()}
              </small>
              <div>
                <h1 className="text-gray-800 text-sm">
                  {course.modules.length} modules
                </h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyLearnings;
