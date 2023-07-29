// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
// import { ContactForm } from './contactform/ContactForm';
// import { ContactList } from './contactlist/ContactList';
// import { Filter } from './filter/Filter';
// import css from './app.module.css';
// import { fetchContacts } from 'redux/operations';
// import { Blocks } from 'react-loader-spinner';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './sharedlayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
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
