import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "../ui/badge";
import { Ellipsis, Info, Play } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Title } from "./Title";

interface Props {
  className?: string;
}

export const TestCard: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "p-6 bg-white shadow-md rounded-md flex flex-col gap-6",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Badge
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 text-green-500 text-sm"
          >
            <Play size={20} />
            Активен
          </Badge>
          <p>Создано: 08-01-2024</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="border p-2 py-[7px] rounded-md border-primary gap-2">
            <Ellipsis className="text-primary" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Дублировать</DropdownMenuItem>
            <DropdownMenuItem>Удалить</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col gap-4">
        <Title text="Тестирование по математике" size="md" />
        <div className="flex gap-2 bg-orange-100 p-4 rounded-md">
          <Info className="text-green-500" />
          <p>
            Тест предназначенный для учеников 9 класса. В тесте 20 вопросов.
            Порог для прохождения 18 баллов
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>
          Полученные результаты <span className="font-extrabold">(18)</span>
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger className="border p-4 py-[7px] rounded-md border-gray-300">
            Математика
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-48">
            <DropdownMenuItem>Биология</DropdownMenuItem>
            <DropdownMenuItem>История</DropdownMenuItem>
            <DropdownMenuItem>Литература</DropdownMenuItem>
            <DropdownMenuItem>Математика</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
