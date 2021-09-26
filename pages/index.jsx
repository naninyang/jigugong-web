import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Main from './sections/landing/Main';
import Mission from './sections/landing/Mission';
import Feature from './sections/landing/Features';
import Commerce from './sections/landing/Commerce';
import Proposal from './sections/landing/Proposal';

const Container = styled.div();

const scrollVerticalTrue = `body{background-color:#F6F6F6}`;
const scrollVerticalFalse = `body{background-color:#DCF5E8}`;

function index() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollVertical = scrollY > 700 ? true : false

  return (
    <Container>
      {scrollVertical && <style>{scrollVerticalTrue}</style>}
      {!scrollVertical && <style>{scrollVerticalFalse}</style>}
      <Main />
      <Mission />
      <Feature />
      <Commerce />
      <Proposal />
    </Container>
  )
}

export default index;
