import { useId } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps";
import { selectContacts } from "../../redux/contacts/selectors";

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
    toast.success('Contact successfully added to your book')
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
