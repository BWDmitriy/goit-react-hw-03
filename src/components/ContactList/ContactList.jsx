export default function ContactList({ contacts, onDeleteContact }) {
 return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
 );
}
