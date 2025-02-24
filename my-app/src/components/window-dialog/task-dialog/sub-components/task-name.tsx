import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { FaCircleExclamation } from "react-icons/fa6";

export default function TaskName() {
  return (
    <div className="flex flex-col gap-2">
      <Label className="opacity-75 text-sm font-medium">Task Title</Label>
      <Input placeholder="John Doe..." className="h-11" />
      <div className="text-red-500 text-[12px] flex items-center gap-1">
        <FaCircleExclamation />
        <p>Hello there :D</p>
      </div>
    </div>
  );
}
