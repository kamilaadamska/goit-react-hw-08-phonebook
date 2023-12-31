import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import css from './filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = filter => dispatch(setFilter(filter));

  return (
    <label className={css.filterLabel}>
      Find contact by name
      <input
        type="text"
        name="filter"
        onChange={e => handleFilterChange(e.target.value)}
        value={filter}
        className={css.filterInput}
      />
    </label>
  );
};
