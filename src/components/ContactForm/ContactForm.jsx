import css from './ContactForm.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class ContactForm extends Component {
    state = {
    name: '',
    number: '',
    };
    

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
    
  handleAddButton = e => {
      e.preventDefault();
      const { name, number } = this.state;
      this.props.addedContact(name, number);
      this.setState({ name: '' });
      this.setState({number: ''})
  };
    render() {
        const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleAddButton}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            onChange={this.handleInput}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInput}
          />
        </label>
        <button style={{ 'marginTop': '15px'}}type="submit">Add contact</button>
      </form>
    );
  }
};

ContactForm.propTypes = {
  addedContact: PropTypes.func,
}