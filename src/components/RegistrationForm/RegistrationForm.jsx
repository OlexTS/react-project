import { Field, Form, Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/authOps";
import toast from "react-hot-toast";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
