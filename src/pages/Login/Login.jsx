import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
// import { Navigate } from 'react-router-dom';
import avatar from '../../images/blank-avatar.png';
import css from './login.module.css';

const Login = () => {
  // const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const logForm = e.currentTarget;
    dispatch(
      logIn({
        email: logForm.elements.email.value,
        password: logForm.elements.password.value,
      })
    );
    logForm.reset();
  };

  return (
    <>
      {/* {isLoggedIn ? <Navigate to="/" /> : null} */}
      <form onSubmit={handleSubmit} className={css.loginForm}>
        <img
          src={avatar}
          alt="blank avatar"
          width="130"
          className={css.avatar}
        />
        <label className={css.formLabel}>
          E-mail
          <input
            type="email"
            name="email"
            className={css.formInput}
            pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Enter a valid email address."
            required
          />
        </label>
        <label className={css.formLabel}>
          Password
          <input
            type="password"
            name="password"
            className={css.formInput}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
            title="The password should contain at least 8 characters, including at least one lowercase letter, one uppercase letter and one number."
            required
          />
        </label>
        <button type="submit" className={css.formButton}>
          Login
        </button>
        <p className={css.haveAccountInfo}>
          Don't have an account?{' '}
          <Link to="/register" className={css.regLink}>
            Register
          </Link>{' '}
          now!
        </p>
      </form>
    </>
  );
};

export default Login;
