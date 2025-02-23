import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import List from '@mui/material/List';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <List>
      <Contact contacts={contacts} />
    </List>
  );
};

export default ContactList;

/**
 * Third task
 */

// import Contact from "../Contact/Contact"

// const ContactList = ({contacts, onDelete}) => {

//   return (
//     <ul>
//         <Contact contacts={contacts} onDelete={onDelete}/>
//     </ul>
//   )
// }

// export default ContactList
