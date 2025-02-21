import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";

import { Project, projects } from "./project-selection";
import { SingleProjectCommandItem } from "./single-project-item";
import { Dispatch, SetStateAction } from "react";

export default function ProjectCommandItems({
  selectedProject,
  setSelectedProject,
}: {
  selectedProject: Project;
  setSelectedProject: Dispatch<SetStateAction<Project>>;
}) {
  function handleProjectSelect(project: Project) {
    setSelectedProject(project);
  }

  return (
    <Command>
      <CommandInput placeholder="Search a project..." />
      <CommandList className="my-3">
        <CommandEmpty>No reuslts found.</CommandEmpty>
      </CommandList>
      <div className="flex flex-col gap-3">
        {projects.map((project, index) => (
          <SingleProjectCommandItem
            project={project}
            key={index}
            onSelectedItem={handleProjectSelect}
            isSelected={selectedProject.name === project.name}
          />
        ))}
      </div>
    </Command>
  );
}
