import { Theme } from "@/types";
import { useState } from "react";

export function useTheme(initialTheme: Theme) {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  const toggleTheme = () => {
    setTheme(prev => {
      const theme = prev === "dark" ? "light" : "dark"
      document.documentElement.classList.remove(prev)
      document.documentElement.classList.add(theme)
      return theme
    })
  }

  return { theme, toggleTheme }
}
