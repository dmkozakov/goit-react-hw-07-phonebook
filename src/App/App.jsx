import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { Container } from './Container.styled';
import { ContactFormSection } from 'components/ContactForm/ContactForm.styled';
import * as S from 'components/ContactList/ContactList.styled';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactFormSection>
        <h1>Phonebook</h1>
        <ContactForm />
      </ContactFormSection>

      <S.ContactListSection>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        {contacts.length > 0 && <ContactList />}
      </S.ContactListSection>
    </Container>
  );
}
