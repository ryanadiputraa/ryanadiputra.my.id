import { useState } from "react";

import { Theme } from "@/types";
import { setCookie } from "@/lib/cookies";

export function useTheme(initialTheme: Theme) {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  const toggleTheme = () => {
    setTheme(prev => {
      const theme = prev === "dark" ? "light" : "dark"
      document.documentElement.classList.remove(prev)
      document.documentElement.classList.add(theme)
      const expires = new Date();
      expires.setFullYear(expires.getFullYear() + 1);
      setCookie("theme", theme, expires)
      return theme
    })
  }

  return { theme, toggleTheme }
}
