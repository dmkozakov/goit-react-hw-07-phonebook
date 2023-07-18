import ContactForm from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { Container } from './Container.styled';
import { ContactFormSection } from '../components/ContactForm/ContactFormSection.styled';
import { ContactListSection } from '../components/ContactList/ContactListSection.styled';

export default function App() {
  return (
    <Container>
      <ContactFormSection>
        <h1>Phonebook</h1>
        <ContactForm />
      </ContactFormSection>

      <ContactListSection>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </ContactListSection>
    </Container>
  );
}
