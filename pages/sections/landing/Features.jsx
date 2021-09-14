import React from 'react';
import styled from '@emotion/styled';
import { mq, styles, Rem, Em } from '../../utils/designSystem';
import { images } from '../../assets/';
import ButtonGreen from '../../components/ButtonGreen';
import HeadingPrimary from '../../components/HeadingPrimary';
import HeadingSecondary from '../../components/HeadingSecondary';
import Description from '../../components/Description';
import ArticleList from '../../components/ArticleList';

const Container = styled.section({
  backgroundColor: '#dcf5e8',
  [mq.maxMobile]: {
    overflowX: 'hidden',
  },
  [mq.minSmall]: {
    overflowX: 'hidden',
  },
});

const Action = styled.div({
  ...styles.widthSettings,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: Em(40),
  [mq.minTablet]: {
    padding: `${Em(100)} ${Em(40)} 0`,
  },
  [mq.minSmall]: {
    margin: '0 auto',
    padding: `0 0 0 ${Em(68)}`,
    justifyContent: 'center',
    minHeight: Rem(829 + 110),
    height: `calc(100vh - ${Rem(609)})`,
  },
});

const MockupImages = styled.div({
  marginTop: Em(40),
  [mq.minSmall]: {
    marginTop: 0,
  },
});

const MockupImage = styled.div({
  background: `url(${images.mockup.featuresAction}) no-repeat 50% 50%/cover`,
  margin: `0 -${Em(170)}`,
  paddingTop: '120.114345%',
  height: 0,
  [mq.minTablet]: {
    margin: `0 -${Em(150)}`,
    paddingBottom: 0,
  },
  [mq.minXsmall]: {
    margin: `0 -${Em(120)}`,
    maxWidth: Rem(1211),
  },
  [mq.minSmall]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: `${Em(110)} 0 0 ${Em(350)}`,
    paddingTop: '61.114345%',
    width: Rem(1211),
  },
});

const Feature = () => {
  return (
    <Container>
      <Action>
        <HeadingPrimary>실천</HeadingPrimary>
        <HeadingSecondary>
          나만의 친환경 실천
          <strong>일상을 공유해요</strong>
        </HeadingSecondary>
        <Description>
          <strong>채식, 제로플라스틱, 분리배출, 업사이클링, 플로깅 등</strong>
          나만의 방식으로 환경보호를 실천하고 공유해보세요.
        </Description>
        <MockupImages>
          <MockupImage />
        </MockupImages>
      </Action>
      <ArticleList heading={'인기 실천글'}>
        실천글 목록
      </ArticleList>
    </Container>
  )
}

export default Feature;
