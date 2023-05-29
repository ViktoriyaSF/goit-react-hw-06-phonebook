// import propTypes from 'prop-types';
import React from 'react';
import { List, Item } from './ContactList.syled';
import { FiDelete } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );
  const onDelContact = id => {
    dispatch(deleteContact(id));
  };
  if (!filteredContacts?.length) {
    return <h1>No contacts found.</h1>;
  }
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>{name}:</p>
          <p>{number}</p>

          <button type="button" onClick={() => onDelContact(id)}>
            <FiDelete />
          </button>
        </Item>
      ))}
    </List>
  );
};
// ContactList.propTypes = {
//   contacts: propTypes.arrayOf(
//     propTypes.exact({
//       id: propTypes.string.isRequired,
//       name: propTypes.string.isRequired,
//       number: propTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
