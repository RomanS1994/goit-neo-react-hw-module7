import { useDispatch } from 'react-redux';

import style from './Delete.module.css';
import { deleteContact } from '../../redux/contactsOps';

export default function Delete({ id }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <button
      className={style.button}
      onClick={handleDeleteContact}
      type="button"
    >
      Delete
    </button>
  );
}
