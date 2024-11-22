import Contact from "../Contact/Contact"

const ContactList = ({contacts}) => {
    
  return (
    <ul>
        <Contact contacts={contacts}/>
    </ul>
  )
}

export default ContactList