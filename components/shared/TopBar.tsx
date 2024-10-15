"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import { ChevronDown, Search, Settings } from "lucide-react";
import { Input } from "../ui/input";
import { Select } from "antd";
import type { SelectProps } from "antd";

interface Props {
  className?: string;
}

const cats: SelectProps["options"] = [
  "Все категории",
  "Биология",
  "История",
  "Литература",
  "Математика",
].map((value) => ({
  label: ` ${value}`,
  value,
}));
const stats: SelectProps["options"] = [
  "Все статусы",
  "Активен",
  "Не настроено",
  "Завершен",
].map((value) => ({
  label: ` ${value}`,
  value,
}));

export const TopBar: React.FC<Props> = ({ className }) => {
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between bg-white p-2 mt-6 shadow-md rounded-md",
        className
      )}
    >
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <Select
            mode="multiple"
            placeholder="Выберите категории"
            defaultValue={["Все категории"]}
            onChange={handleChange}
            options={cats}
            maxTagCount={"responsive"}
            className="cursor-pointer min-w-60"
          />
          <Button variant="link" className="flex items-center gap-2">
            <Settings size={20} />
            Управление категориями
          </Button>
        </div>
        <Select
          mode="multiple"
          placeholder="Выберите статусы"
          defaultValue={["Все статусы"]}
          onChange={handleChange}
          options={stats}
          maxTagCount={"responsive"}
          suffixIcon={<ChevronDown size={20} className="text-gray-500" />}
          className="cursor-pointer min-w-60"
          showSearch
        />
      </div>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 text-gray-500" size={20} />
        <Input placeholder="Поиск..." className="pl-9" />
      </div>
    </div>
  );
};
