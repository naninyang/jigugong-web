import React from 'react';
import styled from '@emotion/styled';
import LinkButton from './utils/LinkButton';
import { mq, fontWeights, Rem, Em } from './utils/designSystem';
import ButtonGreen from './components/ButtonGreen';

const Contents = styled.section({
  paddingTop: `${Rem(97)}`,
  backgroundImage: 'radial-gradient(circle at 0 0, #dcf5e8, #dcf5e8, #eaf7ff)',
});

function index() {
  return (
    <>
      <Contents>
        <ButtonGreen href="/">앱 다운로드</ButtonGreen>
      </Contents>
    </>
  )
}

export default index;
