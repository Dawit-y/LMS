import { useState } from "react";

const ModuleDropdown = ({ module }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLessons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700 group border-l-4 px-3 py-2 flex items-center justify-between text-sm font-medium cursor-pointer"
        onClick={toggleLessons}
      >
        <span className="truncate">{module.name}</span>
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
          <li className="text-sm text-gray-700 h-8 mb-1 mr-1 bg-gray-200 rounded-sm flex items-center justify-start px-2 py-1 hover:bg-gray-100 transition-colors ease-in-out delay-75">
            Something In ethiopia
          </li>
          <li className="text-sm text-gray-700 h-8 mb-1 mr-1 bg-gray-200 rounded-sm flex items-center justify-start px-2 py-1 hover:bg-gray-100 transition-colors ease-in-out delay-75">
            Something In ethiopia
          </li>
          <li className="text-sm text-gray-700 h-8 mb-1 mr-1 bg-gray-200 rounded-sm flex items-center justify-start px-2 py-1 hover:bg-gray-100 transition-colors ease-in-out delay-75">
            Something In ethiopia
          </li>
        </ul>
      )}
    </div>
  );
};

export default ModuleDropdown;
