import React from 'react';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, Em } from '../utils/designSystem';

const SecondaryHeading = styled.h3({
  paddingBottom: Em(11.45),
  lineHeight: 1.4,
  fontWeight: fontWeights.Bold,
  fontSize: `${Rem(30)}`,
  textShadow: '0 1px 4px #c4c4c4',
  color: '#5a5a5a',
  [mq.minXsmall]: {
    fontSize: `${Rem(50)}`,
  },
  '& strong': {
    display: 'block',
    fontWeight: fontWeights.Bold,
  },
});

const HeadingSecondary = ({ children }) => {
  return (
    <SecondaryHeading>
      {children}
    </SecondaryHeading>
  )
}

export default HeadingSecondary;
