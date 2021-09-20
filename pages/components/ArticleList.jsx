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
  paddingBottom: Em(30),
  [mq.minTablet]: {
    padding: `0 ${Em(40)} ${Em(30)}`,
  },
  [mq.minSmall]: {
    margin: '0 auto',
    padding: `0 ${Em(68)} ${Em(30)}`,
  },
  '& h4': {
    fontWeight: fontWeights.Medium,
    fontSize: Rem(20),
    [mq.minXsmall]: {
      fontSize: Rem(28),
    },
  },
});

const ArticleList = ({ aria, heading, children }) => {
  return (
    <Container>
      <Contents aria-labelledby={aria}>
        <PrimaryHeading><h4 id={aria}>{heading}</h4></PrimaryHeading>
        {children}
      </Contents>
    </Container>
  )
}

export default ArticleList;
