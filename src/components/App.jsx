import css from './app.module.css';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
// import { useSelector } from 'react-redux';
import apiHooks from 'store/contacts/contactsApi';

export const App = () => {
  // const { contacts } = useSelector(state => state.contacts);
  const { contacts } = apiHooks.useGetContactsQuery();

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <Phonebook />
      {contacts?.length > 0 && (
        <>
          <h2 className={css.title}>Contacts</h2>
          <Filter />
          <Contacts />
        </>
      )}
    </div>
  );
};
