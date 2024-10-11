import { useState } from "react";
import axios from "../api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const ModuleInput = ({ courseId }) => {
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();

  const moduleMutation = useMutation({
    mutationFn: async (moduleData) => {
      const res = await axios.post(`/modules`, moduleData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["courseModules"]);
      setInputValue(""); 
    },
    onError: (error) => {
      console.error("Error creating module:", error);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      await moduleMutation.mutateAsync({ name: inputValue, courseId });
    }
  };

  return (
    <div className="mb-2 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-around w-full "
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-teal-700 rounded p-2 w-full outline-0 text-gray-800"
          placeholder="Enter module name"
          disabled={moduleMutation.isPending}
        />
        <span>
          <button
            type="submit"
            className="px-3 py-2 bg-teal-500 text-white rounded-md ml-2"
            disabled={!inputValue.trim() || moduleMutation.isPending} 
          >
            Add
          </button>
        </span>
      </form>
      {moduleMutation.isPending && <p>Creating module...</p>}
    </div>
  );
};

export default ModuleInput;
