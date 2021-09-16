import React from 'react';
import styled from '@emotion/styled';
import { mq, styles, Rem, Em } from '../../utils/designSystem';
import { images } from '../../assets/';
import HeadingPrimary from '../../components/HeadingPrimary';
import HeadingSecondary from '../../components/HeadingSecondary';
import Description from '../../components/Description';
import ArticleList from '../../components/ArticleList';

const Container = styled.section();

const Practical = styled.div({
  backgroundColor: '#dcf5e8',
  [mq.maxTablet]: {
    overflow: 'hidden',
  },
  [mq.minSmall]: {
    overflow: 'hidden',
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

const MockupImagesAction = styled.div({
  marginTop: Em(40),
  [mq.minTablet]: {
    overflow: 'hidden',
    margin: `${Em(40)} -${Em(40)} 0`,
  },
  [mq.minSmall]: {
    marginTop: 0,
  },
});

const MockupImageAction = styled.div({
  background: `url(${images.mockup.featuresAction}) no-repeat 50% 50%/cover`,
  margin: `0 -${Em(170)}`,
  paddingTop: '120.114345%',
  height: 0,
  [mq.minTablet]: {
    margin: `0 -${Em(110)}`,
    paddingBottom: 0,
  },
  [mq.minXsmall]: {
    margin: `0 -${Em(70)}`,
    maxWidth: Rem(1211),
  },
  [mq.minSmall]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: `${Em(110)} 0 0 ${Em(350)}`,
    paddingTop: '69.114345%',
    width: Rem(1211),
  },
});

const Activity = styled.div({
  backgroundImage: 'linear-gradient(to top, #dcf5e8, #eaf7ff)',
  display: 'flex',
  flexDirection: 'column',
  padding: `${Em(40)} ${Em(25)} 0`,
  [mq.minXsmall]: {
    padding: 0,
  },
  [mq.minSmall]: {
    padding: `${Em(80)} 0`,
    minHeight: Rem(322 + 322 + 120),
    height: '100vh',
  },
});

const Contents = styled.div({
  display: 'flex',
  flexDirection: 'column',
  [mq.minSmall]: {
    width: Rem(582),
  },
  [mq.minXsmall]: {
    '&[data-activity=conversation]': {
      paddingRight: Em(100),
      alignItems: 'flex-end',
      textAlign: 'right',
    },
    '&[data-activity=store]': {
      paddingLeft: Em(100),
      alignItems: 'flex-start',
      textAlign: 'left',
    },
  },
});

const Conversation = styled.div({
  [mq.minXsmall]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${Em(80)} 0 ${Em(40)}`,
  },
  [mq.minSmall]: {
    padding: 0,
    minHeight: Rem(433),
    height: '50vh',
  },
});

const MockupImagesConversation = styled.div({
  overflow: 'hidden',
  paddingTop: Em(40),
  [mq.minXsmall]: {
    paddingTop: 0,
  },
  [mq.minSmall]: {
    height: Rem(433),
  },
});

const MockupImageConversation = styled.div({
  background: `url(${images.mockup.featuresConversation}) no-repeat 50% 50% /contain`,
  paddingTop: '78.114345%',
  height: 0,
  [mq.minXsmall]: {
    paddingTop: '77.114345%',
    width: `calc(100vh - ${Rem(600)})`,
  },
  [mq.minSmall]: {
    width: Rem(582),
  },
});

const Store = styled.div({
  paddingTop: Em(20),
  [mq.minXsmall]: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Em(40),
  },
  [mq.minSmall]: {
    padding: 0,
    minHeight: Rem(433),
    height: '50vh',
  },
});

const MockupImagesStore = styled.div({
  overflow: 'hidden',
  paddingTop: Em(40),
  [mq.minXsmall]: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 0,
  },
  [mq.minSmall]: {
    height: Rem(433),
  },
});

const MockupImageStore = styled.div({
  background: `url(${images.mockup.featuresStore}) no-repeat 50% 50%/contain`,
  margin: `-${Em(37)} 0 -${Em(37)} -${Em(70)}`,
  paddingTop: '94.114345%',
  height: 0,
  [mq.minXsmall]: {
    paddingTop: '77.114345%',
    width: `calc(100vh - ${Rem(600)})`,
  },
  [mq.minSmall]: {
    width: Rem(582),
  },
});

const Feature = () => {
  return (
    <Container>
      <Practical>
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
          <MockupImagesAction>
            <MockupImageAction />
          </MockupImagesAction>
        </Action>
      </Practical>
      <ArticleList heading={'인기 실천글'}>
        실천글 목록
      </ArticleList>
      <Activity>
        <Conversation>
          <Contents data-activity='conversation'>
            <HeadingPrimary>커뮤니티</HeadingPrimary>
            <Description>
              환경에 관심 있는 사람들과
              <strong>자유롭게 이야기를 나누고 소통해요.</strong>
            </Description>
          </Contents>
          <MockupImagesConversation>
            <MockupImageConversation />
          </MockupImagesConversation>
        </Conversation>
        <Store>
          <Contents data-activity='store'>
            <HeadingPrimary>지구+</HeadingPrimary>
            <Description>
              환경을 위한 실천에 동참하는
              <strong>제로웨이스트/비건 매장을 소개해드릴게요.</strong>
            </Description>
          </Contents>
          <MockupImagesStore>
            <MockupImageStore />
          </MockupImagesStore>
        </Store>
      </Activity>
    </Container>
  )
}

export default Feature;
