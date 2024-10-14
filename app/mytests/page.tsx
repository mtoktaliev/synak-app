import { CardContainer } from "@/components/shared/CardContainer";
import { Title } from "@/components/shared/Title";
import { TopBar } from "@/components/shared/TopBar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
export default function MyTests() {
  return (
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2">
          <Title text="Мои тесты" size="md" />
          <Title text="(5)" size="md" className="text-gray-500" />
        </div>
        <Button className="flex items-center gap-2">
          <Plus />
          Создать тест
        </Button>
      </div>
      <TopBar />
      <CardContainer />
    </div>
  );
}
