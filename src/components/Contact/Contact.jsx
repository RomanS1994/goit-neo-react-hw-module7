import Delete from '../Delete/Delete';
import style from './Contact.module.css';

export default function Contact({ id, name, number }) {
  return (
    <li className={style.li}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <Delete id={id} />
    </li>
  );
}
