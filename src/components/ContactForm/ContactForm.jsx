import { useId } from "react";
import { Field, Form, Formik } from "formik";

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
    <Formik initialValues={initialState} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="contactname" id={nameId} />

        <label htmlFor={numberId}>Number</label>
        <Field type="text" name="phonenumber" id={numberId} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
