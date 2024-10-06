import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/api";
import { useQuery } from "@tanstack/react-query";

const fetchCourse = async (courseId) => {
  try {
    const res = await axios.get(`courses/${courseId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const fetchCourseModules = async (courseId) => {
  try {
    const res = await axios.get(`courses/${courseId}/modules`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const LearnDashbaord = () => {
  const { id: courseId } = useParams();
  const courseQuery = useQuery({
    queryKey: ["course", courseId],
    queryFn: () => fetchCourse(courseId),
  });
  const modulesQuery = useQuery({
    queryKey: ["modules", courseId],
    queryFn: () => fetchCourseModules(courseId),
  });

  const [lesson, setLesson] = useState(null);
  const handleLessonSelect = (lesson) => {
    setLesson(lesson);
  };
  return (
    <>
      <div class="mt-24">
        <div class="mx-auto max-w-screen-xl px-2 pb-6 sm:px-6 lg:px-4 lg:pb-16">
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-gray-600">
              {courseQuery.isLoading ? "Loading..." : courseQuery.data.name}
            </h1>
          </div>
          <div class="overflow-hidden rounded-lg bg-white shadow-lg border border-t-gray-200 h-screen">
            <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside class="py-2 lg:col-span-3">
                <div class="space-y-1">
                  {modulesQuery.isLoading
                    ? "Loading..."
                    : modulesQuery.data.map((module, idx) => (
                        <Dropdown
                          key={module.id}
                          module={module}
                          index={idx + 1}
                          onLessonSelect={handleLessonSelect}
                        />
                      ))}
                </div>
              </aside>

              <div class="divide-y divide-gray-200 lg:col-span-9 h-screen">
                <div class="py-6 px-4 sm:p-6 lg:pb-8">
                  {lesson && (
                    <div>
                      <h2 class="text-lg font-medium leading-6 text-gray-900">
                        {lesson.name}
                      </h2>
                      <p class="mt-1 text-sm text-gray-500">{lesson.text}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnDashbaord;

const fetchModuleLessons = async (moduleId) => {
  try {
    const res = await axios.get(`modules/${moduleId}/lessons`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const Dropdown = ({ module, index, onLessonSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLessons = () => {
    setIsOpen(!isOpen);
  };

  const moduleId = module.id;
  const lessonQuery = useQuery({
    queryKey: ["lessons", moduleId],
    queryFn: () => fetchModuleLessons(moduleId),
    enabled: isOpen,
  });

  return (
    <div>
      <div
        className="bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700 group border-l-4 px-3 py-2 flex items-center justify-between text-sm font-medium cursor-pointer"
        onClick={toggleLessons}
      >
        <span className="truncate">{`Module ${index}: ${module.name}`}</span>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>

      {/* Lessons List */}
      {isOpen && (
        <ul className="pl-6 mt-2 space-y-2 transition-all duration-300 ease-in-out overflow-hidden">
          {lessonQuery.isLoading && <li>Loading lessons...</li>}
          {lessonQuery.isError && <li>Error loading lessons.</li>}
          {lessonQuery.data &&
            lessonQuery.data.map((lesson) => (
              <li
                key={lesson.id}
                onClick={() => onLessonSelect(lesson)}
                className="text-sm text-gray-700 h-8 mb-1 mr-1 bg-gray-200 rounded-sm flex items-center justify-start px-2 py-1 hover:bg-gray-100 transition-colors ease-in-out delay-75"
              >
                {lesson.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
