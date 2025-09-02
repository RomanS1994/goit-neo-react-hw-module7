import style from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const phones = useContacts();
  // console.log(phones);
  const filter = useSelector(state => state.filters.name);

  const visiblePhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={style.list}>
      {visiblePhones.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
