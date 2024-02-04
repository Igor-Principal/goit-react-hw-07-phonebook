import { useState } from 'react';
import css from './contactForm.module.css';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'store/contacts/contactsApi';
import Loader from 'components/Loader/Loader';

const Phonebook = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useCreateContactMutation();

  const [info, setInfo] = useState({ name: '', number: '' });
  const { name, number } = info;

  const createContact = data => {
    addContact(data);
  };

  const handleChange = ({ target }) => {
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };

  const getInfo = e => {
    e.preventDefault();
    console.log(contacts);
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
    <>
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
      {isLoading && <Loader />}
    </>
  );
};

export default Phonebook;
