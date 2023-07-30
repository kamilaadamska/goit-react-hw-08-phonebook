import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import css from './contactlist.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          {name}: {number}
          <button
            onClick={() => handleDelete(id)}
            type="button"
            className={css.removeButton}
          >
            Remove contact
          </button>
        </li>
      ))}
    </ul>
  );
};
