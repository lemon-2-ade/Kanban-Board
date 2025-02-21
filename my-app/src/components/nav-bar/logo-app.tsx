import { PiKanbanFill } from "react-icons/pi";

export default function AppNameAndLogo() {
  return <div className="flex items-center gap-2">
    <div className="bg-primary size-10 text-lg text-white rounded-xl flex justify-center items-center">
        <PiKanbanFill />
    </div>
    <div className="flex gap-1 items-center text-xl">
        <span className="text-xl font-bold"> Work</span>
        <span className="text-xl">Wave</span>
    </div>
  </div>;
}
