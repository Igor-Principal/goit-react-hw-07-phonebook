import { useState } from 'react';
import css from './phonebook.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'store/contacts/contactSlice';
// import { nanoid } from 'nanoid';
import { useCreateContactMutation, useGetContactsQuery } from 'store/contacts/contactsApi';

const Phonebook = () => {
  // const dispatch = useDispatch();
 

  // const { contacts } = useSelector(state => state.contacts); 
  const { contacts } = useGetContactsQuery(); 
const [addContact] = useCreateContactMutation();

  const [info, setInfo] = useState({ name: '', number: '' });
  const { name, number } = info;

  const createContact = data => {
    // dispatch(addContact({ ...data, id: nanoid() }));
    addContact(data)
  };

  const handleChange = ({ target }) => {
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };

  const getInfo = e => {
    e.preventDefault();
    const includeName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase().trim()
    );
    if (includeName) {
      alert(`${name} is already in contacts`);
    } else {
      createContact({
        name: name.trim(),
        number: number,
      });
    }
    setInfo({
      name: '',
      number: '',
    });
  };

  return (
    <form className={css.form} onSubmit={getInfo}>
      <label className={css.titleSmall} htmlFor="name">
        Name
      </label>
      <input
        className={css.input}
        type="text"
        id="name"
        name="name"
        required
        value={name}
        onChange={handleChange}
      />
      <label className={css.titleSmall} htmlFor="number">
        Number
      </label>
      <input
        className={css.input}
        type="tel"
        name="number"
        id="number"
        required
        value={number}
        onChange={handleChange}
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Phonebook;