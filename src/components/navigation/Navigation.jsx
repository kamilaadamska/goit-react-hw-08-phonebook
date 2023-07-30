import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      )}
    </div>
  );
};
