import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    this.state.contacts.some(
      arr => arr.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in your phonebook.`)
      : this.setState(prevState => ({
          contacts: [
            { id: nanoid(), name: name, number: number },
            ...prevState.contacts,
          ],
        }));
  };
  componentDidMount() {
    const getSavedContacts = JSON.parse(localStorage.getItem('contact'));
    if (getSavedContacts) {
      this.setState(() => ({ contacts: getSavedContacts }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const savedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contact', savedContacts);
    }
  }

  searchInput = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <div style={{ marginLeft: '80px', marginTop: '50px' }}>
        <h2>Phonebook</h2>
        <ContactForm addedContact={this.addContact} />
        <h2>Contacts</h2>
        <SearchFilter value={filter} filteredArr={this.searchInput} />
        <ContactList
          contacts={filteredContacts}
          deleteContacts={this.deleteContacts}
        />
      </div>
    );
  }
}
