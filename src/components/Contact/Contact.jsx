const Contact = ({ contacts }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          {number}
          <button>Delete</button>
        </li>
      ))}
    </>
  );
};

export default Contact;
