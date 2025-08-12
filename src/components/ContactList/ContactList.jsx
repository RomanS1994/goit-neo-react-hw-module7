import style from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ phones, deleteContact }) {
  return (
    <ul className={style.list}>
      {phones.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={deleteContact}
        />
      ))}
    </ul>
  );
}
