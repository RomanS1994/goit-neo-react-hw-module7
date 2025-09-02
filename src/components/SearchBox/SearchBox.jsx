import style from './SearchBox.module.css';
import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from '../../redux/filtersSlice';

export default function SearchBox() {
  const searchInput = useId();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  return (
    <label className={style.wrapper} htmlFor={searchInput}>
      <input
        onChange={ev => dispatch(changeName(ev.target.value))}
        className={style.input}
        type="text"
        value={filter}
        id={searchInput}
      />
      Find contacts by name
    </label>
  );
}
