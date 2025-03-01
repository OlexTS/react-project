import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import Box from "@mui/material/Box";

const ContactsPage = () => {
  return (
    <Box>
      
        <ContactForm />
        <SearchBox />
      
      <Box>
        <ContactList />
      </Box>
    </Box>
  );
};

export default ContactsPage;
