import style from './Delete.module.css';

export default function Delete({ onClick }) {
  return (
    <button className={style.button} onClick={onClick} type="button">
      Delete
    </button>
  );
}
