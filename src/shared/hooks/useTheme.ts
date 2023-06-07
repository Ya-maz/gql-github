import { useLayoutEffect, useState } from "react";


export const useTheme = (key = "app-theme") => {
    const isDarkTheme = window?.matchMedia("prefers-color-schema: dark");
    const defaultTheme = isDarkTheme ? "dark" : "light";

  const [theme, setTheme] = useState(localStorage.getItem(key) ?? defaultTheme);

  const сomeToTheDarkSide = () => setTheme("dark");
  const сomeToTheLightSide = () => setTheme("light");

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(key, theme);
  }, [theme, key]);

  return { theme, сomeToTheDarkSide, сomeToTheLightSide };
};
