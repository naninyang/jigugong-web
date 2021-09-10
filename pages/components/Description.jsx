import React from 'react';
import styled from '@emotion/styled';
import { fontWeights, Rem, Em } from '../utils/designSystem';

const Paragraph = styled.p({
  lineHeight: `${Em(40, 24)}`,
  fontWeight: fontWeights.Medium,
  fontSize: `${Rem(24)}`,
  color: '#5A5A5A',
  '& strong': {
    display: 'block',
    fontWeight: fontWeights.Medium,
  },
});

const Description = ({ children }) => {
  return (
    <Paragraph>
      {children}
    </Paragraph>
  )
}

export default Description;
