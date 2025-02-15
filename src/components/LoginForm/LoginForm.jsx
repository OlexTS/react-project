import { useDispatch } from "react-redux";
import { useState } from "react";
import { Form, Formik, ErrorMessage } from "formik";
import { login } from "../../redux/auth/authOps";
import {
  TextField,
  Button,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };
  return (
    <Formik initialValues={initialState} onSubmit={handleSubmit}>
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Box
          component={Form}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
            mx: "auto",
            mt: 4,
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h5" textAlign="center">
            Login
          </Typography>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={<ErrorMessage name="email" />}
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={<ErrorMessage name="password" />}
            fullWidth
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleShowPassword} edge="end">
                      {showPassword ? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default LoginForm;
