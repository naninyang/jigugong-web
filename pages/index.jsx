import React from 'react';
import styled from '@emotion/styled';
import Main from './sections/landing/Main';
import Mission from './sections/landing/Mission';
import Feature from './sections/landing/Features';
import Commerce from './sections/landing/Commerce';
import Proposal from './sections/landing/Proposal';

const Container = styled.div();

function index() {
  return (
    <Container>
      <Main />
      <Mission />
      <Commerce />
      <Feature />
      <Proposal />
    </Container>
  )
}

export default index;
