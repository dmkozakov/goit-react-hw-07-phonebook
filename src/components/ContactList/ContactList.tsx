import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import * as S from 'components/ContactList/ContactList.styled';
import { deleteContact } from 'redux/operations';
import { useAppDispatch } from 'redux/hooks';

export const ContactList = () => {
  const dispatch = useAppDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <S.ContactList>
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            <div>
              <S.ContactName>{name}</S.ContactName>
              <S.ContactPhone>{phone}</S.ContactPhone>
            </div>
            <button
              type="button"
              data-id={id}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </S.ContactList>
  );
};
