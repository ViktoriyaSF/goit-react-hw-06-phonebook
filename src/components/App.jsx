import React from 'react';
import { GlobalStyle } from './BasicStyles/GlobalStyle';
import { Layout } from './Layout/Layout';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" />
      <GlobalStyle />
    </Layout>
  );
};
