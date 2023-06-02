import React from "react";
import { BsPersonFill, BsPeopleFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

const Cards = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-3">
        <div className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-105">
          <BsPersonFill
            className="mx-auto mt-[-3rem] w-20 bg-white"
            size={70}
          />
          <h2 className="py-8 text-center text-2xl font-bold">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">500 GB Storage</p>
            <p className="mx-8 border-b py-2">1 User Allowed</p>
            <p className="mx-8 border-b py-2">Send up to 2 GB</p>
          </div>
          <button className="my-6 mx-auto w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black">
            Start Trial
          </button>
        </div>
        <div className="my-8 flex w-full flex-col rounded-lg bg-gray-100 p-4 shadow-xl duration-300 hover:scale-105 md:m-0">
          <BsPeopleFill
            className="mx-auto mt-[-3rem] w-20 bg-white"
            size={70}
          />
          <h2 className="py-8 text-center text-2xl font-bold">Partnership</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">1 TB Storage</p>
            <p className="mx-8 border-b py-2">3 Users Allowed</p>
            <p className="mx-8 border-b py-2">Send up to 10 GB</p>
          </div>
          <button className="my-6 mx-auto w-[200px] rounded-md bg-black py-3 font-medium text-[#03df9e]">
            Start Trial
          </button>
        </div>
        <div className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-105">
          <IoIosPeople
            className="mx-auto mt-[-3rem] w-20 bg-transparent"
            size={70}
          />
          <h2 className="py-8 text-center text-2xl font-bold">Single User</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">5 TB Storage</p>
            <p className="mx-8 border-b py-2">10 Users Allowed</p>
            <p className="mx-8 border-b py-2">Send up to 20 GB</p>
          </div>
          <button className="my-6 mx-auto w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
