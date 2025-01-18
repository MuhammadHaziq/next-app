import { createContext, useContext } from "react";
import { ThemeType } from "./theme.type";

export const defaultTheme:ThemeType = {
    light: {
        background: "#f5f5f5",
        color: "#333",
    },
    dark: {
        background: "#333",
        color: "#f5f5f5",
    },
}

export const ThemeContext = createContext<ThemeType>(defaultTheme);


export const useTheme = () => useContext(ThemeContext);