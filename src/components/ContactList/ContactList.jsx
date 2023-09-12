import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts , deleteContacts}) => {
  return (
    <ul style={{ display: 'inline-flex', flexDirection: 'column', 'lineHeight': '1.3em', 'gap': '5px' }}>
      {contacts.map(contact => (
          <li style={{ display: 'list-item', 'listStyleType': 'circle' }}
            key={contact.id}>
            {contact.name} : {contact.number}
          <button
          className={css.Button}
          onClick={ () => deleteContacts(contact.id)}
          type="button">
            Delete
          </button>
          </li>
      ))}
    </ul>
  
  );
};


ContactList.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number,
  }),
  deleteContacts: PropTypes.func,
}