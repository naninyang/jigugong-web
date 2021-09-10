import React from 'react';
import styled from '@emotion/styled';
import { Rem, styles } from '../../utils/designSystem';
import { images } from '../../utils/designSystem';
import ButtonGreen from '../../components/ButtonGreen';
import HeadingPrimary from '../../components/HeadingPrimary';
import HeadingSecondary from '../../components/HeadingSecondary';
import Description from '../../components/Description';

const Container = styled.section();

const Feature = () => {
  return (
    <Container>
      <ButtonGreen href="/">내부 링크</ButtonGreen>
      <ButtonGreen href="https://naver.com/">외부 링크</ButtonGreen>
      <ButtonGreen href="https://jigugong.com/">지구공 도메인(라우터 안씀)</ButtonGreen>
    </Container>
  )
}

export default Feature;
