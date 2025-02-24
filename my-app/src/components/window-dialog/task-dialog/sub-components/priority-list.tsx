"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@radix-ui/react-dropdown-menu";

import { IoIosArrowDown } from "react-icons/io";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { IconType } from "react-icons/lib";
import { IoCheckmark } from "react-icons/io5";

import { useState } from "react";

type PriorityItem = {
  name: string;
  icon: IconType;
  textColour: string;
  backgroundColour: string;
};

const PriorityListArray: PriorityItem[] = [
  {
    name: "Low",
    icon: RiArrowDownDoubleFill,
    textColour: "text-green-700",
    backgroundColour: "bg-green-500/10",
  },
  {
    name: "Medium",
    icon: MdKeyboardDoubleArrowRight,
    textColour: "text-yellow-700",
    backgroundColour: "bg-yellow-500/10",
  },
  {
    name: "High",
    icon: MdOutlineKeyboardDoubleArrowUp,
    textColour: "text-red-700",
    backgroundColour: "bg-red-500/10",
  },
];

export default function PriorityList() {
  const [selectedPriority, setSelectedPriority] = useState<PriorityItem>(
    PriorityListArray[0]
  );

  function renderSelectedPriority() {
    return (
      <div className="flex items-center gap-2">
        <div
          className={`size-6 ${selectedPriority.backgroundColour} rounded-md flex
                    items-center justify-center text-lg ${selectedPriority.textColour} `}
        >
          {<selectedPriority.icon />}
        </div>
        <span className={`${selectedPriority.textColour}`}>
          {selectedPriority.name}
        </span>
      </div>
    );
  }

  function renderDropdownMenuItem(priorityItem: PriorityItem) {
    return (
      <div className="flex items-center gap-2">
        <div
          className={`size-6 ${priorityItem.backgroundColour} rounded-md flex
                items-center justify-center text-lg ${priorityItem.textColour} `}
        >
          <priorityItem.icon />
        </div>
        <span className={`${priorityItem.textColour}`}>
          {priorityItem.name}
        </span>
      </div>
    );
  }

  function isDropdownChecked(priorityItem: PriorityItem) {
    return (
      <>{priorityItem.name === selectedPriority.name && <IoCheckmark />}</>
    );
  }

  return (
    <div>
      <Label className="opacity-75 text-sm font-medium">Priority</Label>
      <div className="mt-2 w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              id="priority-dropdown"
              variant={"outline"}
              className="w-full h-11 flex justify-between"
            >
              {renderSelectedPriority()}
              <IoIosArrowDown className="text-gray-600" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-full min-w-[var(--radix-dropdown-menu-trigger-width)] poppins"
          >
            {PriorityListArray.map((priorityItem, index) => (
              <DropdownMenuItem
                className="flex justify-between items-center"
                onClick={() => setSelectedPriority(priorityItem)}
                key={index}
              >
                {renderDropdownMenuItem(priorityItem)}
                {isDropdownChecked(priorityItem)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
