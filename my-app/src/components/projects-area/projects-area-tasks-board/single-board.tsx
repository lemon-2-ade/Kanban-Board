import { useTheme } from "next-themes";
import SingleTask from "./single-task";

export type Board = {
  name: String;
  createdAt: Date;
  tasks: string[];
};

export default function SingleBoard({ board }: { board: Board }) {
  const { name: boardName, tasks } = board;
  const { theme } = useTheme();
  const numberTasks = tasks.length;
  const bgColour = theme === "dark" ? "bg-black" : "bg-gray-100";

  return (
    <div className="w-full h-full border p-4 rounded-2xl">
      <div
        className={`flex justify-between ${bgColour} p-4 rounded-lg items-center`}
      >
        <span className="font-medium text-md">{boardName}</span>
        <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center">
          <span className="text-sm mt-[2px]">{numberTasks}</span>
        </div>
      </div>
      <div className="mt-7">
        {[1, 2].map((index) => (
            <SingleTask key={index} />
        ))}
      </div>
    </div>
  );
}
