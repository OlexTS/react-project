import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";

const ContactsPage = () => {
  return (
    <div>
      <ContactForm/>
      <ContactList />
      <SearchBox/>
    </div>
  );
};

export default ContactsPage;
