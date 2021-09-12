import React from 'react';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, Em } from '../utils/designSystem';

const Paragraph = styled.p({
  lineHeight: 1.67,
  fontWeight: fontWeights.Medium,
  fontSize: `${Rem(14)}`,
  color: '#5A5A5A',
  '& strong': {
    display: 'block',
    fontWeight: fontWeights.Medium,
  },
  [mq.minXsmall]: {
    fontSize: `${Rem(24)}`,
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
