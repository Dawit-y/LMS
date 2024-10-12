import { useQuery } from "@tanstack/react-query";
import axios from "../api/api";

const MyCoursesCreated = ({ creatorId }) => {
  const creatorCoursesQuery = useQuery({
    queryKey: ["creatorCourses"],
    queryFn: async () => {
      const res = await axios.get(`/creators/${creatorId}/courses`);
      return res.data;
    },
  });
  {
    creatorCoursesQuery.isLoading && <div className="mt-1">Loading</div>;
  }
  return (
    <div className="mt-5 mb-5 w-full">
      <h1 className="mb-2 text-gray-800 text-3xl mx-auto">My courses</h1>
      {creatorCoursesQuery.data?.map((course) => (
        <div
          key={course.id}
          className="w-full flex items-center justify-between shadow-md p-6 border border-gray-300 rounded-md"
        >
          <div className="flex flex-col items-center justify-center gap-2 divide-y-2">
            <h1 className="text-gray-800 text-xl">{course.name}</h1>
            <h6 className="text-gray-800 text-lg">{course.description}</h6>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <small className="text-gray-800 text-sm">{course.createdAt}</small>
            <div>
              <h1 className="text-gray-800 text-sm">2 modules</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCoursesCreated;
