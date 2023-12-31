import { Formik, Field, FormikHelpers } from 'formik';
import * as yup from 'yup';
import * as S from 'components/ContactForm/ContactForm.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { IContactForm } from 'interfaces/IContactForm';
import { useAppDispatch } from 'redux/hooks';

const initialValues = {
  name: '',
  phone: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  phone: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export default function ContactForm() {
  const dispatch = useAppDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (
    newContact: IContactForm,
    { resetForm }: FormikHelpers<IContactForm>
  ) => {
    const isRepeat = contacts.find(contact => contact.name === newContact.name);

    if (isRepeat) {
      return alert(`${newContact.name} is already in your contacts`);
    } else {
      dispatch(addContact(newContact));
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <S.StyledForm>
        <label>
          <p>Name</p>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <S.ValidateError name="name" component="div" />
        </label>
        <label>
          <p>Number</p>
          <Field
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <S.ValidateError name="phone" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </S.StyledForm>
    </Formik>
  );
}
