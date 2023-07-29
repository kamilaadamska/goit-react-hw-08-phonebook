import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Blocks } from 'react-loader-spinner';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import css from './sharedlayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.headerBg}>
        <div className={css.headerContainer}>
          <a href="https://kamilaadamska.github.io/goit-react-hw-08-phonebook/">
            <img src={logo} alt="Phonebook logo" width="60" />
          </a>
          <nav className={css.navBox}>
            <div>
              <NavLink to="/" className={css.link}>
                Home
              </NavLink>
              <NavLink to="/contacts" className={css.link}>
                Contacts
              </NavLink>
            </div>
            <div>
              <NavLink to="/login" className={css.link}>
                Login
              </NavLink>
              <NavLink to="/register" className={css.link}>
                Register
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className={css.container}>
          <Suspense fallback={<Blocks />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};
