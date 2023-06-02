import React from "react";

export const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="mx-auto grid max-w-[1240px] lg:grid-cols-3">
        <div className="my-4 lg:col-span-2">
          <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="m-4">
          <div className="flex w-full flex-col items-center justify-between sm:flex-row">
            <input
              className="flex w-full rounded-md p-3 text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="my-6 ml-4 w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black">
              Get Started
            </button>
          </div>
          <p>
            We care about the protection of your data. Read out{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
