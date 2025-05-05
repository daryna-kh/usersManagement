import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";

import { Router } from "./routes/Router";

function App() {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "1rem",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: "#ffffff",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ffffff",
              color: "#ffffff",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "#ffffff",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
