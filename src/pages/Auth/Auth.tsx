import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router";
import { fetchTokenAndAuth } from "../../store/features/auth/authThunks";
import { useAppDispatch } from "../../store";

export const Auth = () => {
  const dispatch = useAppDispatch();
  const { validationSchema } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(fetchTokenAndAuth(values));
    },
  });

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          {/* <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          /> */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.username && formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.password && formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            variant="text"
            sx={{ textTransform: "lowercase", fontSize: 12 }}
            onClick={() => {
              navigate("/recovery-password");
            }}
          >
            I forgot my password
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        <span style={{ textTransform: "uppercase", fontSize: 14 }}>Or</span>
        <Button
          variant="outlined"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {
            navigate("/register");
          }}
        >
          Create account
        </Button>
      </Box>
    </Container>
  );
};
