import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import logo from '../../images/logo.png';
import css from './home.module.css';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HelmetProvider>
      <Helmet>
        <title>PhoneBook</title>
        <link rel="icon" href={logo} />
      </Helmet>
      <div className={css.homeBox}>
        <img src={logo} alt="Phonebook logo" width="200" className={css.logo} />
        <div>
          <h1 className={css.slogan}>
            Keep your contacts safe and organize them easily!
          </h1>
          {isLoggedIn ? null : (
            <p className={css.logOrReg}>
              <Link to="/login" className={css.link}>
                Login
              </Link>{' '}
              or{' '}
              <Link to="/register" className={css.link}>
                register
              </Link>{' '}
              now!
            </p>
          )}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
