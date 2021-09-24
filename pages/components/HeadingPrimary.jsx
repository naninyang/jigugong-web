import React from 'react';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, Em } from '../utils/designSystem';

const PrimaryHeading = styled.h2({
  paddingBottom: Em(11.45),
  fontWeight: fontWeights.Bold,
  fontSize: Rem(26),
  textShadow: `0 ${Em(1)} ${Em(2)} #c4c4c4`,
  color: '#0EAA55',
  [mq.minXsmall]: {
    fontSize: Rem(42),
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
