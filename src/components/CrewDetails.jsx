import React from "react";
import { supabase } from "../client";
import { useEffect, useState } from "react";
const CrewDetails = () => {
  const [crew, setCrew] = useState([]);
  useEffect(() => {
    getCrew();
  }, []);
  useEffect(() => {
    console.log(crew);
  }, [crew]);
  const getCrew = async () => {
    const { data } = await supabase.from("Members").select();

    // set state of posts
    setCrew(data);
  };
  return (
    <div className="bg-slate-600 w-full h-full flex flex-col gap-8 md-gap-10 justify-center items-center p-5 text-3xl">
      {crew.length == 0
        ? "No crew members yet! Click 'Create your crew' to get started."
        : "Crew members exist!"}
    </div>
  );
};

export default CrewDetails;
