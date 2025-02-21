"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IoMdArrowDown } from "react-icons/io";
import { IoMdArrowUp } from "react-icons/io";

const options = ["A-Z", "a-z"];

export function SortingDropDown() {
  const [selectedOption, setSelectedOption] = React.useState("A-Z");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <span className="font-medium text-sm">{selectedOption}</span>
          {selectedOption === "A-Z" ? (
            <IoMdArrowDown className="text-sm" />
          ) : (
            <IoMdArrowUp className="text-sm" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20 poppins">
        {options.map((option, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            className="h-9"
            checked={selectedOption === option}
            onCheckedChange={() => setSelectedOption(option)}
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
