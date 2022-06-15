import { COLORS } from "theme";

// get random color utils
export const getRandomColor = () => {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const values = Object.values(color);

  return values[Math.floor(Math.random() * values.length)];
};
