import React from 'react';
import styled from 'styled-components';
import { Contacts } from './Contacts';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';

const View = styled.div`
  padding-top: 50px;
  padding-left: 50px;
`;

export class App extends React.Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Serg Dykyy', number: '367-56-78' },
      // { id: 'id-5', name: 'Stefan Sikorsky', number: '227-91-26' },
      // { id: 'id-6', name: 'Maria Better', number: '567-45-92' },
      // { id: 'id-7', name: 'Annie Copeland', number: '896-83-44' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contFromLS = localStorage.getItem('contacts');
    const parsedContFromLS = JSON.parse(contFromLS);

    if (parsedContFromLS) {
      this.setState({ contacts: parsedContFromLS });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formHandlerSubmit = submitData => {
    const contactIs = this.state.contacts
      .map(cont => cont.name.includes(submitData.name))
      .includes(true);
    !contactIs
      ? this.setState(prevState => ({
          contacts: [submitData, ...prevState.contacts],
        }))
      : alert(`${submitData.name} is already in contacns`);
  };

  onSearchContact = filterName => {
    this.setState({ filter: filterName });
  };

  onDeleteContact = id => {
    const updateContacts = this.state.contacts.filter(cont => cont.id !== id);
    this.setState({ contacts: updateContacts });
  };

  render() {
    const normolizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(cont =>
      cont.name.toLowerCase().includes(normolizedFilter)
    );
    let renderList = [];
    this.state.filter.length === 0
      ? (renderList = this.state.contacts)
      : (renderList = visibleContacts);

    return (
      <View>
        <Contacts addSubmitForm={this.formHandlerSubmit} />
        <Filter filterList={this.onSearchContact} />
        <ContactsList contacts={renderList} contDelete={this.onDeleteContact} />
      </View>
    );
  }
}
