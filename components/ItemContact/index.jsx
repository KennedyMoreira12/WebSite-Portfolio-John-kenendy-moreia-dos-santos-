// components/ItemContact.jsx

import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

const LinkText = styled.a`
  color: #0070f3; /* Cor do link ajustável */
  text-decoration: none;
`;

const ItemContact = ({ IconFa, link }) => {
  return (
    <ContactContainer>
      <IconWrapper>
        <IconFa />
      </IconWrapper>
      <LinkText href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </LinkText>
    </ContactContainer>
  );
};

export default ItemContact;
