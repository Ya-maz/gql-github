import { useTheme } from "../../../../shared/hooks/useTheme";
import { IconSunset, IconSunrise } from "../../../../shared/assets/icons";
import styles from "./Theme.module.css";

export const Theme = () => {
  const { theme, сomeToTheDarkSide, сomeToTheLightSide } = useTheme();
  return (
    <div className={styles.theme}>
      <button disabled={theme === "dark"} onClick={сomeToTheDarkSide}>
        <IconSunset />
      </button>
      <button disabled={theme !== "dark"} onClick={сomeToTheLightSide}>
        <IconSunrise />
      </button>
    </div>
  );
};
