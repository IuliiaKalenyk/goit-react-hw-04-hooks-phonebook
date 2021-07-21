import React from 'react';
import './App.css';
import { v4 as unId } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { Section } from './components/Section/Section';
import { Container } from './components/Container/Container';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  isInList = (contact, contacts) =>
    contacts.find(cont =>
      cont.name.toLocaleLowerCase().includes(contact.name.toLocaleLowerCase()),
    );
  addContact = e => {
    const { contacts } = this.state;
    const contact = {
      id: unId(),
      name: e.name,
      number: e.number,
    };

    this.isInList(contact, contacts)
      ? alert(`${contact.name} is already in your list`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const normalizeContacts = this.state.filter.toLocaleLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeContacts),
    );
    const { filter } = this.state;
    return (
      <div>
        <Section>
          <Container>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.addContact} />

            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
