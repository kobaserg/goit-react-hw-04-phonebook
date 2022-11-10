import React from 'react';
import PropTypes from 'prop-types';
import {
  ListContact,
  ItemContact,
  Contact,
  NameCont,
  BtnDelete,
} from './ContactsList.styled';

export const ContactsList = props => {
  function handleDelete(id) {
    props.contDelete(id);
  }

  return (
    <ListContact>
      {props.contacts.map(cont => {
        return (
          <ItemContact key={cont.id}>
            <Contact>
              &#9742;
              <NameCont>
                <span>{cont.name} :</span>
                <span>{cont.number}</span>
              </NameCont>
            </Contact>
            <BtnDelete type="submit" onClick={e => handleDelete(cont.id)}>
              Delete
            </BtnDelete>
          </ItemContact>
        );
      })}
    </ListContact>
  );
};

ContactsList.propTypes = {
  props: PropTypes.object,
};
