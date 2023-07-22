import { createContext, useState, useEffect } from "react";

import React from "react";
let ThemeContext;
export default function ThemeProvider({ children }) {
  let check = localStorage.getItem("theme");
  let themeState;
  if (check == null || undefined) {
    // In first place we need to create
    localStorage.setItem("theme", "light");
    themeState = light;
  } else {
    let themeFromLocal = localStorage.getItem("theme");
    themeState = themeFromLocal;
  }

  ThemeContext = createContext();
  const [theme, setTheme] = useState(themeState);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext };
