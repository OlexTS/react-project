import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, fetchContacts, updateContact } from "../../redux/contacts/contactsOps";
import Modal from "../Modal/Modal";
import toast from "react-hot-toast";

const Contact = ({ contacts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchContacts())
  }, [dispatch])

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleEditClick = (contact) => {
    setIsEdit(true);
    setSelectedContact(contact);
  };

  const handleSaveEdit = () => {
    if (selectedContact) {
      dispatch(updateContact(selectedContact));
      toast.success("Contact successfully edited");
      setIsEdit(false);
      setSelectedContact(null);
    }
  };

  const handleChange = (e) => {
    setSelectedContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const confirmDelete = async () => {
    if (!selectedId) {
      return;
    }
    setIsModalOpen(false);
    try {
      await dispatch(deleteContact(selectedId));
      toast.success("Contact was successfully deleted");
    } catch (error) {
      toast.error("Somethink went wrong. Try again");
    }
  };

  return (
    <>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {isEdit && selectedContact?.id === contact.id ? (
            <div>
              <input
                name="name"
                type="text"
                onChange={handleChange}
                value={selectedContact.name}
              />

              <input
                name="number"
                type="text"
                onChange={handleChange}
                value={selectedContact.number}
              />
              <button onClick={handleSaveEdit}>Save</button>
              <button onClick={() => setIsEdit(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>{contact.name}</p>
              <p>{contact.number}</p>

              <button type="button" onClick={() => handleEditClick(contact)}>
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDeleteClick(contact.id)}
              >
                Delete
              </button>
            </div>
          )}
        </li>
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default Contact;
