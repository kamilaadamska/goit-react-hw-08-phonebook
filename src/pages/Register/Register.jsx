import { Link } from 'react-router-dom';
import css from './register.module.css';

const Register = () => {
  return (
    <form className={css.registerForm}>
      <label className={css.formLabel}>
        Username
        <input
          type="text"
          name="username"
          className={css.formInput}
          pattern="[a-zA-Z0-9_-]{3,20}"
          title="Name may contain only letters, numbers, dashes and underscores."
          required
        />
      </label>
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
        Register
      </button>
      <p className={css.haveAccountInfo}>
        Already have an account?{' '}
        <Link to="/login" className={css.logLink}>
          Log in!
        </Link>
      </p>
    </form>
  );
};

export default Register;
