import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { Section } from './components/Section/Section';
import { Container } from './components/Container/Container';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const firstUse = useRef(true);

  useEffect(() => {
    if (firstUse.current) {
      const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

      if (parsedContacts) {
        setContacts(parsedContacts);
      }

      firstUse.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandle = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} already in the contacts.`);
      return;
    }

    setContacts(contacts => [contact, ...contacts]);
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <div>
      <Section>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={formSubmitHandle} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        </Container>
      </Section>
    </div>
  );
}

export default App;
