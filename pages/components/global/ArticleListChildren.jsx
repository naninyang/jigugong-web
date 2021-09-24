import React from 'react';
import styled from '@emotion/styled';
import { mq, styles, fontWeights, Rem, Em } from '../../utils/designSystem';

const Contents = styled.div({
  paddingBottom: Em(60),
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

const ArticleListChildren = ({ label, heading, children }) => {
  return (
    <Contents aria-labelledby={label}>
      <PrimaryHeading><h4 id={label}>{heading}</h4></PrimaryHeading>
      {children}
    </Contents>
  )
}

export default ArticleListChildren;
