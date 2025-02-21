import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Separator } from "@radix-ui/react-separator";

import { BiTask } from "react-icons/bi";

export default function TaskDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-3xl px-5">Add New Task</Button>
      </DialogTrigger>
      <DialogContent className="poppins max-w-3xl">
        <DialogHeader className="">
          <div className="size-10 bg-gray-200 rounded-full flex justify-center items-center">
            <BiTask className="text-xl text-gray-700" />
          </div>
          <div className="pt-2">
            <DialogTitle className="text-lg p-0 h-7">Add New Task</DialogTitle>
            <DialogDescription className="p-0">
                Fill in the form below to create or modify a task
            </DialogDescription>
          </div>
          <div>
            <Separator className="mt-4 left-0 absilute" />
          </div>
        </DialogHeader>
        <div className="grid grid-cols gap-6 mt-8">
            <div className="flex flex-col gap-3">

            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
