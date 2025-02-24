import { Label } from "@radix-ui/react-dropdown-menu";
import { FaCircleExclamation } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useState } from "react";
import { text } from "stream/consumers";
import { Divide } from "lucide-react";

export default function TaskDescription() {
  const [textCounter, setTextCounter] = useState("");

  function handleTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const textInput = e.target.value;

    if (textInput.length <= 50) {
      setTextCounter(textInput);
    }
  }

  return (
    <div className="flex flex-col gap-2 mt-4">
      <Label className="opacity-75 text-sm font-medium">Task Description</Label>
      <Textarea
        value={textCounter}
        onChange={handleTextChange}
        placeholder="Give a description of the task..."
        className="resize-none"
      />

      <div className="flex justify-between items-center">
        <div className="text-red-500 text-[12px] flex items-center gap-1">
          <FaCircleExclamation />
          <p>How's it going?</p>
        </div>

        <p className="text-[12px] text-gray-500">
          {textCounter.length} / 50 Characters
        </p>
      </div>
    </div>
  );
}
