import Contact from "../Contact/Contact"

const ContactList = ({contacts, onDelete}) => {
    
  return (
    <ul>
        <Contact contacts={contacts} onDelete={onDelete}/>
    </ul>
  )
}

export default ContactList