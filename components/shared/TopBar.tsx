import { cn } from "@/lib/utils";
import React from "react";
import DropdownCheckbox from "../ui/dropdown-checkbox";
import { Button } from "../ui/button";
import { Search, Settings } from "lucide-react";
import { Input } from "../ui/input";

interface Props {
  className?: string;
}

const testCategory = [
  "Все категории",
  "Биология",
  "История",
  "Литература",
  "Математика",
];
const testStatus = ["Все статусы", "Активен", "Не настроено", "Завершен"];

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between bg-white p-2 mt-6 shadow-md rounded-md",
        className
      )}
    >
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <DropdownCheckbox label={testCategory} />
          <Button variant="link" className="flex items-center gap-2">
            <Settings />
            Управление категориями
          </Button>
        </div>
        <DropdownCheckbox label={testStatus} />
      </div>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 text-gray-500" size={20} />
        <Input placeholder="Поиск..." className="pl-9" />
      </div>
    </div>
  );
};
