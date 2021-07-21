import PropTypes from "prop-types";
import { List, Item, Button } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <span>
              {name}:
            </span>
            <span>{number}</span>
            <Button
              onClick={() => {
                onDeleteContact(id);
              }}
            >Delete</Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDeleteContact: PropTypes.func.isRequired,
};