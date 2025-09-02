import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import style from './Delete.module.css';

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
