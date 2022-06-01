import React from "react";

const RegisterHook = () => {
  return (
    <div className="max-w-[300px] mx-auto my-10">
      <div className="flex flex-col gap-3">
        <label htmlFor="username" className="cursor-pointer font-medium">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          className="p-4 border border-gray-100 rounded-lg bg-white outline-none transition-all focus:border-blue-500"
        />
        <p className="text-red-500 text-sm">Please enter your username</p>
      </div>
    </div>
  );
};

export default RegisterHook;
