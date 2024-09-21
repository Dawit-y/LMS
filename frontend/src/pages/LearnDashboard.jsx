import { useState } from "react";

const LearnDashbaord = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLessons = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div class="mt-24">
        <div class="mx-auto max-w-screen-xl px-2 pb-6 sm:px-6 lg:px-4 lg:pb-16">
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-gray-600">
              Machine Learning
            </h1>
          </div>
          <div class="overflow-hidden rounded-lg bg-white shadow-lg border border-t-gray-200">
            <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside class="py-6 lg:col-span-3">
                <div class="space-y-1">
                  <div>
                    <div
                      className="bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700 group border-l-4 px-3 py-2 flex items-center justify-between text-sm font-medium cursor-pointer"
                      onClick={toggleLessons}
                    >
                      <span className="truncate">Module 1</span>
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
                        <li className="text-sm text-gray-700">Lesson 1</li>
                        <li className="text-sm text-gray-700">Lesson 2</li>
                        <li className="text-sm text-gray-700">Lesson 3</li>
                        <li className="text-sm text-gray-700">Lesson 4</li>
                        <li className="text-sm text-gray-700">Lesson 5</li>
                        <li className="text-sm text-gray-700">Lesson 6</li>
                      </ul>
                    )}
                  </div>
                </div>
              </aside>

              <div class="divide-y divide-gray-200 lg:col-span-9">
                <div class="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <h2 class="text-lg font-medium leading-6 text-gray-900">
                      Lesson 1 Title
                    </h2>
                    <p class="mt-1 text-sm text-gray-500">
                      Content of lesson one
                    </p>
                  </div>
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
