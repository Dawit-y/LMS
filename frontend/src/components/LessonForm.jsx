import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/api";

const LessonForm = ({ selectedModule }) => {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const createLesson = async (lessonData) => {
    const response = await axios.post("lessons", lessonData);
    return response.data;
  };

  const lessonMutation = useMutation({
    mutationKey: ["createLesson"],
    mutationFn: createLesson,
    onSuccess: (data) => {
      console.log("Lesson added successfully!");
      reset();
      queryClient.invalidateQueries(["moduleLessons", selectedModule.id]);
    },
    onError: (error) => {
      console.error("Error adding lesson:", error);
      console.log("Failed to add lesson.");
    },
  });

  useEffect(() => {
    if (selectedModule) {
      reset();
    }
  }, [selectedModule, reset]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("url", data.url);
    formData.append("text", data.text);

    if (data.file[0]) {
      formData.append("file", data.file[0]);
    }
    formData.append("moduleId", selectedModule.id);
    lessonMutation.mutate(formData);
  };

  return (
    <>
      {selectedModule ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h6 className="text-xl text-gray-800 mb-4 font-bold">
            Add a Lesson for {selectedModule.name}
          </h6>
          <div className="space-y-6 font-sans max-w-md mx-auto">
            {/* Lesson title */}
            <div>
              <label className="mb-2 text-sm text-black block" htmlFor="name">
                Lesson Title
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter lesson title"
                className="px-4 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* YouTube URL */}
            <div>
              <label className="mb-2 text-sm text-black block" htmlFor="url">
                YouTube Video URL
              </label>
              <input
                type="url"
                {...register("url", { required: true })}
                placeholder="https://www.youtube.com/"
                className="px-4 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* File upload */}
            <div>
              <label className="mb-2 text-sm text-black block" htmlFor="file">
                Upload File
              </label>
              <input
                type="file"
                {...register("file")}
                className="px-4 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Lesson text */}
            <div>
              <label className="mb-2 text-sm text-black block" htmlFor="text">
                Lesson Text
              </label>
              <textarea
                {...register("text", { required: true })}
                rows={6}
                placeholder="Enter lesson text"
                className="px-4 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="px-4 py-3 text-sm bg-teal-500 text-white font-bold rounded w-full hover:bg-teal-600 transition duration-200"
                disabled={lessonMutation.isPending}
              >
                {lessonMutation.isPending ? "Submitting..." : "Add Lesson"}
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="text-center mt-6">
          <h1 className="text-lg text-gray-800">
            Please select a module to add a lesson.
          </h1>
        </div>
      )}
    </>
  );
};

export default LessonForm;
