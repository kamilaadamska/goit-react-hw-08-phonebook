import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Blocks } from 'react-loader-spinner';
import { useAuth } from 'hooks';
import { Navigation } from 'components/navigation';
import { AuthNav } from 'components/authnav';
import { UserMenu } from 'components/usermenu';
import logo from '../../images/logo.png';
import css from './sharedlayout.module.css';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header className={css.headerBg}>
        <div className={css.headerContainer}>
          <a href="https://kamilaadamska.github.io/goit-react-hw-08-phonebook/">
            <img src={logo} alt="Phonebook logo" width="60" />
          </a>
          <nav className={css.navBox}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </nav>
        </div>
      </header>
      <main>
        <div className={css.container}>
          <Suspense
            fallback={
              <div className={css.centeredContainer}>
                <Blocks wrapperClass={css.centeredContainer} />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </main>
      <footer className={css.footer}>
        <p>Copyrights by Phonebook® 2023 | Desgined by Kamila Adamska</p>
      </footer>
    </>
  );
};
