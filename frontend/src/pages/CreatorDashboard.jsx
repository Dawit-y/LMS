import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import useAuth from "../hooks/useAuth";
import axios from "../api/api";
import { useMutation } from "@tanstack/react-query";

import ModuleInput from "../components/ModuleInput";
import ModuleDropdown from "../components/ModuleDropdown";

const createCourse = async (courseData) => {
  const res = await axios.post("/courses", courseData);
  return res.data;
};

const CreatorDashboard = () => {
  const [modules, setModules] = useState([]); // Store created modules
  const [showModal, setShowModal] = useState(false);
  const [creatorId, setCreatorId] = useState(null);
  const [course, setCourse] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const checkIfCreator = async () => {
      try {
        const res = await axios.get(`/creators/user/${user.id}`);
        if (res.status === 200 && res.data) {
          setCreatorId(res.data.id);
        } else {
          setShowModal(true);
        }
      } catch (error) {
        console.error("Error checking creator status:", error);
        setShowModal(true);
      }
    };

    if (user) {
      checkIfCreator();
    }
  }, [user]);

  const addModuleToSidebar = (newModule) => {
    setModules((prevModules) => [...prevModules, newModule]);
  };

  const addDropdown = () => {
    setModules((prevModules) => [
      ...prevModules,
      <ModuleInput
        key={prevModules.length}
        courseId={course.id}
        onModuleAdded={addModuleToSidebar}
      />,
    ]);
  };

  // Mutation for creating a course
  const courseMutation = useMutation({
    mutationFn: createCourse,
    onSuccess: (data) => {
      setCourse(data); // Store course data after successful creation
    },
    onError: (error) => {
      console.error("Error creating course:", error);
    },
  });

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const courseData = {
      name: formData.get("name"),
      description: formData.get("description"),
      image: formData.get("thumbnail"),
      creatorId: creatorId,
    };
    courseMutation.mutate(courseData); // Submit form data
  };

  return (
    <>
      <div className="mt-24">
        {showModal && (
          <Modal setShowModal={setShowModal} setCreatorId={setCreatorId} />
        )}

        <div className="mx-auto max-w-screen-xl px-2 pb-6 sm:px-6 lg:px-4 lg:pb-16">
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-gray-600">Create Course</h1>
          </div>

          {!course ? (
            // Render form if course is not created
            <div className="w-full mt-5">
              <form
                className="mx-auto space-y-4 font-[sans-serif] text-[#333] mt-5 w-full"
                onSubmit={handleCourseSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Course Title"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 outline-none"
                  required
                />

                <input
                  type="file"
                  name="thumbnail"
                  placeholder="Upload thumbnail image for the course"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 outline-none"
                  required
                />

                <textarea
                  name="description"
                  placeholder="Enter description for the course"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 outline-none"
                  required
                  rows={6}
                />

                <button
                  type="submit"
                  className="mt-4 px-6 py-2.5 text-sm bg-teal-600 hover:bg-teal-200 text-white rounded-lg"
                  disabled={courseMutation.isLoading}
                >
                  {courseMutation.isLoading ? "Saving..." : "Save"}
                </button>
              </form>
            </div>
          ) : (
            // Render success message and course details
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-700">
                Course Created Successfully!
              </h2>
              <p className="text-lg text-gray-700">
                Course Title: {course.name}
              </p>
              <p className="text-lg text-gray-700">
                Description: {course.description}
              </p>
            </div>
          )}

          {/* Module creation dashboard - only render if course is successfully created */}
          {course && (
            <div
              className={`overflow-hidden rounded-lg bg-white shadow-lg border border-t-gray-200 h-screen mt-4 transform transition-transform ${
                course ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                <aside className="py-2 lg:col-span-3">
                  <div
                    className="bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700 group border-l-4 px-3 py-4 flex items-center justify-center text-sm font-medium cursor-pointer mb-2"
                    onClick={addDropdown}
                  >
                    <span>Add New Module +</span>
                  </div>
                  <div className="space-y-1">
                    {modules.map((module, index) => (
                      <ModuleDropdown key={index} module={module} />
                    ))}
                  </div>
                </aside>

                <div className="divide-y divide-gray-200 lg:col-span-9 h-screen">
                  <div className="py-6 px-4 sm:p-6 lg:pb-8">
                    <div>
                      <h2 className="text-lg font-medium leading-6 text-gray-900">
                        Title of the Lesson
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        Content of the Lesson
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CreatorDashboard;
