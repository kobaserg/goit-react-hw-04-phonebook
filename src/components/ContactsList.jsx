import React from 'react';
import styled from 'styled-components';
import { theme } from './theme';
import PropTypes from 'prop-types';

const ListContact = styled.ul`
  padding-left: 0;
  width: 300px;
`;

const ItemContact = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Contact = styled.li`
  display: flex;
  width: 300px;
`;

const NameCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 5px;
  margin-right: 10px;
`;

const BtnDelete = styled.button`
  width: 50px;
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
