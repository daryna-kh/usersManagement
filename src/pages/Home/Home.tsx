import { Button, Stack, TextField } from "@mui/material";

export const Home = () => {
  return (
    <Stack spacing={2}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Contained</Button>
    </Stack>
  );
};
