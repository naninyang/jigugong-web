import React from 'react';
import styled from '@emotion/styled';
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
        <ButtonGreen href="/">내부 링크</ButtonGreen>
        <ButtonGreen href="https://naver.com/">외부 링크</ButtonGreen>
        <ButtonGreen href="https://jigugong.com/">지구공 도메인(라우터 안씀)</ButtonGreen>
      </Contents>
    </>
  )
}

export default index;
