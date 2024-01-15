import React from "react";
import { Landing } from "../components/Landing";
import { Right } from "../components/Right";

export const HomeScreen = () => {
  return (
    <>
      <Landing />
      <Right />
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        HomeScreen
      </div>
    </>
  );
};
