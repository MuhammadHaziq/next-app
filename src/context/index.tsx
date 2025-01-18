"use client";
import { ThemeProvider } from "./themeContext";

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
