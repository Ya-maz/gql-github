import { useLayoutEffect, useState } from "react";

const isDarkTheme = window?.matchMedia("prefers-color-schema:dark");
const defaultTheme = isDarkTheme ? "dark" : "light";

console.log("defaultTheme", defaultTheme);
export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") ?? defaultTheme
  );
  const сomeToTheDarkSide = () => setTheme("dark");
  const сomeToTheLightSide = () => setTheme("light");
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return { theme, сomeToTheDarkSide, сomeToTheLightSide };
};
