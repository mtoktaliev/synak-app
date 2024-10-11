import { cn } from "@/lib/utils";
import React from "react";
import { TestCard } from "./TestCard";

interface Props {
  className?: string;
}

export const CardContainer: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <div className={cn("grid grid-cols-2 gap-6 mt-6", className)}>
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
    </div>
  );
};
