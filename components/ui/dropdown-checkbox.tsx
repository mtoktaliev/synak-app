"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";

export default function DropdownCheckbox({ label }: { label: string[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 border p-4 py-[7px] rounded-md border-gray-300">
        {label[0]}
        <ChevronDown size={20} className="text-gray-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-48">
        <div className="flex flex-col">
          {label.map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 p-2 rounded-sm hover:bg-accent transition-colors"
            >
              <Checkbox id="option1" />
              <Label htmlFor="option1">{label}</Label>
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
