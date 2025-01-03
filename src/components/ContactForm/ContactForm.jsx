import { useId } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useContacts } from "../../redux/selectors";
import { addContact } from "../../redux/contactsSlice";
import toast from "react-hot-toast";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Your name is too short")
    .max(30, "Your name is too long")
    .required("This option is required"),
  number: Yup.number("This fild must be a number type").required("Required"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();
  const contacts = useSelector(useContacts);

  const initialState = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    if (contacts.some((contact) => contact.name === values.name)) {
      toast.error(`${values.name} is already in your contacts`);
      return;
    }

    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" id={numberId} />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
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
