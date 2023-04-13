import React from "react";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="bg-slate-600 w-full h-screen flex flex-col gap-8 md-gap-10 justify-center items-center p-5">
      <h1 className="text-6xl font-bold text-yellow-100">Welcome!</h1>
      <p className="text-3xl">
        Assemble your very own crew of Pac-Mans (Pac-Men?)!
      </p>
      <img
        src="/src/images/pacmans.jpg"
        width={600}
        className="rounded xs:max-w-xs md: max-w-full"
      />
      <Link to="/create-crew">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Get started!
        </button>
      </Link>
    </div>
  );
};

export default App;
