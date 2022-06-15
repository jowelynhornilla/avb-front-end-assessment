import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

export * from "./colors";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: blue,
  },
});
