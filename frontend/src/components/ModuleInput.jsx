import { useState } from "react";
import axios from "../api/api";
import { useMutation } from "@tanstack/react-query";

const ModuleInput = ({ courseId, onModuleAdded }) => {
  const [inputValue, setInputValue] = useState("");

  // Mutation to create module
  const moduleMutation = useMutation({
    mutationFn: async (moduleData) => {
      const res = await axios.post(`/modules`, moduleData);
      return res.data;
    },
    onSuccess: (newModule) => {
      onModuleAdded(newModule); // Add new module to the UI
      setInputValue(""); // Clear the input after successful creation
    },
    onError: (error) => {
      console.error("Error creating module:", error);
    },
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      moduleMutation.mutate({ name: inputValue, courseId });
    }
  };

  return (
    <div className="mb-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border border-teal-700 rounded p-2 w-full outline-0 text-gray-800"
        placeholder="Enter module name"
        disabled={moduleMutation.isPending}
      />
      {moduleMutation.isPending && <p>Creating module...</p>}
    </div>
  );
};

export default ModuleInput;
