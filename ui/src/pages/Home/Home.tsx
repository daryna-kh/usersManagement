import { Button, Stack, TextField } from "@mui/material";

export const Home = () => {
  const fetchItem = async () => {
    try {
      const responce = await fetch("/api/items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return responce;
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <Stack spacing={2}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" onClick={() => fetchItem()}>
        Contained
      </Button>
    </Stack>
  );
};
