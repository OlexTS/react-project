import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  deleteContact,

  updateContact,
} from "../../redux/contacts/contactsOps";
import Modal from "../Modal/Modal";
import {  Button, Typography } from "@mui/material";


const Contact = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const dispatch = useDispatch();

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
          <Button onClick={handleSaveEdit}>Save</Button>
          <Button onClick={() => setIsEdit(false)}>Cancel</Button>
        </div>
      ) : (
        <div>
          <Typography variant="h5" component="div">{contact.name}</Typography>
          <Typography  variant="body2" color="text.secondary">{contact.number}</Typography>

          <Button type="button" onClick={() => handleEditClick(contact)}>
            Edit
          </Button>
          <Button type="button" onClick={() => handleDeleteClick(contact.id)}>
            Delete
          </Button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default Contact;
