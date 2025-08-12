import Delete from '../Delete/Delete';
import style from './Contact.module.css';

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={style.li} key={id}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <Delete onClick={() => onDelete(id)} />
    </li>
  );
}
