import { useWritable } from "./store-helpers";

export const useDarkMode = () => useWritable('dark', false);