import css from './contacts.module.css';
import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'store/contacts/contactsApi';

const Contacts = () => {
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const { filter } = useSelector(state => state.filter);

  const handleClick = e => {
    deleteContact(e.target.id);
  };
  console.log(deleteContact);

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  const elements = filtered.map(({ name, number, id }) => (
    <li className={css.item} key={id}>
      {name} : {number}
      <button
        className={css.button}
        id={id}
        type="button"
        onClick={handleClick}
      >
        Delete
      </button>
    </li>
  ));
  return (
    <>
      <ul className={css.list}>{elements}</ul>
    </>
  );
};

export default Contacts;
