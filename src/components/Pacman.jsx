import React from "react";
import "./styling/Pacman.css";
const Pacman = ({ color }) => {
  return (
    <div className="h-210 w-210">
      {/* Inspired by: https://codepen.io/MarioAraque/pen/Vvmjqr */}
      <div
        className={`pacman rounded-full h-150 w-150`}
        style={{ backgroundColor: color }}
      >
        <div className="eye bg-slate-700 relative translate-x-8 translate-y-6 rounded-full w-1/5 h-1/5"></div>
      </div>
    </div>
  );
};

export default Pacman;
