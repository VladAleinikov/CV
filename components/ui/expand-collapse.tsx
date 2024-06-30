"use client"

import { cn } from "@/utils/cn";
import { useState } from "react"

interface ExpandCollapseProps{
  children: React.ReactNode
}

export const ExpandCollapse = ({ children }: ExpandCollapseProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onClickHandler = () => {
    setIsCollapsed(prev => !prev);
  }

  return (
    <div className="relative my-6 overflow-hidden">
      <div
        className={cn(
          "w-full h-12 flex items-center justify-center p-2 bg-gradient-to-t from-black-100 ",
          isCollapsed ? "absolute bottom-0" : "sticky top-10 "
        )}
      >
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 h-8 text-xs"
          onClick={onClickHandler}
        >
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
      </div>
      <div className={cn("overflow-hidden", isCollapsed && " max-h-[200vh]")}>
        {children}
      </div>
    </div>
  );
};
