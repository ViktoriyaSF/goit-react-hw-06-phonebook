// import propTypes from 'prop-types';
import React from 'react';
import { Form, Input, Label, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { addContact, contactsInitialState } from 'redux/contactsSlice';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const contact = {
      id: nanoid(),
      name: evt.currentTarget.elements.name.value,
      number: evt.currentTarget.elements.number.value,
    };
    console.log(contactsInitialState);
    console.log(contacts);

    const listName = contacts.map(contact => contact.name.toLowerCase());
    const newName = contact.name.toLowerCase().trim();

    if (listName.includes(newName)) {
      return toast.warn(`${contact.name} is already in contacts.`);
    }

    dispatch(addContact(contact));
    evt.currentTarget.reset();
  };
  const nameInputId = nanoid();
  const telInputId = nanoid();
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nameInputId}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={telInputId}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

// ContactForm.propTypes = {
//   onSubmit: propTypes.func.isRequired,
// };
