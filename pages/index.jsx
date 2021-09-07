import React from 'react';
import styled from '@emotion/styled';
import LinkButton from './utils/LinkButton';
import { mq, fontWeights, Relative } from './utils/designSystem';

const Contents = styled.section();

const Button = styled(LinkButton)({
  border: '1px',
  display: 'inline-block',
  padding: `${Relative(16)}em`,
  fontSize: `${Relative(16)}rem`,
  fontWeight: fontWeights.Bold,
  [mq.maxMobile]: {
    fontSize: `${Relative(22)}rem`,
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
