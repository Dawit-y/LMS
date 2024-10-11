import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "../api/api";

const ModuleDropdown = ({ module, setSelectedModule }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleLessons = () => {
    setIsOpen(!isOpen);
  };

  const moduleLessonsQuery = useQuery({
    queryKey: ["moduleLessons", module.id],
    queryFn: async () => {
      const res = await axios.get(`/modules/${module.id}/lessons`);
      return res.data;
    },
    staleTime: 0,
  });

  return (
    <div>
      <div
        className="bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700 group border-l-4 px-3 py-2 flex items-center justify-between text-sm font-medium cursor-pointer"
        onClick={toggleLessons}
      >
        <span className="truncate">{module.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {/* Lessons List */}
      {isOpen && (
        <ul className="pl-6 mt-2 space-y-2 transition-all duration-300 ease-in-out overflow-hidden">
          {moduleLessonsQuery?.data?.map((lesson, index) => (
            <LessonElement key={index} lesson={lesson} />
          ))}
          <li
            onClick={() => setSelectedModule(module)}
            className="text-sm text-white font-bold h-8 mb-1 mr-1 bg-teal-500 rounded-lg flex items-center justify-center p-4 hover:bg-teal-400 transition-colors ease-in-out delay-75 cursor-pointer"
          >
            Add Lesson
          </li>
        </ul>
      )}
    </div>
  );
};

export default ModuleDropdown;

const LessonElement = ({ lesson }) => {
  return (
    <li className="text-sm text-teal-700 font-bold h-8 mb-1 mr-1 bg-teal-100 rounded-sm flex items-center justify-start px-2 py-1 hover:bg-teal-50 transition-colors ease-in-out delay-75 cursor-pointer">
      {lesson.name}
    </li>
  );
};
