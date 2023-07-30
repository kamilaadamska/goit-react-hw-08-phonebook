import { NavLink } from 'react-router-dom';
import css from './authnav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
    </div>
  );
};
