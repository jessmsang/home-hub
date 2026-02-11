import { useColorScheme as RNColorScheme } from "react-native";

export function useColorScheme(): "light" | "dark" {
  const colorScheme = RNColorScheme(); // returns 'light' | 'dark' | null
  return colorScheme === "dark" ? "dark" : "light";
}