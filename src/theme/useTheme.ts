import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

export interface UseThemeResults {
    theme: Theme;
    toggleTheme: () => void;
}
export function useTheme(): UseThemeResults {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(nextTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme);
    }

    return {theme, toggleTheme};
}
