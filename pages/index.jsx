import React from 'react';
import styled from '@emotion/styled';
import Main from './sections/landing/Main';
import Mission from './sections/landing/Mission';
import Action from './sections/landing/Action';
import Feature from './sections/landing/Feature';
import Proposal from './sections/landing/Proposal';

const Container = styled.div();

function index() {
  return (
    <Container>
      <Main />
      <Mission />
      <Action />
      <Feature />
      <Proposal />
    </Container>
  )
}

export default index;
