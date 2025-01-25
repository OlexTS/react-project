import { useDispatch } from "react-redux";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { login } from "../../redux/auth/authOps";


const initialState = {
    email: '',
    password: '',
}


const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, {resetForm})=>{
    dispatch(login({
        email: values.email,
        password: values.password
    }))
   resetForm()
    }
    return (
    <Formik initialValues={initialState} onSubmit={handleSubmit}>
      <Form>
        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email"/>
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password"/>
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
