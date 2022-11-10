import { useState, useEffect } from 'react';
import { Contacts } from '../Contacts/Contacts';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { View } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formHandlerSubmit = submitData => {
    const contactIs = contacts
      .map(cont => cont.name.includes(submitData.name))
      .includes(true);
    !contactIs
      ? setContacts([submitData, ...contacts])
      : alert(`${submitData.name} is already in contacns`);
  };

  const onSearchContact = filterName => {
    setFilter(filterName);
  };

  const onDeleteContact = id => {
    const updateContacts = contacts.filter(cont => cont.id !== id);
    setContacts(updateContacts);
  };
  let renderList = [];
  const normolizedFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(cont =>
    cont.name.toLowerCase().includes(normolizedFilter)
  );

  filter.length === 0 ? (renderList = contacts) : (renderList = filterContacts);

  return (
    <View>
      <Contacts addSubmitForm={formHandlerSubmit} />
      <Filter filterList={onSearchContact} />
      <ContactsList contacts={renderList} contDelete={onDeleteContact} />
    </View>
  );
}
