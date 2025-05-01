import "./App.css";
import {
  Button,
  createTheme,
  Stack,
  TextField,
  ThemeProvider,
} from "@mui/material";

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
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">Contained</Button>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
