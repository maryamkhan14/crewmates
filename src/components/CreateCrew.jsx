import { supabase } from "../client";
import { useState } from "react";
import React from "react";
import Pacman from "./Pacman";

const CreateCrew = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("red");
  const createPost = async () => {
    await supabase
      .from("Members")
      .insert({
        name: name,
        color: color,
      })
      .select();
  };
  const submitForm = (e) => {
    e.preventDefault();
    createPost();
  };
  return (
    <div className="bg-slate-600 w-full h-full flex flex-col gap-8 md-gap-10 justify-center items-center p-5">
      <form className="flex items-center gap-3 flex-col md:flex-row p-5">
        <Pacman color={color} />
        <div className="m-3">
          <label htmlFor="name" className="pr-3">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 bg-slate-200 rounded text-slate-800"
          />
        </div>
        <div className="m-3">
          <label htmlFor="name" className="pr-3">
            Color
          </label>
          <select
            name="color"
            id="color"
            className="p-2 bg-slate-200 rounded text-slate-800"
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="red">red</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
          </select>
        </div>
        <div className="m-3">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-min"
            onClick={submitForm}
          >
            Create!
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCrew;
