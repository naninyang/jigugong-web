import React from 'react';
import styled from '@emotion/styled';
import { fontWeights, Rem, Em } from '../utils/designSystem';

const SecondaryHeading = styled.h3({
  lineHeight: `${Em(70, 50)}`,
  fontWeight: fontWeights.Bold,
  fontSize: `${Rem(50)}`,
  textShadow: `0 ${Em(1, 50)} ${Em(4, 50)} #c4c4c4`,
  color: '#5a5a5a',
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
