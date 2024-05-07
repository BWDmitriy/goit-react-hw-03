import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

export default function ContactList({ contacts, onDeleteContact }) {
 return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li key={contact.id}>
          <div className="contact-list-div">
            <span><IoPerson />{" "+contact.name}</span>
            <span><FaPhone />{" "+contact.number}</span>
          </div>
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
 );
}


