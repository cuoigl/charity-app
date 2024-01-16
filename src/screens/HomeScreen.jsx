import React from "react";
import { LandingComponent } from "../components/LandingComponent";
import { CarouselComponent } from "../components/CarouselComponent";
import { StandardComponent } from "../components/StandardComponent";
import { NoteComponent } from "../components/NoteComponent";

export const HomeScreen = () => {
  return (
    <>
      <LandingComponent />
      <CarouselComponent />
      <StandardComponent />
      <NoteComponent />
    </>
  );
};
