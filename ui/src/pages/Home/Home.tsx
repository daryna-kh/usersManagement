import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
} from "@mui/material";
import { useState } from "react";

export const Home = () => {
  const [role, setRole] = useState<{ [key in string]: string }>({}); // or useState<Record<string, string>>({});

  const handleChange = (event: SelectChangeEvent<string>, id: string) => {
    setRole((prev) => ({ ...prev, [id]: event.target.value }));
  };

  return (
    <>
      <AppBar style={{ zIndex: 2000 }}>
        <Toolbar>
          <Button>
            <ManageAccountsIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ paddingTop: "60px", width: "100%" }}>
        <List>
          {["User", "User"].map((text, i) => {
            const id = `${text}-${i + 1}`;
            return (
              <ListItem key={id} sx={{ mb: 2 }}>
                <ListItemText primary={`${text} ${i + 1}`} />
                <FormControl sx={{ maxWidth: 200, width: "100%" }}>
                  <InputLabel id={id}>Role</InputLabel>
                  <Select
                    labelId={id}
                    id={`select-${id}`}
                    value={role[id] || ""}
                    label="Role"
                    onChange={(e) => handleChange(e, id)}
                  >
                    <MenuItem value="User">User</MenuItem>
                    <MenuItem value="Moderator">Moderator</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
};
