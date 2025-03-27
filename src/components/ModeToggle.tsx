"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all bg-gray-100 dark:bg-gray-800 hover:scale-110"
          >
            <Sun className={`absolute transition-all duration-300 ${theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} />
            <Moon className={`absolute transition-all duration-300 ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Toggle Theme</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
