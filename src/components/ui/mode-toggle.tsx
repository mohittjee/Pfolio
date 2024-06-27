// import { useTheme } from "next-themes";
// import { SquareIcon } from "lucide-react";
// import { motion } from "framer-motion";

// export function ModeToggle() {
// 	const { setTheme, theme, systemTheme } = useTheme();

// 	const toggleTheme = () => {
// 		if (theme === "system") {
// 			systemTheme === "light" ? setTheme("dark") : setTheme("light");
// 		} else theme === "light" ? setTheme("dark") : setTheme("light");
// 	};

// 	return (
// 		<motion.button
// 			whileTap={{ translateY: -3 }}
// 			transition={{ duration: 0.1 }}
// 			className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring/0 disabled:pointer-events-none disabled:opacity-50 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors h-9 w-9"
// 			onClick={() => {
// 				toggleTheme();
// 			}}
// 		>
// 			<span className="size-5 bg-foreground" />
// 			<span className="sr-only">Toggle theme</span>
// 		</motion.button>
// 	);
// }

"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  return (
    <Button className="rounded-full" variant="outline" size="icon" onClick={handleToggle}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

