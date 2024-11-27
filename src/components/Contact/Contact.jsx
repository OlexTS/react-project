const Contact = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          {number}
          <button onClick={() => onDelete(id)}>Delete</button>
        </li>
      ))}
    </>
  );
};

export default Contact;
