"use client";

import { useTheme } from "next-themes";

import NavBar from "@/components/nav-bar/nav-bar";
import ProjectsArea from "@/components/projects-area/project-area";
import RightSideBar from "@/components/right-side-bar/right-side-bar";

export default function Home() {
  const { theme } = useTheme();
  const bgColour = theme === "dark" ? "bg-black" : "bg-gray-200";
  
  return (
    <div className={`${bgColour} border min-h-screen w-full`}>
      <NavBar />
      <div className="grid grid-cols-[3fr_1fr] px-6 mt-8 poppins gap-4">
        <ProjectsArea />
        <RightSideBar />
      </div>
    </div>
  );
}
