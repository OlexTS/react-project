import { useId } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps";
import { selectContacts } from "../../redux/contacts/selectors";
import {
  TextField,
  Button,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Your name is too short")
    .max(30, "Your name is too long")
    .required("This option is required"),
  number: Yup.string()
    .matches(/^\d+$/, "Number must contain only digits")
    .min(6, "Too short for a phone number")
    .max(15, "Too long for a phone number")
    .required("This field is required"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialState = {
    name: "",
    number: "",
  };

  const handleSubmit = async (values, actions) => {
    if (contacts.some((contact) => contact.name === values.name)) {
      toast.error(`${values.name} is already in your contacts`);
      return;
    }

    try {
      await dispatch(addContact(values));
      toast.success("Contact successfully added to your book");
      actions.resetForm();
    } catch (error) {
      toast.error("Failed to add contact");
    }
  };
  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({values, errors, touched, handleChange, handleBlur }) => (
        <Box
          component={Form}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 500,
            mx: "auto",
            mt: 4,
            p: 3,
            
          }}
        >
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <TextField
            label="Number"
            name="number"
            variant="outlined"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.number && Boolean(errors.number)}
            helperText={touched.number && errors.number}
          />
          <Button type="submit" variant="contained" color="primary">
            Add contact
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default ContactForm;

/**
 * Third task
 */

// import { useId } from "react";
// import { Field, Form, Formik, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const ContactSchema = Yup.object().shape({
//   contactname: Yup.string()
//     .min(3, "Your name is too short")
//     .max(30, "Your name is too long")
//     .required("This option is required"),
//   phonenumber: Yup.number("This fild must be a number type").required(
//     "Required"
//   ),
// });

// const ContactForm = ({ onAddContacts }) => {
//   const nameId = useId();
//   const numberId = useId();

//   const initialState = {
//     contactname: "",
//     phonenumber: "",
//   };

//   const handleSubmit = (values, actions) => {
//     const { contactname, phonenumber } = values;

//     onAddContacts(contactname, phonenumber);
//     actions.resetForm();
//   };
//   return (
//     <Formik
//       initialValues={initialState}
//       onSubmit={handleSubmit}
//       validationSchema={ContactSchema}
//     >
//       <Form>
//         <div>
//           <label htmlFor={nameId}>Name</label>
//           <Field type="text" name="contactname" id={nameId} />
//           <ErrorMessage name="contactname" component='span'/>
//         </div>

//         <div>
//           <label htmlFor={numberId}>Number</label>
//           <Field type="text" name="phonenumber" id={numberId} />
//           <ErrorMessage name="phonenumber" component='span'/>
//         </div>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default ContactForm;
