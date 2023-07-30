import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredContacts,
  selectEditStatus,
} from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { setEdit } from 'redux/contacts/editSlice';
import { EditWindow } from 'components/editwindow';
import css from './contactlist.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isEditing = useSelector(selectEditStatus);

  const handleDelete = id => dispatch(deleteContact(id));
  const handleEdit = (id, name, number) => {
    const status = true;
    dispatch(setEdit({ status, id, name, number }));
  };

  return (
    <>
      {isEditing && <EditWindow />}
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            {name}: {number}
            <button
              onClick={() => handleEdit(id, name, number)}
              type="button"
              className={css.formBtn}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(id)}
              type="button"
              className={css.formBtn}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
