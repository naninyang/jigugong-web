import React from 'react';
import styled from '@emotion/styled';
import { mq, styles, fontWeights, Rem, Em } from '../utils/designSystem';

const Container = styled.div({
  backgroundColor: '#f6f6f6',
});

const Contents = styled.div({
  padding: `${Em(40)} 0 ${Em(60)}`,
});

const PrimaryHeading = styled.div({
  ...styles.widthSettings,
  [mq.minTablet]: {
    padding: `0 ${Em(40)} 0 ${Em(30)}`,
  },
  [mq.minSmall]: {
    margin: '0 auto',
    padding: `0 ${Em(68)} ${Em(30)}`,
  },
  '& h4': {
    fontWeight: fontWeights.Medium,
    fontSize: Rem(28),
  },
});

const ArticleList = ({ heading, children }) => {
  return (
    <Container>
      <Contents>
        <PrimaryHeading><h4>{heading}</h4></PrimaryHeading>
        {children}
      </Contents>
    </Container>
  )
}

export default ArticleList;
