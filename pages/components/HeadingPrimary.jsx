import React from 'react';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, Em } from '../utils/designSystem';

const PrimaryHeading = styled.h2({
  lineHeight: `${Em(50)}`,
  fontWeight: fontWeights.Bold,
  fontSize: `${Rem(26)}`,
  textShadow: `0 ${Em(1)} ${Em(4)} #c4c4c4`,
  color: '#0EAA55',
  [mq.minXsmall]: {
    lineHeight: `${Em(50)}`,
    fontSize: `${Rem(42)}`,
    textShadow: `0 ${Em(1)} ${Em(4)} #c4c4c4`,
  },
});

const HeadingPrimary = ({ children }) => {
  return (
    <PrimaryHeading>
      {children}
    </PrimaryHeading>
  )
}

export default HeadingPrimary;
