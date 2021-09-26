import React from 'react';
import styled from '@emotion/styled';
import { Em } from '../../utils/designSystem';

const Container = styled.div({
  paddingTop: Em(40),
  backgroundColor: '#f6f6f6',
});

const ArticleList = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ArticleList;
