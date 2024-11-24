import { useId } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  contactname: Yup.string()
    .min(3, "Your name is too short")
    .max(30, "Your name is too long")
    .required("This option is required"),
  phonenumber: Yup.number("This fild must be a number type").required(
    "Required"
  ),
});

const ContactForm = ({ onAddContacts }) => {
  const nameId = useId();
  const numberId = useId();

  const initialState = {
    contactname: "",
    phonenumber: "",
  };

  const handleSubmit = (values, actions) => {
    const { contactname, phonenumber } = values;

    onAddContacts(contactname, phonenumber);
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
          <Field type="text" name="contactname" id={nameId} />
          <ErrorMessage name="contactname" component='span'/>
        </div>

        <div>
          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="phonenumber" id={numberId} />
          <ErrorMessage name="phonenumber" component='span'/>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
