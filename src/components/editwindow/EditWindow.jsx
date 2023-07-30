import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import {
  selectIdToEdit,
  selectNameToEdit,
  selectNumberToEdit,
} from 'redux/contacts/selectors';
import { setEdit } from 'redux/contacts/editSlice';
import css from './editwindow.module.css';

export const EditWindow = () => {
  const dispatch = useDispatch();
  const id = useSelector(selectIdToEdit);
  const nameToEdit = useSelector(selectNameToEdit);
  const numberToEdit = useSelector(selectNumberToEdit);
  const bodyEl = document.querySelector('body');
  bodyEl.style.overflow = 'hidden';

  const handleSubmit = e => {
    e.preventDefault();

    const editContactForm = e.currentTarget;
    const name = editContactForm.elements.name.value;
    const number = editContactForm.elements.number.value;

    const contact = { name, number };

    dispatch(editContact({ id, contact }));
    dispatch(setEdit({ status: false, id: null, name: null, number: null }));
    bodyEl.style.overflow = 'auto';
  };

  const handleNameChange = e => {
    dispatch(
      setEdit({
        status: true,
        id,
        name: e.target.value,
        number: numberToEdit,
      })
    );
  };

  const handleNumberChange = e => {
    dispatch(
      setEdit({
        status: true,
        id,
        name: nameToEdit,
        number: e.target.value,
      })
    );
  };

  const cancelEditing = () => {
    dispatch(setEdit({ status: false, id: null, name: null, number: null }));
    bodyEl.style.overflow = 'auto';
  };

  return (
    <div className={css.modalContainer}>
      <form onSubmit={handleSubmit} className={css.editWindow}>
        <button
          type="button"
          className={css.cancelButton}
          onClick={cancelEditing}
        >
          x
        </button>
        <label className={css.formLabel}>
          Name
          <input
            type="text"
            name="name"
            className={css.formInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={nameToEdit}
            onChange={e => handleNameChange(e)}
            required
          />
        </label>
        <label className={css.formLabel}>
          Number
          <input
            type="tel"
            name="number"
            className={css.formInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={numberToEdit}
            onChange={e => handleNumberChange(e)}
            required
          />
        </label>
        <button type="submit" className={css.formButton}>
          Edit contact
        </button>
      </form>
    </div>
  );
};
