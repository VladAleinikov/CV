"use client";

import { cn } from "@/utils/cn";
import { useState } from "react";
import { Button } from "./button";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

interface ExpandCollapseProps {
  children: React.ReactNode;
}

export const ExpandCollapse = ({ children }: ExpandCollapseProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onClickHandler = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="relative my-6 overflow-hidden h-full">
      <div
        className={cn(
          "w-full h-15 flex items-center justify-center p-2 z-10",
          isCollapsed
            ? "absolute bottom-0 bg-gradient-to-t from-black-100"
            : "sticky bottom-10"
        )}
      >
        <Button
          title={isCollapsed ? "Expand" : "Collapse"}
          icon={isCollapsed ? <BsArrowDown/> : <BsArrowUp/>}
          position="left"
          otherClasses="`bg-[#161a31]"
          onClick={onClickHandler}
        ></Button>
      </div>
      <div className={cn("", isCollapsed && " max-h-[200vh]")}>{children}</div>
    </div>
  );
};
