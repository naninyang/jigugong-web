import React from 'react';
import styled from '@emotion/styled';
import { fontWeights, Rem, Em } from '../utils/designSystem';

const PrimaryHeading = styled.h2({
  lineHeight: `${Em(50, 42)}`,
  fontWeight: fontWeights.Bold,
  fontSize: `${Rem(42)}`,
  textShadow: `0 ${Em(1, 42)} ${Em(4, 42)} #c4c4c4`,
  color: '#0EAA55',
});

const HeadingPrimary = ({ children }) => {
  return (
    <PrimaryHeading>
      {children}
    </PrimaryHeading>
  )
}

export default HeadingPrimary;
