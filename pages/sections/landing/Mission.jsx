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
        <strong>지구공에서 환경보호 미션에 참여해보세요.</strong>
        개인의 작은 실천이 모여 커다란 사회공헌이 됩니다.
      </Description>
      <ButtonGreen href="/">내부 링크</ButtonGreen>
      <ButtonGreen href="https://naver.com/">외부 링크</ButtonGreen>
      <ButtonGreen href="https://jigugong.com/">지구공 도메인(라우터 안씀)</ButtonGreen>
    </Container>
  )
}

export default Mission;
