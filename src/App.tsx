import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./components/Home/Home";
import { Auth } from "./components/Auth/Auth";
import { Register } from "./components/Register/Register";
import { RecoveryPassword } from "./components/RecoveryPassword/RecoveryPassword";

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
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ffffff",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "#fffffF",
          },
        },
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/recovery-password",
      element: <RecoveryPassword />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
