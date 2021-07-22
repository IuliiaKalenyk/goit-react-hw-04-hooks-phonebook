import React from 'react';
import { useState } from 'react';
import shortid from 'shortid';
import { FormInput, FormBtn } from './ContactForm.styled';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numInputId = shortid.generate();

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);
    reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          <FormInput
            placeholder="Name"
            id={nameInputId}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor={numInputId}>
          <FormInput
            placeholder="Tel"
            id={numInputId}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
          />
        </label>
        <FormBtn type="submit">Add contact</FormBtn>
      </form>
    </div>
  );
}
