import css from './app.module.css';
import Phonebook from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { useGetContactsQuery } from 'store/contacts/contactsApi';
import Loader from './Loader/Loader';

export const App = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  console.log(isLoading);

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <Phonebook />
      {isLoading && <Loader />}
      {!isLoading && contacts && contacts.length === 0 && (
        <h2 className={css.titleEmpty}>The contact list is empty</h2>
      )}
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
