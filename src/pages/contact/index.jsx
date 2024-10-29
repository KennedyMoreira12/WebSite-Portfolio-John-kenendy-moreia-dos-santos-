// src/pages/contact/index.jsx

import React from 'react';
import { Container, Content } from './style';
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import ItemContact from '../../../components/ItemContact';

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact IconFa={FaLinkedin} link="https://www.linkedin.com/in/john-kennedy-moreira-405aa7128" />
        <ItemContact IconFa={FaInstagram} link="https://www.instagram.com/johnkennedy7314/" />
        <ItemContact IconFa={FaEnvelope} link="kennedyjan2012@hotmail.com" />
      </Content>
    </Container>
  );
}
