import { useDebouncedCallback } from 'use-debounce';

import style from './SearchBox.module.css';
import { useId } from 'react';

export default function SearchBox({ filter, setFilter }) {
  const searchInput = useId();
  const debounced = useDebouncedCallback(
    ev => {
      setFilter(ev.target.value);
    },

    1000
  );

  return (
    <>
      <label className={style.wrapper} htmlFor={searchInput}>
        <input
          onChange={debounced}
          className={style.input}
          type="text"
          value={filter}
          id={searchInput}
        />
        Find contacts by name
      </label>
    </>
  );
}
