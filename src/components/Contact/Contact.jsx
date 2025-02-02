import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";
import Modal from "../Modal/Modal";


const Contact = ({ contacts}) => {
  const [isModalOpen, setIsModalOpen]= useState(false);
  const [selectedId, setSelectedId] = useState(null)
  const dispatch = useDispatch()
 
const handleDeleteClick = id =>{
  setSelectedId(id);
  setIsModalOpen(true)
}

const confirmDelete = ()=>{
  if(selectedId){
    dispatch(deleteContact(selectedId))
  }
  setIsModalOpen(false)
}

  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          {number}
          <button type="button" onClick={() => handleDeleteClick(id)}>Delete</button>
        </li>
      ))}
      <Modal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} onConfirm={confirmDelete}/>
    </>
  );
};

export default Contact;
