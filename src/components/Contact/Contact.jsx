import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";


const Contact = ({ contacts}) => {
  const dispatch = useDispatch()
 
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          {number}
          <button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </>
  );
};

export default Contact;
