import { useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/api";
import { useMutation } from "@tanstack/react-query";

const createCreator = async (data) => {
  try {
    const res = await axios.post("/creators", data);
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error creating creator account"
    );
  }
};

export default function Modal({ setShowModal, setCreatorId }) {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    type: "personal",
    companyName: "",
    phone: "",
    address: "",
  });

  const creatorMutation = useMutation({
    mutationFn: createCreator,
    mutationKey: ["createCreator"],
    onSuccess: (data) => {
      setCreatorId(data.id)
      setShowModal(false);
      console.log("Creator account created successfully");
    },
    onError: (error) => {
      console.error("Error creating creator account:", error.message);
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.type === "company" && !formData.companyName) {
      alert("Company name is required for a company account");
      return;
    }
    creatorMutation.mutate({
      ...formData,
      userId: user.id,
    });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h6 className="text-xl text-gray-700 font-semibold">
                Fill Some Information to be Course Creator
              </h6>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative flex-auto">
              <div className="rounded-lg shadow">
                <div className="p-6 space-y-6">
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-6">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="type"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          Type of Account
                        </label>
                        <select
                          name="type"
                          id="type"
                          value={formData.type}
                          onChange={handleInputChange}
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          required
                        >
                          <option value="company">Company</option>
                          <option value="personal">Personal</option>
                        </select>
                      </div>

                      {/* Conditionally render company name input based on account type */}
                      {formData.type === "company" && (
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="companyName"
                            className="text-sm font-medium text-gray-900 block mb-2"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            id="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            placeholder="Company Name"
                          />
                        </div>
                      )}

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          placeholder="+251965..."
                          required
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="address"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          placeholder="Addis Ababa, Ethiopia"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmit} // Submit the form
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
