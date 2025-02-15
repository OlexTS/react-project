import { Form, Formik, ErrorMessage } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/authOps";
import toast from "react-hot-toast";
import { TextField, Button, Box, Typography, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const validationSchema = Yup.object({
  name: Yup.string().required("Name field is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email field is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
});

const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const result = await dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      if (result.error) {
        return toast.error("Registration failed. Please try again");
      }

      resetForm();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
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
            Registration
          </Typography>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={<ErrorMessage name="name" />}
            fullWidth
          />
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
            Register
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default RegistrationForm;
