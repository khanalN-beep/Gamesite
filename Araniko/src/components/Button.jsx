import React, { useContext } from "react";
import { FormContext } from "../FormContent";

const Button = () => {
  const { formData, updateFormData } = useContext(FormContext);

  return (
    <div className="p-10 max-w-sm mx-auto bg-white ">
      <form className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Your Username"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.username}
            onChange={updateFormData}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.email}
            onChange={updateFormData}
          />
        </div>

        <div>
          <label
            htmlFor="channel"
            className="block text-sm font-medium text-gray-700"
          >
            Channel
          </label>
          <input
            type="text"
            id="channel"
            name="channel"
            placeholder="Your Channel"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.channel}
            onChange={updateFormData}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 text-black font-semibold rounded cursor-pointer bg-blue-300 hover:bg-amber-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Button;
