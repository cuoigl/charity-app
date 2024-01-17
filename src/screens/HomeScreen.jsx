import React from "react";
import { LandingComponent } from "../components/LandingComponent";
import { CarouselComponent } from "../components/CarouselComponent";
import { StandardComponent } from "../components/StandardComponent";
import { NoteComponent } from "../components/NoteComponent";
import { TipsComponent } from "../components/TipsComponent";

export const HomeScreen = () => {
  return (
    <>
      <LandingComponent />
      <CarouselComponent />
      <StandardComponent />
      <NoteComponent />
      <TipsComponent />
    </>
  );
};
