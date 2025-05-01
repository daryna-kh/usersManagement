import { Container, Box, TextField, Button, Typography } from "@mui/material";

export const RecoveryPassword = () => {
  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Typography variant="body2" align="center">
            Enter your email address and we’ll send you a link to reset your
            password.
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Email
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
