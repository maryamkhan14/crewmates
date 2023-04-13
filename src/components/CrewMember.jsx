import React from "react";
import Pacman from "./Pacman";
import { supabase } from "../client";

import { useState } from "react";
const CrewMember = ({ id, name, color }) => {
  const [newName, setNewName] = useState(name);
  const [newColor, setNewColor] = useState(color);
  const updateMember = async () => {
    await supabase
      .from("Members")
      .update({
        name: newName,
        color: newColor,
      })
      .eq("id", id);
  };
  const handleUpdateBtnClick = (e) => {
    e.preventDefault();
    updateMember();
  };
  const handleDeleteBtnClick = (e) => {
    e.preventDefault();
    updateMember();
  };
  return (
    <div className="rounded outlined bg-slate-700 flex flex-col text-1xl m-3">
      <Pacman color={color} />
      <div className="m-3 flex items-center">
        <label htmlFor="name" className="pr-3">
          New Name
        </label>
        <input
          type="text"
          id="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="p-2 bg-slate-200 rounded text-slate-800"
        />
      </div>
      <div className="m-3 flex items-center">
        <label htmlFor="name" className="pr-3">
          New Color
        </label>
        <select
          name="color"
          id="color"
          className="p-2 bg-slate-200 rounded text-slate-800"
          onChange={(e) => setNewColor(e.target.value)}
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
          onClick={handleUpdateBtnClick}
        >
          Update
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-min"
          onClick={handleDeleteBtnClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CrewMember;
