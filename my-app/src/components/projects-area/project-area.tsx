import { Card } from "@/components/ui/card";
import ProjectsAreaHeader from "./projects-area-header/project-area-header";
import ProjectsAreaBoard from "./projects-area-tasks-board/project-area-boards";

export default function ProjectsArea() {
  return (
    <Card className="shadow-none p-7 rounded-3xl px-7 flex flex-col gap-8">
      <ProjectsAreaHeader />
      <ProjectsAreaBoard />
    </Card>
  );
}
