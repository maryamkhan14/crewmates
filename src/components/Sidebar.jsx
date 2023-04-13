import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="md:min-w-1/5 md:max-w-1/4 bg-gray-dark flex-col justify-items-center items-center text-center p-2  bg-slate-900">
      <h1 className="text-4xl xl:text-5xl pb-5">
        <span className="text-blue-300">C</span>
        <span className="text-pink-400">R</span>
        <span className="text-blue-500">E</span>
        <span className="text-green-400">W</span>
        <span className="text-yellow-300">M</span>
        <span className="text-purple-500">A</span>
        <span className="text-white">T</span>
        <span className="text-orange-300">E</span>
        <span className="text-red-400">S</span>
      </h1>
      <div></div>
      <div className="pt-5 gap-5 text-2xl flex flex-col">
        <Link
          className="group text-white transition-all duration-300 ease-in-out"
          to="/"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-300 bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] transition-all duration-500 ease-out">
            Home
          </span>
        </Link>
        <Link
          className="group text-white transition-all duration-300 ease-in-out"
          to="/create-crew"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-300 bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] transition-all duration-500 ease-out">
            Create your crew!
          </span>
        </Link>
        <Link
          className="group text-white transition-all duration-300 ease-in-out"
          to="/crew"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-300 bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] transition-all duration-500 ease-out">
            See the crew!
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
