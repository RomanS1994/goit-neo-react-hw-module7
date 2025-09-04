import style from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
