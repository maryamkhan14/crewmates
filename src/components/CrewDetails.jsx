import React from "react";
import { supabase } from "../client";
import { useEffect, useState } from "react";
import CrewMember from "./CrewMember";
const CrewDetails = () => {
  const [crew, setCrew] = useState([]);
  useEffect(() => {
    getCrew();
  }, []);
  const getCrew = async () => {
    const { data } = await supabase.from("Members").select();

    // set state of posts
    setCrew(data);
  };
  return (
    <div className="bg-slate-600 w-full h-full flex flex-wrap gap-8 md-gap-10 justify-center items-center p-5">
      {crew.length > 0 &&
        crew.map(({ id, color, name }) => {
          return <CrewMember id={id} name={name} color={color} />;
        })}
    </div>
  );
};

export default CrewDetails;
