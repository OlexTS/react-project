import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import {Box, Card, } from "@mui/material";


const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
        padding: 5
      }}
    >
      {contacts.map((contact) => (
        <Card key={contact.id} sx={{textAlign: 'center', }}>
          <Contact contact={contact} />
        </Card>
      ))}
    </Box>
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
