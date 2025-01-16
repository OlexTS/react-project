import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import { selectFilteredContacts } from "../../redux/selectors"

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts)
    
    
  return (
    <ul>
        <Contact contacts={contacts} />
    </ul>
  )
}

export default ContactList


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