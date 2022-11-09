import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { theme } from './theme';
import PropTypes from 'prop-types';

const PhoneBook = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 256px;
  height: 100%;
  border: 2px solid black;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${theme.fontWeights.bolt};
`;

const Input = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 150px;
`;

const FormContact = styled.form`
  display: flex;
  flex-direction: column;
`;

const BtnSubmit = styled.button`
  width: 100px;
  padding: 5px;
  background-color: ${theme.colors.btnBackground};
  border: none;
  color: ${theme.colors.btnColorSweet};
  cursor: pointer;
  :hover,
  :focus {
    background-color: ${theme.colors.accentBackground};
    color: ${theme.colors.btnColorDarc};
  }
  border-radius: ${theme.radii.normal};
`;

export class Contacts extends React.Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      id: nanoid(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addSubmitForm(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <PhoneBook>
          <div>
            <FormContact action="" onSubmit={this.handleSubmit}>
              <Label htmlFor={this.idNameInput}>
                Name
                <Input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Label>
              <Label htmlFor={this.idNumberInput}>
                Number
                <Input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  value={this.state.number}
                  onChange={this.handleChange}
                />
              </Label>

              <BtnSubmit type="submit">Add contact</BtnSubmit>
            </FormContact>
          </div>
        </PhoneBook>
        <h2>Contacts</h2>
      </div>
    );
  }
}
Contacts.propTypes = {
  props: PropTypes.object,
};
