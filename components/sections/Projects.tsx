import React from "react";
import Jarvis from "@/components/sections/Jarvis";
import Hackathon from "@/components/sections/Hackathon";

export default function Projects() {
  return (
    <div id="projects" className="space-y-12">
      <Jarvis />
      <Hackathon />
    </div>
  );
}