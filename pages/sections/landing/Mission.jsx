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
  backgroundColor: '#eaf7ff',
  [mq.minSmall]: {
    overflow: 'hidden',
  },
});

const Contents = styled.div({
  ...styles.widthSettings,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  [mq.minTablet]: {
    padding: `${Em(100)} ${Em(40)} 0`,
  },
  [mq.minSmall]: {
    margin: '0 auto',
    padding: `0 0 0 ${Em(68)}`,
    justifyContent: 'center',
    minHeight: Rem(698),
    height: `calc(100vh - ${Rem(308)})`,
  },
});

const LinkGroup = styled.div({
  position: 'relative',
  zIndex: 999999,
  display: 'flex',
  margin: `${Em(50)} 0`,
  flexDirection: 'column-reverse',
  [mq.minXsmall]: {
    flexDirection: 'row',
  },
  [mq.minSmall]: {
    marginBottom: 0,
  },
});

const MockupImages = styled.div({
  paddingBottom: Em(40),
  [mq.minXsmall]: {
    position: 'relative',
    marginTop: `-${Em(60)}`,
    paddingBottom: 0,
    width: '100%',
    height: Rem(663),
  },
  [mq.minSmall]: {
    position: 'static',
    margin: 0,
    width: 'auto',
    height: 'auto',
  },
});

const MockupImage1 = styled.div({
  position: 'relative',
  margin: `-${Em(40)} -${Em(25)} -${Em(80)}`,
  paddingTop: '145.11434511%',
  background: `url(${images.mockup.mission00}) no-repeat 50% 50%/contain`,
  [mq.minXsmall]: {
    position: 'absolute',
    bottom: 0,
    left: `-${Rem(123)}`,
    margin: 0,
    paddingTop: '83.114345%',
    width: Rem(509),
    height: 0,
    backgroundPosition: '0 0',
  },
  [mq.minSmall]: {
    left: '50%',
    transform: 'translate(-50%, 0)',
    marginTop: 0,
    marginLeft: `${Em(250)}`,
    paddingTop: '59.114345%',
    maxWidth: Rem(509),
    width: '100%',
    backgroundPosition: '100% 100%',
  },
});

const MockupImage2 = styled.div({
  position: 'relative',
  margin: `-${Em(80)} -${Em(25)} -${Em(40)}`,
  paddingTop: '145.11434511%',
  background: `url(${images.mockup.mission01}) no-repeat 0 0/contain`,
  [mq.minXsmall]: {
    position: 'absolute',
    bottom: 0,
    left: `${Rem(203)}`,
    margin: 0,
    paddingTop: '42.114345%',
    width: Rem(284),
    height: 0,
    backgroundPosition: '0 0',
  },
  [mq.minSmall]: {
    left: '50%',
    transform: 'translate(-50%, 0)',
    margin: `0 0 0 ${Em(510)}`,
    paddingTop: '28.114345%',
    maxWidth: Rem(284),
    width: '100%',
  },
});

const MockupImage3 = styled.div({
  position: 'relative',
  margin: `-${Em(80)} -${Em(25)} -${Em(40)}`,
  paddingTop: '145.11434511%',
  background: `url(${images.mockup.mission02}) no-repeat 0 0/contain`,
  [mq.minXsmall]: {
    position: 'absolute',
    bottom: 0,
    left: `${Rem(430)}`,
    margin: 0,
    paddingTop: '42.114345%',
    width: Rem(284),
    height: 0,
    backgroundPosition: '0 0',
  },
  [mq.minSmall]: {
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
    margin: `0 0 0 ${Em(770)}`,
    paddingTop: '28.114345%',
    maxWidth: Rem(284),
    width: '100%',
  },
});

const Mission = () => {
  return (
    <Container>
      <Contents>
        <HeadingPrimary>미션</HeadingPrimary>
        <HeadingSecondary>
          개인의 실천이 모여
          <strong>사회공헌으로</strong>
        </HeadingSecondary>
        <Description>
          <strong>지구공에서 환경보호 미션에 참여해보세요.</strong>
          개인의 작은 실천이 모여 커다란 사회공헌이 됩니다.
        </Description>
        <LinkGroup>
          <ButtonGreen href="/">미션목록 보러가기</ButtonGreen>
        </LinkGroup>
        <MockupImages>
          <MockupImage1 />
          <MockupImage2 />
          <MockupImage3 />
        </MockupImages>
      </Contents>
      <ArticleList heading={'지구공과 함께한 파트너'}>
        지구공 파트너
      </ArticleList>
    </Container>
  )
}

export default Mission;
