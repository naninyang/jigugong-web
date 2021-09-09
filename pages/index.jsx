import React from 'react';
import styled from '@emotion/styled';
import LinkButton from './utils/LinkButton';
import { mq, fontWeights, Rem, Em } from './utils/designSystem';

const Contents = styled.section({
  paddingTop: `${Rem(97)}`,
  backgroundImage: 'radial-gradient(circle at 0 0, #dcf5e8, #dcf5e8, #eaf7ff)',
});

const Button = styled(LinkButton)({
  border: '1px',
  display: 'inline-block',
  padding: `${Em(16, 16)}`,
  fontSize: `${Rem(16)}`,
  fontWeight: fontWeights.Bold,
  [mq.maxMobile]: {
    padding: `${Em(16, 22)}`,
    fontSize: `${Rem(22)}`,
  },
});

function index() {
  return (
    <>
      <Contents>
        <Button href="/">Contents</Button>
      </Contents>
    </>
  )
}

export default index;
