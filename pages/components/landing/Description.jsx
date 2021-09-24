import React from 'react';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem } from '../../utils/designSystem';

const Paragraph = styled.p({
  lineHeight: 1.67,
  fontWeight: fontWeights.Medium,
  fontSize: Rem(16),
  letterSpacing: `-${Rem(.5)}`,
  color: '#5A5A5A',
  [mq.minXsmall]: {
    position: 'relative',
    zIndex: 999999,
    fontSize: Rem(24),
  },
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
