import React from 'react';
import { Container } from 'semantic-ui-react';
import moment from 'moment';

export const Footer = () => {
  const year = moment().format('YYYY');

  return (
    <Container textAlign='center'>
      <p>Copyright {year}</p>
    </Container>
  );
};

export default Footer;
