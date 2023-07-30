// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
// import { ContactForm } from './contactform/ContactForm';
// import { ContactList } from './contactlist/ContactList';
// import { Filter } from './filter/Filter';
// import { fetchContacts } from 'redux/operations';
// import { Blocks } from 'react-loader-spinner';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { SharedLayout } from './sharedlayout';
import { Blocks } from 'react-loader-spinner';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { lazy } from 'react';
import css from './app.module.css';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className={css.centeredContainer}>
      <Blocks wrapperClass={css.centeredContainer} />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

//  const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

// <div className={css.container}>
//       <h1 className={css.header}>Phonebook</h1>
//       <ContactForm />
//       <h2 className={css.headerSecondary}>Contacts</h2>
//       <div className={css.contactsBox}>
//         <Filter />
//         {isLoading && (
//           <div className={css.centred}>
//             <Blocks />
//           </div>
//         )}
//         {error && (
//           <div className={css.centred}>
//             <b>{error}</b>
//           </div>
//         )}
//         {contacts && <ContactList />}
//       </div>
//     </div>
