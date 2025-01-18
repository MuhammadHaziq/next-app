"use client";
import { useTheme } from "@/context/themeContext/context";
export default function Header() {
  const theme = useTheme();
  return (
    <header
      style={{
        backgroundColor: theme?.dark?.background,
        padding: "1rem",
        color: theme?.dark?.color,
      }}
    >
      <p> Header </p>
    </header>
  );
}
