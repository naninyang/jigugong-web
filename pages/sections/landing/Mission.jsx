import React from 'react';
import styled from '@emotion/styled';
import { Rem, styles } from '../../utils/designSystem';
import { images } from '../../utils/designSystem';
import ButtonGreen from '../../components/ButtonGreen';
import HeadingPrimary from '../../components/HeadingPrimary';
import HeadingSecondary from '../../components/HeadingSecondary';
import Description from '../../components/Description';

const Container = styled.section();

const Mission = () => {
  return (
    <Container>
      <HeadingPrimary>미션</HeadingPrimary>
      <HeadingSecondary>
        개인의 실천이 모여
        <strong>사회공헌으로</strong>
      </HeadingSecondary>
      <Description>
        <strong>채식, 제로플라스틱, 분리배출, 업사이클링, 플로깅 등</strong>
        나만의 방식으로 환경보호를 실천하고 공유해보세요.
      </Description>
      <ButtonGreen href="/">내부 링크</ButtonGreen>
      <ButtonGreen href="https://naver.com/">외부 링크</ButtonGreen>
      <ButtonGreen href="https://jigugong.com/">지구공 도메인(라우터 안씀)</ButtonGreen>
    </Container>
  )
}

export default Mission;
